let merge = require('merge');

function VideoTools(cfgs){
	this._cfgs = merge({
		auto : 1,
		playingCallback : function(){},
		endCallback : function(){}
	},cfgs);
	this.video = this._cfgs.video;
	this.init();
}
VideoTools.prototype = {
	init : function(){
		this.bind()
		this.load();
		this._cfgs.auto && this.play();
	},
	load : function(){
		this.video.load();
	},
	play : function(){
		this.video.play()
	},
	pause: function(){
		this.video.pause();
	},
	bind:function(){
		// this.video.addEventListener('loadedmetadata', function(){
		// 	console.log(this.video.duration)
		// }.bind(this),false)
		this.video.addEventListener('timeupdate', function(){
			this._cfgs.playingCallback(this.video.currentTime,this.video,this)
		}.bind(this),false)
		this.video.addEventListener('ended', function(){
			this._cfgs.endCallback(this.video.currentTime,this.video,this)
		}.bind(this),false)
	},
	setTime : function(time){
		this.video.currentTime = time;
	}
}

module.exports = VideoTools;