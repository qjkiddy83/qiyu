require('../css/index.css');

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        let i = 0;
        for (; i < this.length; i++) {
            callback(this[i],i)
        }
    };
}

let VideoTools = require('../js/video');
//播放视频停止时间序列
// let videoPlaySteps = [600, 4460, 8800, 13420, 23390, 27480, 32320, 35450, 39380];
//点击转跳视频时间点序列
let toVideoPlaySteps = [0, 600, 4460, 8800, 13420, 23390, 27480, 32320, 35450, 39380];
//当前步骤
let curStep = 0;
//步骤动画是否执行完毕
let stepLock = 1;
//logo执行是否完成
let logoOver = 0;
//小logo节点
let container1El = document.querySelector('#animation_container1'),
    //小logo渐现动画对象
    container1 = {
        opacity: 0
    };
//右侧导航节点
let bullets = Array.prototype.slice.call(document.querySelectorAll('aside li'));

let arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function(){
	if(this.className === "arrow end"){
		stepTo(0)
	}
})

let step1Alock = 0;
let logoTimer;

//视频播放初始化
let videoTools = new VideoTools({
    video: document.querySelector('video'),
    playingCallback: function(currentTime, video) {
    	//时间转换为毫秒
        let sec = Math.floor(currentTime * 1000);
        //到达当前步骤停止时间点
        if (sec >= toVideoPlaySteps[curStep+1]) {
            video.pause();
            stepLock = 0;
            if (curStep === 0) {
            	//大logo显示
                fnStartAnimation();
                //logo执行时间
                clearTimeout(logoTimer)
                logoTimer = setTimeout(function() {
                    logoOver = 1;
                }, 2000)
            }
        }
        //到达执行小logo动画时间点
        if(sec>=43000){
        	createjs.Tween.get(container1)
            .to({ opacity: 1 }, 1000)
            .addEventListener("change", function() {
                container1El.style.opacity = container1.opacity
            });
        }else{
        	createjs.Tween.get(container1)
            .to({ opacity: 0 }, 100)
            .addEventListener("change", function() {
                container1El.style.opacity = container1.opacity
            });
        }
        //大logo需要出现在视野内
        if(sec<=600){
        	if(step1Alock) return;
        	step1Alock = 1;
	        reinit();
        	//视频下降动画
	        createjs.Tween.get(videoStyle).wait(1000)
	            .to({ top: 310 }, 500).addEventListener("change", function() {
	                videoEl.style.top = videoStyle.top + 'px'
	            });
	        //大logo下降动画
	        createjs.Tween.get(canvasStyle).wait(1000)
	            .to({ top: 0 }, 500)
	            .addEventListener("change", function() {
	                canvasEl.style.top = canvasStyle.top + 'px'
	            });
        }else{
        	step1Alock = 0;
        }

        if(sec >= 39380){
        	arrow.className = 'arrow end'
        }else{
        	arrow.className = 'arrow'
        }
    },
    endCallback : function(){
    	stepLock = 0
    }
})

//视频默认位置
let videoStyle = {
        top: 310
    },
    //大logo默认位置
    canvasStyle = {
        top: 0
    },
    //视频节点对象
    videoEl = document.querySelector('.video'),
    //大logo显示节点对象
    canvasEl = document.querySelector('#animation_container');

//滚轮事件监听
let scrollEvent = document.mozHidden !== undefined ? 'DOMMouseScroll' : 'mousewheel';
window.addEventListener(scrollEvent, function(event) {
    let type = event.type;
    if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    }

    //logo动画或者步骤视频未达到停止位置，返回
    if (!logoOver || stepLock) {
        return;
    }
    //视频播放锁定
    stepLock = 1;

    //滚轮下滚
    if (event.delta < 0) {
        if(curStep >= 9){
        	curStep = 9;
        	stepLock = 0;
        	return;
        }
        curStep++;

	    if (curStep >= 1) {
	        logoUpMove()
	    }
	//滚轮上滚
    } else {
        if (curStep <= 0) {
            stepLock = 0
            return;
        }
        let preStep = --curStep;
        if (curStep >= 1) {
	        logoUpMove()
	    }
        videoTools.setTime(toVideoPlaySteps[preStep] / 1000);
    }
    videoTools.play();
    setClass();

}, false);

//logo 上浮动画
function logoUpMove(){
	createjs.Tween.get(videoStyle)
        .to({ top: 0 }, 1500).addEventListener("change", function() {
            videoEl.style.top = videoStyle.top + 'px'
        });

    createjs.Tween.get(canvasStyle)
        .to({ top: -2000 }, 1500)
        .addEventListener("change", function() {
            canvasEl.style.top = canvasStyle.top + 'px'
        });
}

//设置导航点样式
function setClass(){
	bullets.forEach(function(_, i) {
        _.className = ''
        if (i === curStep) {
            _.className = "active";
        }
    })
}

//步骤转跳方法
function stepTo(step){
	if (!logoOver || stepLock) {
        return;
    }
    stepLock = 1;
	curStep = step;
	if (curStep >= 1) {
        logoUpMove()
    }
    videoTools.setTime(toVideoPlaySteps[curStep] / 1000);
    videoTools.play();

    setClass();
}

//右侧导航点击事件绑定
bullets.forEach(function(_,i){
	_.addEventListener('click',function(){
		curStep = i;
		stepTo(i);
	},false)
})