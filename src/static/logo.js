(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.nav = function() {
	this.initialize(img.nav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,140);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nav();
	this.instance.parent = this;
	this.instance.setTransform(-960,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-70,1920,140);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nav();
	this.instance.parent = this;
	this.instance.setTransform(-960,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-70,1920,140);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AghBXQAOgUAFgXQAFgTAAgjIAAhUIBKAAIAACmQAAABAAABQABABAAAAQAAAAABABQAAAAABAAIAHAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIACgEQACgGAAghIATAFQAAAZgCANQgBAMgFAFQgGAEgLABIgKAAQgYgBAAgVIAAiUIgiAAIAABAQAAAkgFAaQgFAZgQAZgAhCBjIAAhlQgKAbgRAZIgJgXQAYgdALgmIgeAAIAAgUIAfAAIAAgpIAVAAIAAApIAZAAIAAAUIgZAAIAAAJQAOAOAQARIgNATIgRgdIAABtg");
	this.shape.setTransform(170.8,-38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhMBmIAAhvIgTAXIgGgUQAhgpAOg2IATAJQgHAagOAZIAACPgAAPBmIAAgsIgfAAIAAgUIAfAAIAAhTQgQBDgnAsIgKgSQAiglAQg4IgoAAIAAgUIA3AAIAAgjIAUAAIAAAjIA6AAIAAAUIgrAAQAPAzAlAoIgOARQgmgwgPg7IAABSIAgAAIAAAUIggAAIAAAsg");
	this.shape_1.setTransform(148.8,-38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhiAKIAAgTIDGAAIAAATg");
	this.shape_2.setTransform(126.8,-38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAnBOQgFgGgBgOIgCgUQgCgNgHgFQgHgHgOAAIgpAAIAABBIgYAAIAAibIBFAAQAXAAAPAKQAOAMAAAXQAAAMgHAJQgHALgOACIAAABQAVAEADAXIADAaQABAOAIAIgAgogGIApAAQAQAAAIgHQAIgGAAgNQAAgNgHgGQgJgGgQAAIgpAAg");
	this.shape_3.setTransform(108.6,-38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgOBOIg4ibIAaAAIAsCAIABAAIAsiAIAaAAIg5Cbg");
	this.shape_4.setTransform(93.4,-38.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAmBOIg/hKIgUAUIAAA2IgYAAIAAibIAYAAIAABLIBLhLIAeAAIhFBDIBPBYg");
	this.shape_5.setTransform(79.1,-38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAPBOIAAghIhMAAIAAgXIBNhjIAWAAIAABmIAYAAIAAAUIgYAAIAAAhgAgpAZIA4AAIAAhJIAAAAg");
	this.shape_6.setTransform(64,-38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgzBjQgdAAAAgVQAAgOAVgSQAbgaBCgiIhvAAIAAgUICRAAIAAAUQhZAwgbAaQgIAJgCAFQAAAFAGABIBrAAQAJAAAEgFQAGgEACgiIAUAIQgEAmgJAIQgJAIgRAAgAAbgqIAAgSIg0AAIAAASIgVAAIAAgSIgzAAIAAgTIAzAAIAAgTIAVAAIAAATIA0AAIAAgTIAUAAIAAATIAzAAIAAATIgzAAIAAASg");
	this.shape_7.setTransform(39,-38.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAYBlIgEgUIATACQALAAAAgJIAAhIIiTAAIAAgTIDDAAIAAATIgbAAIAABNQAAAWgaAAgAhGBMIAAg6IBXAAIAAA6gAgyA6IAwAAIAAgXIgwAAgAgIguQgWASgqAIIgLgSQA0gHARgVIhIAAIAAgTIBOAAIAAgPIAVAAIAAAPIBKAAIAAATIhRAAIgCAGQArAJAlANIgMASQglgQgrgKg");
	this.shape_8.setTransform(17,-38.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1BTQAcgEAWgKQgSgLgPgOQgTAjgeATIgJgSQAlgaAQgxIgfAAIAAgQIgSAAIAAgnIAgAAIgGgRIAUgDIAHAUIAfAAIgHgTIATgDIAHAWIAZAAQAIgMAGgPQg4AFhMAAIgHgUQBjABBEgJIAKATIgmAEIAUAHQgFALgGAJIAiAAIAAAnIgSAAIAAAQIhhAAIgFAPIBfAAIAAAQQgOASgUAOQAbAKAgAEIgJASQgngFgfgPQgbAPghAGgAAPA7QARgKAMgLIg/AAQAQAMASAJgAgMgYIgCALIBYAAIAAgSIiPAAIAAASIAiAAIACgOg");
	this.shape_9.setTransform(-5.2,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-18,-56,201.9,34.8), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFCC").s().p("AiRB+QAZgmASgKIAAhaIgqAAIAAgcIBHAAIAAB5IAFAFQALAMAMAHQAOAGAcACIBAAAIAwAAIAlgBIgHAdIhKAAIg5gBQgfgBgTgFQgTgFgPgQQgGgIgGAAQgKAAgYAqgABLBjIgGgYIAdABQAKAAAAgLIAAg4Ig4AAIAAAeIATgDIgHgQIAUgHQAKAXAHAcIgVAFIgDgLQgiAGg5AFIgEgaIAsgCIAAggIgyAAIAABWIgdAAIAAhuIBQAAIAAgRIhEAAIAAhqIClAAIAABqIhEAAIAAARIBQAAIAABWQAAAcgeAAgAA4g4IAnAAIAAgSIgnAAgAgMg4IAnAAIAAgSIgnAAgAA4hfIAnAAIAAgTIgnAAgAgMhfIAnAAIAAgTIgnAAgAiMh+IAUgUQAfAZAWAaIgVAVQgSgXgigdg");
	this.shape.setTransform(178.4,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFCC").s().p("AAjCTIgGgdQAOACANAAQARAAAAgNIAAhoIjXAAIAAgcIEdAAIAAAcIgoAAIAABvQAAAhglAAgAhnBuIAAhVICAAAIAABVgAhKBUIBHAAIAAghIhHAAgAh5g4QBMgKAXgeIhoAAIAAgdIByAAIABgVIAeAAIgBAVIBtAAIAAAdIh1AAIgFAIQA/AOA2ATIgQAZQg4gXg+gPQggAbg9AMg");
	this.shape_1.setTransform(127.2,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFCC").s().p("AgkCOQgjABAAgkIAAg+IAfAAIAAA4QAAAMAOAAIBCAAQAHAAAFgGQAEgEACgbIAcAJQgDApgKAJQgJAIgTgBgAiRB3QAUghAIgmIAeAHQgLAvgVAhgABMA2IAZgQQAfAoARAfIgaASQgQgggfgpgAgVA0IAWgOQAXAZAMAPIgZARQgLgUgVgXgAhcAgIAAhLQgTAhgaAbIgLgcQAigeAVgoIgxAAIAAgcIAyAAIAAggIAfAAIAAAgIAnAAIAAAcIgnAAIAAAMQAXAPAZAUIgRAZIgfghIAABKgAgEAdIAAikICBAAIAACkgAAYADIBHAAIAAgVIhHAAgAAYgqIBHAAIAAgUIhHAAgAAYhXIBHAAIAAgVIhHAAg");
	this.shape_2.setTransform(76.2,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFCC").s().p("AiQB4QBKgFAzgSQgQgNgWgOIAUgTQAdASARAQQAmgTATgdIhsAAQghAegtAOIgRgaQBIgVAlg5IAYANIgNATIB0AAIAAAYQgnBii9ARgAAxgKIAAhCQgUAogaAZIgPgXQAegZATgfIgkAAIAAgbIAwAAIAAgeIAdAAIAAAeIA4AAIAAAbIgqAAQASAfAmAXIgUAZQghgfgRgjIAABDgAhTgKIAAg7QgVAjgaAYIgRgYQAigYAVggIgtAAIAAgbIA2AAIAAgeIAdAAIAAAeIAsAAIAAAbIgsAAIAAAFQAYAQAVAQIgPAYQgQgSgOgNIAAAyg");
	this.shape_3.setTransform(25.4,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFCC").s().p("AACCSIgHgcIArACQAoAAAIgSQAIgTAAhZIizAAIAPiMIAfADIgEAkICxAAIAAAdIi0AAIgFAsICwAAQAACKgQAWQgPAVgyAAIgqgBgAiFBEIAAgdIDIAAIAAAdg");
	this.shape_4.setTransform(-26.6,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-43.9,0,259.2,48.8), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("AJQgRQhlgBhHhIQhIhIAAhnQAAhnBIhIQBJhJBmAAQBnAABJBJQBJBIAABnQAABnhJBIQhJBJhnAAQgBAAgCAAIAACGIAACsAJQB1ICqAAQCFALgBB5IAAB3AJQjtQgKgBgHgHQgIgIAAgMQAAgMAIgHQAJgJALAAQAMAAAIAJQAJAHAAAMQAAAMgJAIQgIAIgMAAQgBAAgCAAIAADcAB0nAIAAhHAB0lTIAAKxQAAAJABAJQANCYCbgBIJrAAAEiFwIAAh3QACh9CCgHICqAAAhDgdIAAGCQgBBDgeAnQgmAwhRAHQgIABgIAAQgBAAgCAAIpoAAAnlnAIAAhHAtFB1IJcAAIAAD7IpcAAgAuHnAIGiAAIGiGjItEAAIGimjIGiAAAGwFCIFFAA");
	this.shape.setTransform(90.4,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-5,-5,190.9,113.9), null);


(lib.元件3xxx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1EC3FF").ss(45.2,1,1).p("Eg3dA3eIAmgmEgw7Aw8MBoZhoZ");
	this.shape.setTransform(355,355);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3xxx, new cjs.Rectangle(-22.6,-22.6,755.2,755.2), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0.6)"],[0,1],117,105,-229,-81.2).s().p("A52UEQq0q0AAvUQABs9HwpxQBchzCRgRQCSgRB0BcQBzBcARCRQARCShbB0QlZGzACJBQAAKtHkHkQHlHlKtAAQKtAAHlnkIAAgBQFnlnBenUQAdiQB6hSQB6hTCQAdQCQAcBTB7QBSB6gcCPQiDKloFIFQq1K1vUAAQvUAAq1q1g");
	this.shape.setTransform(234.7,197.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,469.4,395.5), null);


(lib.元件xxx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件3xxx();
	this.instance.parent = this;
	this.instance.setTransform(1346.9,-317.9,0.425,0.425,0,0,0,355,354.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:355.1,regY:355,x:-556.4,y:1548.9},89).to({_off:true},1).wait(80));

	// 图层 4
	this.instance_1 = new lib.元件3xxx();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2300.8,-921.7,2.575,2.575,0,0,0,355,355);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({x:-896.9,y:2283.9},89).wait(1));

	// 图层 3
	this.instance_2 = new lib.元件3xxx();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4155.5,-2388,5.637,5.637,0,0,0,355,355);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({x:-1919.6,y:3700.6},89).to({_off:true},1).wait(26));

	// 图层 1
	this.instance_3 = new lib.元件3xxx();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1071,-362.6,1,1,0,0,0,355,355);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({x:-760.7,y:1456.1},89).to({_off:true},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1186.6,-478.2,320.7,320.7);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(337.7,173.4,1,1,0,0,0,234.7,197.7);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 153, 0)];
	this.instance.cache(-2,-2,473,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({x:337.5},0).wait(1).to({x:337.3,y:173.5},0).wait(1).to({x:336.9},0).wait(1).to({x:336.4,y:173.6},0).wait(1).to({x:335.9},0).wait(1).to({x:335.2,y:173.7},0).wait(1).to({x:334.4,y:173.9},0).wait(1).to({x:333.4,y:174},0).wait(1).to({x:332.3,y:174.1},0).wait(1).to({x:331.1,y:174.3},0).wait(1).to({x:329.7,y:174.5},0).wait(1).to({x:328.2,y:174.7},0).wait(1).to({x:326.5,y:174.9},0).wait(1).to({x:324.7,y:175.2},0).wait(1).to({x:322.6,y:175.4},0).wait(1).to({x:320.4,y:175.7},0).wait(1).to({x:318,y:176.1},0).wait(1).to({x:315.4,y:176.4},0).wait(1).to({x:312.6,y:176.8},0).wait(1).to({x:309.6,y:177.2},0).wait(1).to({x:306.3,y:177.7},0).wait(1).to({x:302.8,y:178.1},0).wait(1).to({x:299.1,y:178.6},0).wait(1).to({x:295.1,y:179.2},0).wait(1).to({x:290.9,y:179.8},0).wait(1).to({x:286.4,y:180.4},0).wait(1).to({x:281.7,y:181},0).wait(1).to({x:276.8,y:181.7},0).wait(1).to({x:271.6,y:182.4},0).wait(1).to({x:266.1,y:183.1},0).wait(1).to({x:260.5,y:183.9},0).wait(1).to({x:254.7,y:184.7},0).wait(1).to({x:248.7,y:185.5},0).wait(1).to({x:242.7,y:186.3},0).wait(1).to({x:236.5,y:187.1},0).wait(1).to({x:230.5,y:188},0).wait(1).to({x:224.4,y:188.8},0).wait(1).to({x:218.4,y:189.6},0).wait(1).to({x:212.6,y:190.4},0).wait(1).to({x:207,y:191.2},0).wait(1).to({x:201.6,y:191.9},0).wait(1).to({x:196.5,y:192.6},0).wait(1).to({x:191.7,y:193.2},0).wait(1).to({x:187.3,y:193.8},0).wait(1).to({x:183.2,y:194.4},0).wait(1).to({x:179.4,y:194.9},0).wait(1).to({x:176,y:195.4},0).wait(1).to({x:172.9,y:195.8},0).wait(1).to({x:170.2,y:196.1},0).wait(1).to({x:167.8,y:196.5},0).wait(1).to({x:165.7,y:196.8},0).wait(1).to({x:163.9,y:197},0).wait(1).to({x:162.3,y:197.2},0).wait(1).to({x:161.1,y:197.4},0).wait(1).to({x:160.1,y:197.5},0).wait(1).to({x:159.3,y:197.6},0).wait(1).to({x:158.8,y:197.7},0).wait(1).to({x:158.5},0).wait(1).to({x:158.4},0).wait(1).to({x:158.6,y:197.6},0).wait(1).to({x:159,y:197.3},0).wait(1).to({x:159.8,y:196.7},0).wait(1).to({x:161,y:195.8},0).wait(1).to({x:162.4,y:194.7},0).wait(1).to({x:164.3,y:193.3},0).wait(1).to({x:166.5,y:191.6},0).wait(1).to({x:169,y:189.7},0).wait(1).to({x:172,y:187.5},0).wait(1).to({x:175.3,y:184.9},0).wait(1).to({x:179.1,y:182.1},0).wait(1).to({x:183.2,y:178.9},0).wait(1).to({x:187.8,y:175.5},0).wait(1).to({x:192.7,y:171.7},0).wait(1).to({x:198.1,y:167.6},0).wait(1).to({x:204,y:163.2},0).wait(1).to({x:210.2,y:158.5},0).wait(1).to({x:216.9,y:153.4},0).wait(1).to({x:224,y:148},0).wait(1).to({x:231.5,y:142.3},0).wait(1).to({x:239.4,y:136.3},0).wait(1).to({x:247.7,y:130},0).wait(1).to({x:256.4,y:123.4},0).wait(1).to({x:265.4,y:116.5},0).wait(1).to({x:274.8,y:109.4},0).wait(1).to({x:284.5,y:102.1},0).wait(1).to({x:294.4,y:94.5},0).wait(1).to({x:304.6,y:86.8},0).wait(1).to({x:314.9,y:79},0).wait(1).to({x:325.4,y:71},0).wait(1).to({x:336,y:63},0).wait(1).to({x:346.6,y:55},0).wait(1).to({x:357.2,y:46.9},0).wait(1).to({x:367.8,y:38.9},0).wait(1).to({x:378.2,y:31},0).wait(1).to({x:388.4,y:23.3},0).wait(1).to({x:398.4,y:15.7},0).wait(1).to({x:408.2,y:8.3},0).wait(1).to({x:417.7,y:1.1},0).wait(1).to({x:426.8,y:-5.8},0).wait(1).to({x:435.5,y:-12.4},0).wait(1).to({x:443.8,y:-18.7},0).wait(1).to({x:451.7,y:-24.7},0).wait(1).to({x:459.2,y:-30.4},0).wait(1).to({x:466.1,y:-35.7},0).wait(1).to({x:472.7,y:-40.6},0).wait(1).to({x:478.7,y:-45.2},0).wait(1).to({x:484.2,y:-49.4},0).wait(1).to({x:489.3,y:-53.2},0).wait(1).to({x:493.9,y:-56.7},0).wait(1).to({x:498,y:-59.8},0).wait(1).to({x:501.6,y:-62.6},0).wait(1).to({x:504.8,y:-65},0).wait(1).to({x:507.5,y:-67},0).wait(1).to({x:509.8,y:-68.8},0).wait(1).to({x:511.6,y:-70.2},0).wait(1).to({x:513,y:-71.2},0).wait(1).to({x:514,y:-72},0).wait(1).to({x:514.6,y:-72.4},0).wait(1).to({x:514.8,y:-72.6},0).wait(1).to({x:514.7,y:-72.3},0).wait(1).to({x:514.6,y:-71.6},0).wait(1).to({x:514.3,y:-70.4},0).wait(1).to({x:514,y:-68.6},0).wait(1).to({x:513.6,y:-66.3},0).wait(1).to({x:513,y:-63.4},0).wait(1).to({x:512.4,y:-60},0).wait(1).to({x:511.6,y:-55.9},0).wait(1).to({x:510.8,y:-51.3},0).wait(1).to({x:509.8,y:-45.9},0).wait(1).to({x:508.7,y:-40},0).wait(1).to({x:507.4,y:-33.3},0).wait(1).to({x:506,y:-25.9},0).wait(1).to({x:504.5,y:-17.8},0).wait(1).to({x:502.9,y:-9},0).wait(1).to({x:501.1,y:0.5},0).wait(1).to({x:499.2,y:10.9},0).wait(1).to({x:497.1,y:22},0).wait(1).to({x:494.9,y:33.8},0).wait(1).to({x:492.5,y:46.4},0).wait(1).to({x:490,y:59.7},0).wait(1).to({x:487.4,y:73.8},0).wait(1).to({x:484.7,y:88.6},0).wait(1).to({x:481.8,y:104},0).wait(1).to({x:478.8,y:120},0).wait(1).to({x:475.7,y:136.6},0).wait(1).to({x:472.5,y:153.6},0).wait(1).to({x:469.3,y:171},0).wait(1).to({x:465.9,y:188.8},0).wait(1).to({x:462.6,y:206.7},0).wait(1).to({x:459.2,y:224.7},0).wait(1).to({x:455.9,y:242.7},0).wait(1).to({x:452.5,y:260.7},0).wait(1).to({x:449.2,y:278.3},0).wait(1).to({x:446,y:295.7},0).wait(1).to({x:442.8,y:312.7},0).wait(1).to({x:439.7,y:329.1},0).wait(1).to({x:436.8,y:345},0).wait(1).to({x:433.9,y:360.3},0).wait(1).to({x:431.2,y:374.8},0).wait(1).to({x:428.6,y:388.7},0).wait(1).to({x:426.2,y:401.7},0).wait(1).to({x:423.9,y:414},0).wait(1).to({x:421.7,y:425.4},0).wait(1).to({x:419.8,y:436.1},0).wait(1).to({x:417.9,y:446},0).wait(1).to({x:416.2,y:455},0).wait(1).to({x:414.7,y:463.3},0).wait(1).to({x:413.3,y:470.7},0).wait(1).to({x:412,y:477.5},0).wait(1).to({x:410.9,y:483.4},0).wait(1).to({x:409.9,y:488.7},0).wait(1).to({x:409.1,y:493.2},0).wait(1).to({x:408.4,y:497.1},0).wait(1).to({x:407.8,y:500.3},0).wait(1).to({x:407.3,y:502.9},0).wait(1).to({x:406.9,y:504.9},0).wait(1).to({x:406.7,y:506.3},0).wait(1).to({x:406.5,y:507.1},0).wait(1).to({y:507.4},0).wait(1).to({x:406.4,y:507.3},0).wait(1).to({x:406.3,y:507},0).wait(1).to({x:406,y:506.6},0).wait(1).to({x:405.6,y:506.1},0).wait(1).to({x:405.2,y:505.3},0).wait(1).to({x:404.6,y:504.4},0).wait(1).to({x:403.9,y:503.3},0).wait(1).to({x:403,y:502},0).wait(1).to({x:402.1,y:500.5},0).wait(1).to({x:401,y:498.8},0).wait(1).to({x:399.8,y:496.9},0).wait(1).to({x:398.4,y:494.8},0).wait(1).to({x:396.9,y:492.4},0).wait(1).to({x:395.3,y:489.8},0).wait(1).to({x:393.5,y:487},0).wait(1).to({x:391.5,y:484},0).wait(1).to({x:389.4,y:480.7},0).wait(1).to({x:387.1,y:477.1},0).wait(1).to({x:384.7,y:473.3},0).wait(1).to({x:382.1,y:469.3},0).wait(1).to({x:379.4,y:465},0).wait(1).to({x:376.5,y:460.5},0).wait(1).to({x:373.4,y:455.7},0).wait(1).to({x:370.2,y:450.6},0).wait(1).to({x:366.8,y:445.4},0).wait(1).to({x:363.3,y:439.9},0).wait(1).to({x:359.7,y:434.3},0).wait(1).to({x:356,y:428.4},0).wait(1).to({x:352.1,y:422.4},0).wait(1).to({x:348.2,y:416.3},0).wait(1).to({x:344.2,y:410},0).wait(1).to({x:340.2,y:403.7},0).wait(1).to({x:336.1,y:397.4},0).wait(1).to({x:332,y:391},0).wait(1).to({x:328,y:384.7},0).wait(1).to({x:324,y:378.5},0).wait(1).to({x:320.1,y:372.4},0).wait(1).to({x:316.3,y:366.4},0).wait(1).to({x:312.6,y:360.6},0).wait(1).to({x:309,y:355},0).wait(1).to({x:305.6,y:349.6},0).wait(1).to({x:302.3,y:344.5},0).wait(1).to({x:299.2,y:339.6},0).wait(1).to({x:296.3,y:335.1},0).wait(1).to({x:293.6,y:330.8},0).wait(1).to({x:291,y:326.8},0).wait(1).to({x:288.7,y:323.2},0).wait(1).to({x:286.5,y:319.8},0).wait(1).to({x:284.6,y:316.8},0).wait(1).to({x:282.8,y:314},0).wait(1).to({x:281.2,y:311.6},0).wait(1).to({x:279.8,y:309.4},0).wait(1).to({x:278.6,y:307.5},0).wait(1).to({x:277.6,y:305.9},0).wait(1).to({x:276.8,y:304.6},0).wait(1).to({x:276.1,y:303.5},0).wait(1).to({x:275.6,y:302.7},0).wait(1).to({x:275.2,y:302.1},0).wait(1).to({x:275,y:301.8},0).wait(1).to({x:274.9,y:301.7},0).wait(1).to({x:275,y:301.5},0).wait(1).to({x:275.2,y:301.1},0).wait(1).to({x:275.6,y:300.5},0).wait(1).to({x:276.1,y:299.5},0).wait(1).to({x:276.8,y:298.3},0).wait(1).to({x:277.7,y:296.8},0).wait(1).to({x:278.7,y:294.9},0).wait(1).to({x:280,y:292.7},0).wait(1).to({x:281.4,y:290.2},0).wait(1).to({x:283.1,y:287.3},0).wait(1).to({x:284.9,y:284.1},0).wait(1).to({x:287,y:280.4},0).wait(1).to({x:289.3,y:276.4},0).wait(1).to({x:291.9,y:271.9},0).wait(1).to({x:294.6,y:267},0).wait(1).to({x:297.7,y:261.7},0).wait(1).to({x:301,y:256},0).wait(1).to({x:304.5,y:249.8},0).wait(1).to({x:308.3,y:243.1},0).wait(1).to({x:312.3,y:236},0).wait(1).to({x:316.7,y:228.4},0).wait(1).to({x:321.2,y:220.4},0).wait(1).to({x:326,y:212},0).wait(1).to({x:331.1,y:203.2},0).wait(1).to({x:336.3,y:194},0).wait(1).to({x:341.8,y:184.5},0).wait(1).to({x:347.4,y:174.7},0).wait(1).to({x:353.1,y:164.6},0).wait(1).to({x:358.9,y:154.4},0).wait(1).to({x:364.8,y:144},0).wait(1).to({x:370.8,y:133.7},0).wait(1).to({x:376.7,y:123.3},0).wait(1).to({x:382.5,y:113.1},0).wait(1).to({x:388.3,y:103},0).wait(1).to({x:393.9,y:93.1},0).wait(1).to({x:399.3,y:83.6},0).wait(1).to({x:404.6,y:74.3},0).wait(1).to({x:409.7,y:65.5},0).wait(1).to({x:414.5,y:57},0).wait(1).to({x:419,y:49},0).wait(1).to({x:423.3,y:41.5},0).wait(1).to({x:427.4,y:34.4},0).wait(1).to({x:431.2,y:27.8},0).wait(1).to({x:434.7,y:21.6},0).wait(1).to({x:437.9,y:15.9},0).wait(1).to({x:440.9,y:10.7},0).wait(1).to({x:443.6,y:5.9},0).wait(1).to({x:446.1,y:1.6},0).wait(1).to({x:448.3,y:-2.3},0).wait(1).to({x:450.3,y:-5.8},0).wait(1).to({x:452.1,y:-8.9},0).wait(1).to({x:453.6,y:-11.6},0).wait(1).to({x:455,y:-14},0).wait(1).to({x:456.1,y:-16},0).wait(1).to({x:457.1,y:-17.6},0).wait(1).to({x:457.8,y:-18.9},0).wait(1).to({x:458.4,y:-19.9},0).wait(1).to({x:458.8,y:-20.7},0).wait(1).to({x:459,y:-21.1},0).wait(1).to({x:459.1,y:-21.2},0).wait(1).to({y:-21.1},0).wait(1).to({x:458.9,y:-21},0).wait(1).to({x:458.7,y:-20.7},0).wait(1).to({x:458.4,y:-20.4},0).wait(1).to({x:458.1,y:-19.9},0).wait(1).to({x:457.6,y:-19.3},0).wait(1).to({x:457,y:-18.5},0).wait(1).to({x:456.3,y:-17.7},0).wait(1).to({x:455.6,y:-16.7},0).wait(1).to({x:454.7,y:-15.6},0).wait(1).to({x:453.7,y:-14.3},0).wait(1).to({x:452.6,y:-12.9},0).wait(1).to({x:451.4,y:-11.4},0).wait(1).to({x:450,y:-9.7},0).wait(1).to({x:448.6,y:-7.8},0).wait(1).to({x:447,y:-5.8},0).wait(1).to({x:445.3,y:-3.6},0).wait(1).to({x:443.4,y:-1.3},0).wait(1).to({x:441.4,y:1.3},0).wait(1).to({x:439.2,y:4},0).wait(1).to({x:437,y:6.9},0).wait(1).to({x:434.5,y:10},0).wait(1).to({x:431.9,y:13.3},0).wait(1).to({x:429.1,y:16.8},0).wait(1).to({x:426.2,y:20.5},0).wait(1).to({x:423.1,y:24.4},0).wait(1).to({x:419.8,y:28.6},0).wait(1).to({x:416.4,y:33},0).wait(1).to({x:412.8,y:37.6},0).wait(1).to({x:409,y:42.4},0).wait(1).to({x:405,y:47.4},0).wait(1).to({x:400.8,y:52.7},0).wait(1).to({x:396.5,y:58.2},0).wait(1).to({x:392,y:63.9},0).wait(1).to({x:387.3,y:69.8},0).wait(1).to({x:382.5,y:75.9},0).wait(1).to({x:377.5,y:82.2},0).wait(1).to({x:372.4,y:88.7},0).wait(1).to({x:367.2,y:95.4},0).wait(1).to({x:361.8,y:102.2},0).wait(1).to({x:356.4,y:109.1},0).wait(1).to({x:350.9,y:116.1},0).wait(1).to({x:345.3,y:123.1},0).wait(1).to({x:339.7,y:130.2},0).wait(1).to({x:334.1,y:137.3},0).wait(1).to({x:328.6,y:144.4},0).wait(1).to({x:323,y:151.4},0).wait(1).to({x:317.6,y:158.3},0).wait(1).to({x:312.2,y:165.1},0).wait(1).to({x:307,y:171.7},0).wait(1).to({x:301.9,y:178.2},0).wait(1).to({x:296.9,y:184.5},0).wait(1).to({x:292.2,y:190.5},0).wait(1).to({x:287.6,y:196.4},0).wait(1).to({x:283.1,y:201.9},0).wait(1).to({x:278.9,y:207.3},0).wait(1).to({x:274.9,y:212.4},0).wait(1).to({x:271.1,y:217.2},0).wait(1).to({x:267.5,y:221.7},0).wait(1).to({x:264.1,y:226},0).wait(1).to({x:260.9,y:230.1},0).wait(1).to({x:258,y:233.8},0).wait(1).to({x:255.2,y:237.3},0).wait(1).to({x:252.6,y:240.6},0).wait(1).to({x:250.3,y:243.6},0).wait(1).to({x:248.1,y:246.4},0).wait(1).to({x:246.1,y:248.9},0).wait(1).to({x:244.3,y:251.2},0).wait(1).to({x:242.7,y:253.2},0).wait(1).to({x:241.2,y:255.1},0).wait(1).to({x:239.9,y:256.8},0).wait(1).to({x:238.8,y:258.2},0).wait(1).to({x:237.8,y:259.5},0).wait(1).to({x:236.9,y:260.5},0).wait(1).to({x:236.2,y:261.4},0).wait(1).to({x:235.7,y:262.1},0).wait(1).to({x:235.2,y:262.7},0).wait(1).to({x:234.9,y:263.1},0).wait(1).to({x:234.8,y:263.3},0).wait(1).to({x:234.7,y:263.4},0).wait(1).to({y:263.3},0).wait(1).to({x:234.9,y:263.2},0).wait(1).to({x:235.1,y:263},0).wait(1).to({x:235.3,y:262.8},0).wait(1).to({x:235.7,y:262.5},0).wait(1).to({x:236.2,y:262.1},0).wait(1).to({x:236.7,y:261.6},0).wait(1).to({x:237.4,y:261},0).wait(1).to({x:238.2,y:260.3},0).wait(1).to({x:239,y:259.6},0).wait(1).to({x:240,y:258.7},0).wait(1).to({x:241.1,y:257.8},0).wait(1).to({x:242.3,y:256.7},0).wait(1).to({x:243.6,y:255.5},0).wait(1).to({x:245.1,y:254.3},0).wait(1).to({x:246.7,y:252.9},0).wait(1).to({x:248.4,y:251.4},0).wait(1).to({x:250.2,y:249.8},0).wait(1).to({x:252.2,y:248},0).wait(1).to({x:254.3,y:246.2},0).wait(1).to({x:256.6,y:244.2},0).wait(1).to({x:259,y:242.1},0).wait(1).to({x:261.5,y:239.9},0).wait(1).to({x:264.1,y:237.6},0).wait(1).to({x:266.9,y:235.2},0).wait(1).to({x:269.8,y:232.7},0).wait(1).to({x:272.8,y:230.1},0).wait(1).to({x:275.8,y:227.4},0).wait(1).to({x:279,y:224.7},0).wait(1).to({x:282.1,y:221.9},0).wait(1).to({x:285.4,y:219.1},0).wait(1).to({x:288.6,y:216.2},0).wait(1).to({x:291.9,y:213.4},0).wait(1).to({x:295.1,y:210.6},0).wait(1).to({x:298.3,y:207.8},0).wait(1).to({x:301.4,y:205},0).wait(1).to({x:304.5,y:202.4},0).wait(1).to({x:307.4,y:199.8},0).wait(1).to({x:310.3,y:197.4},0).wait(1).to({x:313,y:195},0).wait(1).to({x:315.6,y:192.7},0).wait(1).to({x:318,y:190.6},0).wait(1).to({x:320.3,y:188.6},0).wait(1).to({x:322.5,y:186.7},0).wait(1).to({x:324.5,y:185},0).wait(1).to({x:326.3,y:183.4},0).wait(1).to({x:328,y:181.9},0).wait(1).to({x:329.5,y:180.5},0).wait(1).to({x:330.9,y:179.3},0).wait(1).to({x:332.2,y:178.2},0).wait(1).to({x:333.3,y:177.3},0).wait(1).to({x:334.3,y:176.4},0).wait(1).to({x:335.1,y:175.7},0).wait(1).to({x:335.8,y:175},0).wait(1).to({x:336.4,y:174.5},0).wait(1).to({x:336.9,y:174.1},0).wait(1).to({x:337.2,y:173.8},0).wait(1).to({x:337.5,y:173.6},0).wait(1).to({x:337.7,y:173.4},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103,-24.3,469.4,395.5);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(3.1,-475.4,19.799,19.799,-45,0,0,346.7,197.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:-79.7,x:275,y:-317},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-230.6,x:-118.5,y:-825.8},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-341.4,x:-197,y:-363.5},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-431.3,x:183.6,y:-384.3},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-507.9,x:210.3,y:-701.9},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-574.9,x:-26.1,y:-809.7},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-634.8,x:-189.5,y:-675.3},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-688.9,x:-162.9,y:-499},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-738.3,x:-24,y:-426},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-783.8,x:108.1,y:-474.8},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-826,x:165,y:-587.6},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-865.2,x:140.7,y:-696.7},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-901.8,x:67.1,y:-760.3},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-936.1,x:-16.5,y:-768.8},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-968.4,x:-80.4,y:-734.7},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-998.8,x:-111,y:-679.7},0).wait(1).to({scaleX:5.21,scaleY:5.21,rotation:-1027.5,x:-108.4,y:-624.2},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-1054.7,x:-81.3,y:-582},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-1080.4,x:-41.2,y:-559.9},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-1104.8,x:1.1,y:-557.9},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-1128,x:37.5,y:-572.3},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-1150,x:63.5,y:-597.3},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-1171,x:77.7,y:-627.2},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-1190.9,x:80.8,y:-657},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-1209.9,x:74.9,y:-683.4},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-1228,x:62.9,y:-704.3},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-1245.2,x:47.4,y:-718.9},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-1261.6,x:30.8,y:-727.4},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-1277.2,x:14.9,y:-730.6},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-1292.1,x:1,y:-729.5},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-1306.2,x:-10.4,y:-725.5},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-1319.7,x:-18.8,y:-719.5},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-1332.5,x:-24.5,y:-712.6},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-1344.7,x:-27.5,y:-705.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-1356.3,x:-28.5,y:-699},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-1367.3,x:-27.7,y:-693.3},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-1377.7,x:-25.7,y:-688.5},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1387.5,x:-22.8,y:-684.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1396.9,x:-19.4,y:-682.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1405.7,x:-15.9,y:-680.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1414,x:-12.4,y:-679.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1421.7,x:-9,y:-679.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1429.1,x:-6,y:-680.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1435.9,x:-3.3,y:-681.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1442.2,x:-0.9,y:-682.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1448.1,x:1.1,y:-684.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1453.6,x:2.6,y:-685.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1458.6,x:3.9,y:-687.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1463.2,x:4.9,y:-688.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1467.3,x:5.7,y:-690.4},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1471,x:6.3,y:-691.7},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1474.2,x:6.7,y:-693},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1477.1,x:7,y:-694.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1479.5,x:7.1,y:-694.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1481.5,x:7.3,y:-695.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1483,y:-696.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1484.1,x:7.4,y:-696.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1484.8,y:-697},0).wait(1).to({regX:346.7,regY:198.2,scaleX:0.25,scaleY:0.25,rotation:-1485,x:5.7,y:-702.3},0).to({regX:346.8,regY:198.5,rotation:-2205,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,-476.4,19.799,19.799,-135,0,0,346.7,197.7);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:-169.7,x:210.8,y:-798.2},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-320.6,x:-278,y:-421.5},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-431.4,x:199.2,y:-358.1},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-521.3,x:188.7,y:-750.2},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-597.9,x:-119.4,y:-785.5},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-664.9,x:-218.1,y:-556.9},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-724.8,x:-75.4,y:-401.2},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-778.9,x:108,y:-435.1},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-828.3,x:186.9,y:-580.4},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-873.8,x:143.4,y:-718.2},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-916,x:35.8,y:-780.1},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-955.2,x:-68.3,y:-760.3},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-991.8,x:-127.1,y:-691},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-1026.1,x:-131,y:-611.5},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-1058.4,x:-92.5,y:-551.7},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-1088.8,x:-33.5,y:-525},0).wait(1).to({scaleX:5.21,scaleY:5.21,rotation:-1117.5,x:25.8,y:-531.3},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-1144.7,x:71.3,y:-562.1},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-1170.4,x:96.6,y:-605.5},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-1194.8,x:101.7,y:-650.8},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-1218,x:90,y:-690},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-1240,x:67.8,y:-718.8},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-1261,x:40.5,y:-735.5},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-1280.9,x:13.2,y:-740.9},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-1299.9,x:-10.8,y:-737.3},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-1318,x:-29.3,y:-727.5},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-1335.2,x:-41.7,y:-714.1},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-1351.6,x:-48.1,y:-699.5},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-1367.2,x:-49.3,y:-685.6},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-1382.1,x:-46.2,y:-673.5},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-1396.2,x:-40.3,y:-663.9},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-1409.7,x:-32.6,y:-657.1},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-1422.5,x:-24,y:-653.1},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-1434.7,x:-15.5,y:-651.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-1446.3,x:-7.4,y:-652.1},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-1457.3,x:-0.2,y:-654.2},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-1467.7,x:5.9,y:-657.5},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1477.5,x:10.8,y:-661.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1486.9,x:14.6,y:-666.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1495.7,x:17.3,y:-670.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1504,x:19.1,y:-675.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1511.7,x:20.1,y:-679.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1519.1,x:20.5,y:-683.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1525.9,x:20.4,y:-687.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1532.2,x:19.9,y:-690.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1538.1,x:19.1,y:-693},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1543.6,x:18.3,y:-695.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1548.6,x:17.3,y:-697.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1553.2,x:16.4,y:-698.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1557.3,x:15.4,y:-700},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1561,x:14.4,y:-701.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1564.2,x:13.6,y:-701.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1567.1,x:12.9,y:-702.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1569.5,x:12.3,y:-703},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1571.5,x:11.8,y:-703.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1573,x:11.4,y:-703.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1574.1,x:11.1,y:-703.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1574.8,x:10.9,y:-703.9},0).wait(1).to({regX:346.3,regY:197.8,scaleX:0.25,scaleY:0.25,rotation:-1575,x:5.7,y:-702.3},0).to({regX:346.2,regY:197.7,rotation:-2295,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_2 = new lib.元件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.6,-475.1,19.799,19.799,135,0,0,346.8,197.6);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:100.3,x:-271,y:-735.3},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-50.6,x:126.4,y:-261.4},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-161.4,x:205.4,y:-755.1},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-251.3,x:-177.6,y:-756.3},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-327.9,x:-203.9,y:-455.9},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-394.9,x:34.6,y:-364.4},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-454.8,x:199.2,y:-515.1},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-508.9,x:172.4,y:-706.3},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-558.3,x:32.7,y:-792.1},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-603.8,x:-100.2,y:-754.3},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-646,x:-157.2,y:-651.3},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-685.2,x:-132.5,y:-551.4},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-721.8,x:-58.1,y:-496.6},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-756.1,x:26.2,y:-496.7},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-788.4,x:90.6,y:-539.3},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-818.8,x:121.5,y:-602.5},0).wait(1).to({scaleX:5.21,scaleY:5.21,rotation:-847.5,x:119,y:-665.6},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-874.7,x:91.6,y:-714.9},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-900.4,x:51.3,y:-743.6},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-924.8,x:8.8,y:-751.7},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-948,x:-27.7,y:-743},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-970,x:-53.8,y:-723.4},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-991,x:-67.9,y:-698.6},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-1010.9,x:-71,y:-673.5},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-1029.9,x:-64.9,y:-651.7},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-1048,x:-52.8,y:-635.3},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-1065.2,x:-37.1,y:-624.9},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-1081.6,x:-20.3,y:-620.5},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-1097.2,x:-4.3,y:-621.2},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-1112.1,x:9.8,y:-626.1},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-1126.2,x:21.3,y:-633.8},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-1139.7,x:29.8,y:-643.2},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-1152.5,x:35.6,y:-653.4},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-1164.7,x:38.7,y:-663.5},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-1176.3,x:39.7,y:-673},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-1187.3,x:38.9,y:-681.6},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-1197.7,x:37,y:-689},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1207.5,x:34,y:-695.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1216.9,x:30.7,y:-700.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1225.7,x:27.2,y:-704},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1234,x:23.7,y:-706.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1241.7,x:20.3,y:-708.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1249.1,x:17.3,y:-710.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1255.9,x:14.6,y:-710.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1262.2,x:12.2,y:-711.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1268.1,x:10.3,y:-711.1},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1273.6,x:8.7,y:-711},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1278.6,x:7.4,y:-710.6},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1283.2,x:6.4,y:-710.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1287.3,x:5.7,y:-709.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1291,x:5.1,y:-709.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1294.2,x:4.7,y:-708.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1297.1,x:4.4,y:-708.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1299.5,x:4.3,y:-708.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1301.5,x:4.2,y:-707.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1303,x:4.1,y:-707.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1304.1,x:4,y:-707.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1304.8},0).wait(1).to({regX:346.7,regY:197.3,scaleX:0.25,scaleY:0.25,rotation:-1305,x:5.7,y:-702.3},0).to({regX:346.8,regY:197.1,rotation:-2025,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_3 = new lib.元件2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.7,-475.2,19.799,19.799,45,0,0,346.8,197.7);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:10.3,x:-207.3,y:-252.4},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-140.6,x:286.5,y:-666.6},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-251.4,x:-192.3,y:-760.7},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-341.3,x:-183.2,y:-389.2},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-417.9,x:126.7,y:-371.5},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-484.9,x:227.2,y:-617.7},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-544.8,x:84.9,y:-790},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-598.9,x:-99.3,y:-770.5},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-648.3,x:-179.1,y:-637.3},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-693.8,x:-136,y:-510.1},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-736,x:-27.9,y:-458},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-775.2,x:77,y:-487.2},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-811.8,x:136.7,y:-565.9},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-846.1,x:141.1,y:-654.3},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-878.4,x:102.9,y:-722.8},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-908.8,x:43.8,y:-757.6},0).wait(1).to({scaleX:5.21,scaleY:5.21,rotation:-937.5,x:-15.6,y:-758.8},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-964.7,x:-61.5,y:-735},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-990.4,x:-87,y:-698},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-1014.8,x:-92.2,y:-658.6},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-1038,x:-80.6,y:-625},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-1060,x:-58.3,y:-601.5},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-1081,x:-30.9,y:-589.9},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-1100.9,x:-3.3,y:-589.3},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-1119.9,x:20.9,y:-597.5},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-1138,x:39.7,y:-611.8},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-1155.2,x:52.3,y:-629.6},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-1171.6,x:58.8,y:-648.4},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-1187.2,x:60.2,y:-666.4},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-1202.1,x:57.2,y:-682.3},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-1216.2,x:51.4,y:-695.6},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-1229.7,x:43.7,y:-705.7},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-1242.5,x:35.2,y:-713.1},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-1254.7,x:26.6,y:-717.7},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-1266.3,x:18.6,y:-720.2},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-1277.3,x:11.4,y:-720.8},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-1287.7,x:5.3,y:-720.1},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1297.5,x:0.4,y:-718.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1306.9,x:-3.4,y:-716.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1315.7,x:-6.1,y:-713.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1324,x:-7.9,y:-711.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1331.7,x:-8.9,y:-709.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1339.1,x:-9.3,y:-706.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1345.9,x:-9.1,y:-705.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1352.2,x:-8.7,y:-703.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1358.1,x:-7.9,y:-702.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1363.6,x:-7,y:-701.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1368.6,x:-6,y:-700.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1373.2,x:-5.1,y:-700.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1377.3,x:-4.1,y:-700.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1381,x:-3.1,y:-699.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1384.2,x:-2.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1387.1,x:-1.5,y:-700},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1389.5,x:-0.9,y:-700.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1391.5,x:-0.4,y:-700.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1393,x:0,y:-700.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1394.1,x:0.3,y:-700.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1394.8,x:0.5,y:-700.6},0).wait(1).to({regX:347.2,regY:197.5,scaleX:0.25,scaleY:0.25,rotation:-1395,x:5.7,y:-702.2},0).to({regX:347.3,regY:197.7,rotation:-2115,x:5.8},1000).wait(1));

	// 元件 2
	this.instance_4 = new lib.元件2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.3,-476.9,19.799,19.799,-90,0,0,346.7,197.8);
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:-45.8,x:112.7,y:-201.2},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-166.5,x:202.5,y:-777},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-255.1,x:-204.3,y:-745.4},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-327,x:-219.9,y:-440.8},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-388.3,x:8.9,y:-339.7},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-441.9,x:186.9,y:-459.1},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-489.8,x:208.2,y:-641.5},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-533.1,x:113.8,y:-765},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-572.7,x:-13.7,y:-791.9},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-609.1,x:-111.7,y:-743.1},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-642.8,x:-153.9,y:-659.8},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-674.1,x:-142.7,y:-579.1},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-703.4,x:-95.6,y:-523.8},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-730.9,x:-33.5,y:-501.7},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-756.7,x:26.4,y:-509.8},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-781,x:72.9,y:-540},0).wait(1).to({scaleX:5.22,scaleY:5.22,rotation:-804,x:101.3,y:-582},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-825.8,x:111.4,y:-626.9},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-846.3,x:106,y:-667.9},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-865.9,x:89.6,y:-701},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-884.4,x:66.7,y:-724.3},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-902,x:41.3,y:-737.8},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-918.8,x:16.7,y:-742.6},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-934.7,x:-5,y:-740.5},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-949.9,x:-22.5,y:-733.5},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-964.4,x:-35.4,y:-723.3},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-978.1,x:-43.7,y:-711.6},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-991.3,x:-47.8,y:-699.9},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-1003.7,x:-48.4,y:-688.9},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-1015.6,x:-46.3,y:-679.2},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-1027,x:-42.2,y:-671.5},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-1037.7,x:-36.7,y:-665.5},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-1048,x:-30.5,y:-661.5},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-1057.8,x:-24.2,y:-659.2},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-1067,x:-17.9,y:-658.3},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-1075.8,x:-12,y:-658.7},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-1084.1,x:-6.6,y:-660},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1092,x:-1.9,y:-662.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1099.5,x:2.1,y:-664.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1106.5,x:5.3,y:-667.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1113.2,x:8,y:-671},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1119.4,x:10,y:-674.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1125.2,x:11.5,y:-677.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1130.7,x:12.5,y:-680.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1135.8,x:13.2,y:-683.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1140.5,x:13.5,y:-685.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1144.9,x:13.6,y:-688.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1148.9,x:13.5,y:-690.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1152.5,x:13.3,y:-692},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1155.8,x:13,y:-693.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1158.8,x:12.6,y:-695.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1161.4,x:12.2,y:-696.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1163.7,x:11.8,y:-697.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1165.6,x:11.5,y:-698},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1167.2,x:11.1,y:-698.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1168.4,x:10.9,y:-699.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1169.3,x:10.7,y:-699.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1169.8,x:10.6,y:-699.7},0).wait(1).to({regX:346.5,regY:198,scaleX:0.25,scaleY:0.25,rotation:-1170,x:5.7,y:-702.3},0).to({regX:346.3,regY:198.2,rotation:-1890,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_5 = new lib.元件2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.4,-475.7,19.799,19.799,180,0,0,346.7,197.6);
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:224.2,x:329.1,y:-636.7},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:103.5,x:-231.1,y:-744},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:14.9,x:-183.8,y:-348.6},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-57,x:134.2,y:-345.1},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-118.3,x:245,y:-585.1},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-171.9,x:133,y:-772.1},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-219.8,x:-42.9,y:-800.4},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-263.1,x:-159.9,y:-711.9},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-302.7,x:-180.2,y:-589.7},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-339.1,x:-125,y:-496.8},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-372.8,x:-35.6,y:-459.9},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-404.1,x:50.5,y:-476.2},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-433.4,x:110.7,y:-528.3},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-460.9,x:137.2,y:-595.2},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-486.7,x:132.9,y:-659.4},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-511,x:106.4,y:-709.9},0).wait(1).to({scaleX:5.22,scaleY:5.22,rotation:-534,x:67.7,y:-742},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-555.8,x:26,y:-755.2},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-576.3,x:-11.9,y:-752.9},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-595.9,x:-42,y:-739.4},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-614.4,x:-62.4,y:-719.1},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-632,x:-73.1,y:-696.3},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-648.8,x:-75.3,y:-674.2},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-664.7,x:-70.5,y:-654.8},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-679.9,x:-60.9,y:-639.6},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-694.4,x:-48.3,y:-628.9},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-708.1,x:-34.3,y:-622.7},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-721.3,x:-20.4,y:-620.7},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-733.7,x:-7.3,y:-622},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-745.6,x:4.3,y:-626},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-757,x:13.9,y:-631.9},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-767.7,x:21.6,y:-639.1},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-778,x:27.2,y:-646.9},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-787.8,x:31.2,y:-654.8},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-797,x:33.5,y:-662.6},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-805.8,x:34.5,y:-669.9},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-814.1,y:-676.6},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-822,x:33.5,y:-682.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-829.5,x:32.1,y:-687.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-836.5,x:30.2,y:-692.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-843.2,x:28,y:-695.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-849.4,x:25.8,y:-698.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-855.2,x:23.6,y:-701.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-860.7,x:21.4,y:-703},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-865.8,x:19.4,y:-704.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-870.5,x:17.6,y:-705.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-874.9,x:15.9,y:-706.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-878.9,x:14.4,y:-706.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-882.5,x:13.1,y:-707.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-885.8,x:12,y:-707.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-888.8,x:11.1,y:-707.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-891.4,x:10.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-893.7,x:9.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-895.6,x:9.2,y:-707.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-897.2,x:8.8,y:-707.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-898.4,x:8.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-899.3,x:8.3,y:-707.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-899.8,x:8.2},0).wait(1).to({regX:346.5,regY:197.3,scaleX:0.25,scaleY:0.25,rotation:-900,x:5.7,y:-702.3},0).to({regX:346.3,rotation:-1620,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_6 = new lib.元件2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2,-475.6,19.799,19.799,90,0,0,346.8,197.7);
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:134.2,x:-105.7,y:-851.9},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:13.5,x:-198.2,y:-311.6},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-75.1,x:211.4,y:-369.3},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-147,x:228.9,y:-698},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-208.3,x:-0.2,y:-820.1},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-261.9,x:-179.3,y:-717.9},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-309.8,x:-201.4,y:-549.9},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-353.1,x:-106.9,y:-438.9},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-392.7,x:21.3,y:-423.7},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-429.1,x:120.3,y:-483.7},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-462.8,x:163.4,y:-577.9},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-494.1,x:152.7,y:-668.9},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-523.4,x:105.8,y:-734},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-550.9,x:43.6,y:-765.2},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-576.7,x:-16.4,y:-765.4},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-601,x:-63.2,y:-743},0).wait(1).to({scaleX:5.22,scaleY:5.22,rotation:-624,x:-91.9,y:-708.2},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-645.8,x:-102.1,y:-670},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-666.3,x:-96.7,y:-635.3},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-685.9,x:-80.3,y:-608.1},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-704.4,x:-57.3,y:-590.4},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-722,x:-31.8,y:-582.2},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-738.8,x:-7,y:-582.5},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-754.7,x:14.9,y:-589.5},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-769.9,x:32.7,y:-601.3},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-784.4,x:45.8,y:-616.1},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-798.1,x:54.3,y:-632.1},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-811.3,x:58.5,y:-648.1},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-823.7,x:59.3,y:-663},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-835.6,x:57.3,y:-676.5},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-847,x:53.2,y:-687.9},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-857.7,x:47.8,y:-697.3},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-868,x:41.7,y:-704.5},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-877.8,x:35.3,y:-710},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-887,x:29,y:-713.8},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-895.8,x:23.2,y:-716.2},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-904.1,x:17.8,y:-717.5},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-912,x:13.2,y:-717.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-919.5,x:9.2,y:-717.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-926.5,x:5.9,y:-716.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-933.2,x:3.3,y:-715.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-939.4,x:1.2,y:-714.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-945.2,x:-0.2,y:-713.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-950.7,x:-1.2,y:-711.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-955.8,x:-1.9,y:-710.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-960.5,x:-2.2,y:-709.6},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-964.9,y:-708.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-968.9,y:-707.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-972.5,x:-1.9,y:-707},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-975.8,x:-1.6,y:-706.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-978.8,x:-1.2,y:-706},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-981.4,x:-0.8,y:-705.6},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-983.7,x:-0.4,y:-705.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-985.6,x:-0.1,y:-705.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-987.2,x:0.3,y:-704.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-988.4,x:0.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-989.3,x:0.8,y:-704.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-989.8,y:-704.7},0).wait(1).to({regX:347.1,regY:197.3,scaleX:0.25,scaleY:0.25,rotation:-990,x:5.7,y:-702.3},0).to({regX:347.4,regY:197.2,rotation:-1710,x:5.8,y:-702.2},1000).wait(1));

	// 元件 2
	this.instance_7 = new lib.元件2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.8,-474.8,19.799,19.799,0,0,0,346.8,197.8);
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:336.6,regY:217.4,scaleX:15.51,scaleY:15.51,rotation:44.2,x:-322,y:-416.9},0).wait(1).to({scaleX:13.87,scaleY:13.87,rotation:-76.5,x:235.9,y:-343.9},0).wait(1).to({scaleX:12.67,scaleY:12.67,rotation:-165.1,x:192.1,y:-765.9},0).wait(1).to({scaleX:11.69,scaleY:11.69,rotation:-237,x:-124.2,y:-794.3},0).wait(1).to({scaleX:10.86,scaleY:10.86,rotation:-298.3,x:-236,y:-575.2},0).wait(1).to({scaleX:10.13,scaleY:10.13,rotation:-351.9,x:-125.4,y:-405},0).wait(1).to({scaleX:9.48,scaleY:9.48,rotation:-399.8,x:49.8,y:-390.6},0).wait(1).to({scaleX:8.89,scaleY:8.89,rotation:-443.1,x:167.2,y:-491.6},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-482.7,x:188.5,y:-625.6},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-519.1,x:134.3,y:-729.9},0).wait(1).to({scaleX:7.4,scaleY:7.4,rotation:-552.8,x:45.8,y:-777.9},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-584.1,x:-40,y:-772},0).wait(1).to({scaleX:6.58,scaleY:6.58,rotation:-613.4,x:-100.1,y:-729.8},0).wait(1).to({scaleX:6.21,scaleY:6.21,rotation:-640.9,x:-126.8,y:-672},0).wait(1).to({scaleX:5.86,scaleY:5.86,rotation:-666.7,x:-122.9,y:-616.1},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:-691,x:-96.7,y:-573.2},0).wait(1).to({scaleX:5.22,scaleY:5.22,rotation:-714,x:-58.3,y:-548.3},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:-735.8,x:-16.7,y:-541.5},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:-756.3,x:21.2,y:-550},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-775.9,x:51.4,y:-569.5},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:-794.4,x:72,y:-595.3},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-812,x:82.9,y:-623.5},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-828.8,x:85.2,y:-650.8},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-844.7,x:80.7,y:-675.1},0).wait(1).to({scaleX:3.23,scaleY:3.23,rotation:-859.9,x:71.3,y:-695.1},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-874.4,x:58.9,y:-710.4},0).wait(1).to({scaleX:2.85,scaleY:2.85,rotation:-888.1,x:45.1,y:-721},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-901.3,x:31.3,y:-727.2},0).wait(1).to({scaleX:2.5,scaleY:2.5,rotation:-913.7,x:18.4,y:-729.9},0).wait(1).to({scaleX:2.34,scaleY:2.34,rotation:-925.6,x:6.9,y:-729.7},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-937,x:-2.7,y:-727.5},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-947.7,x:-10.3,y:-723.7},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-958,x:-16,y:-719.2},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:-967.8,x:-19.9,y:-714.4},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-977,x:-22.2,y:-709.6},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-985.8,x:-23.2,y:-705.1},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-994.1,y:-701},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-1002,x:-22.2,y:-697.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-1009.5,x:-20.8,y:-694.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1016.5,x:-18.9,y:-692.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1023.2,x:-16.7,y:-691},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1029.4,x:-14.5,y:-690},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-1035.2,x:-12.3,y:-689.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-1040.7,x:-10.1,y:-689.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-1045.8,x:-8.1,y:-689.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-1050.5,x:-6.3,y:-689.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-1054.9,x:-4.6,y:-690.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-1058.9,x:-3.1,y:-691.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-1062.5,x:-1.8,y:-691.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-1065.8,x:-0.7,y:-692.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-1068.8,x:0.3,y:-693.6},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1071.4,x:1.1,y:-694.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1073.7,x:1.6,y:-695.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1075.6,x:2.2,y:-695.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-1077.2,x:2.6,y:-696.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-1078.4,x:2.9,y:-696.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1079.3,x:3.1,y:-697.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-1079.8,x:3.2,y:-697.4},0).wait(1).to({regX:347.1,regY:198,scaleX:0.25,scaleY:0.25,rotation:-1080,x:5.7,y:-702.3},0).to({regX:347.2,rotation:-1800,x:5.8,y:-702.2},1000).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6518.8,-6997.1,13040.9,13041.2);


// stage content:
(lib.奇遇logoNEW1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1098 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1098).call(this.frame_1098).wait(21));

	// 图层 1
	this.instance = new lib.补间3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(960,70);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.补间4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,70);

	this.instance_2 = new lib.nav();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},288).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_2}]},776).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).to({_off:true,alpha:1},34).wait(797));

	// 图层 5
	this.instance_3 = new lib.元件7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1032,1031.7,1,1,0,0,0,76.2,63.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(1080));

	// 图层 14
	this.instance_4 = new lib.元件6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(967.9,638.3,1,1,0,0,0,82.9,17.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(218).to({_off:false},0).to({alpha:1},70).wait(831));

	// 图层 13
	this.instance_5 = new lib.元件5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(964.7,647.2,1,1,0,0,0,76.1,27.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off:false},0).wait(1).to({regX:76.4,regY:24.4,x:965,y:606.3,alpha:0.338},0).wait(1).to({y:596.4,alpha:0.428},0).wait(1).to({y:589.6,alpha:0.49},0).wait(1).to({y:584.2,alpha:0.538},0).wait(1).to({y:579.8,alpha:0.578},0).wait(1).to({y:576.1,alpha:0.612},0).wait(1).to({y:572.8,alpha:0.642},0).wait(1).to({y:569.9,alpha:0.668},0).wait(1).to({y:567.3,alpha:0.692},0).wait(1).to({y:564.9,alpha:0.714},0).wait(1).to({y:562.7,alpha:0.733},0).wait(1).to({y:560.7,alpha:0.751},0).wait(1).to({y:558.9,alpha:0.768},0).wait(1).to({y:557.2,alpha:0.783},0).wait(1).to({y:555.6,alpha:0.798},0).wait(1).to({y:554.1,alpha:0.811},0).wait(1).to({y:552.7,alpha:0.824},0).wait(1).to({y:551.4,alpha:0.835},0).wait(1).to({y:550.2,alpha:0.846},0).wait(1).to({y:549.1,alpha:0.857},0).wait(1).to({y:548,alpha:0.866},0).wait(1).to({y:547,alpha:0.875},0).wait(1).to({y:546.1,alpha:0.884},0).wait(1).to({y:545.2,alpha:0.892},0).wait(1).to({y:544.3,alpha:0.9},0).wait(1).to({y:543.5,alpha:0.907},0).wait(1).to({y:542.8,alpha:0.914},0).wait(1).to({y:542.1,alpha:0.92},0).wait(1).to({y:541.4,alpha:0.926},0).wait(1).to({y:540.8,alpha:0.932},0).wait(1).to({y:540.2,alpha:0.937},0).wait(1).to({y:539.6,alpha:0.942},0).wait(1).to({y:539.1,alpha:0.947},0).wait(1).to({y:538.6,alpha:0.952},0).wait(1).to({y:538.1,alpha:0.956},0).wait(1).to({y:537.7,alpha:0.96},0).wait(1).to({y:537.3,alpha:0.964},0).wait(1).to({y:536.9,alpha:0.967},0).wait(1).to({y:536.5,alpha:0.97},0).wait(1).to({y:536.2,alpha:0.973},0).wait(1).to({y:535.9,alpha:0.976},0).wait(1).to({y:535.6,alpha:0.979},0).wait(1).to({y:535.3,alpha:0.981},0).wait(1).to({y:535,alpha:0.984},0).wait(1).to({y:534.8,alpha:0.986},0).wait(1).to({y:534.6,alpha:0.988},0).wait(1).to({y:534.4,alpha:0.99},0).wait(1).to({y:534.2,alpha:0.991},0).wait(1).to({y:534.1,alpha:0.993},0).wait(1).to({y:533.9,alpha:0.994},0).wait(1).to({y:533.8,alpha:0.995},0).wait(1).to({y:533.7,alpha:0.996},0).wait(1).to({y:533.6,alpha:0.997},0).wait(1).to({y:533.5,alpha:0.998},0).wait(1).to({y:533.4,alpha:0.999},0).wait(1).to({y:533.3},0).wait(2).to({alpha:1},0).wait(2).to({regX:76.1,regY:27.9,x:964.7,y:536.8},0).wait(901));

	// 图层 11
	this.instance_6 = new lib.元件4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(963.6,579.7,1,1,0,0,0,90.4,52);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(102,255,102,1)",0,0,20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({x:963.4,y:539.4,alpha:0.26},0).wait(1).to({x:963.3,y:524.7,alpha:0.354},0).wait(1).to({y:514.2,alpha:0.422},0).wait(1).to({x:963.2,y:505.9,alpha:0.475},0).wait(1).to({y:499,alpha:0.52},0).wait(1).to({y:493,alpha:0.559},0).wait(1).to({y:487.7,alpha:0.593},0).wait(1).to({x:963.1,y:483,alpha:0.623},0).wait(1).to({y:478.8,alpha:0.65},0).wait(1).to({y:475,alpha:0.675},0).wait(1).to({y:471.5,alpha:0.697},0).wait(1).to({y:468.3,alpha:0.718},0).wait(1).to({x:963,y:465.3,alpha:0.737},0).wait(1).to({y:462.6,alpha:0.755},0).wait(1).to({y:460,alpha:0.771},0).wait(1).to({y:457.6,alpha:0.787},0).wait(1).to({y:455.4,alpha:0.801},0).wait(1).to({y:453.3,alpha:0.814},0).wait(1).to({y:451.4,alpha:0.827},0).wait(1).to({y:449.6,alpha:0.839},0).wait(1).to({y:447.8,alpha:0.85},0).wait(1).to({y:446.2,alpha:0.86},0).wait(1).to({x:962.9,y:444.7,alpha:0.87},0).wait(1).to({y:443.3,alpha:0.879},0).wait(1).to({y:441.9,alpha:0.888},0).wait(1).to({y:440.7,alpha:0.896},0).wait(1).to({y:439.5,alpha:0.903},0).wait(1).to({y:438.4,alpha:0.911},0).wait(1).to({y:437.3,alpha:0.918},0).wait(1).to({y:436.3,alpha:0.924},0).wait(1).to({y:435.4,alpha:0.93},0).wait(1).to({y:434.5,alpha:0.936},0).wait(1).to({y:433.6,alpha:0.941},0).wait(1).to({y:432.8,alpha:0.946},0).wait(1).to({y:432.1,alpha:0.951},0).wait(1).to({y:431.4,alpha:0.955},0).wait(1).to({y:430.8,alpha:0.96},0).wait(1).to({y:430.2,alpha:0.964},0).wait(1).to({y:429.6,alpha:0.967},0).wait(1).to({y:429.1,alpha:0.971},0).wait(1).to({y:428.6,alpha:0.974},0).wait(1).to({y:428.1,alpha:0.977},0).wait(1).to({y:427.7,alpha:0.98},0).wait(1).to({y:427.3,alpha:0.982},0).wait(1).to({y:426.9,alpha:0.984},0).wait(1).to({y:426.6,alpha:0.987},0).wait(1).to({y:426.3,alpha:0.989},0).wait(1).to({y:426,alpha:0.99},0).wait(1).to({y:425.7,alpha:0.992},0).wait(1).to({y:425.5,alpha:0.993},0).wait(1).to({y:425.3,alpha:0.995},0).wait(1).to({y:425.1,alpha:0.996},0).wait(1).to({y:425,alpha:0.997},0).wait(1).to({y:424.8,alpha:0.998},0).wait(1).to({y:424.7},0).wait(1).to({alpha:0.999},0).wait(1).to({y:424.6},0).wait(1).to({y:424.5,alpha:1},0).wait(963));

	// 图层 12
	this.instance_7 = new lib.元件xxx();
	this.instance_7.parent = this;
	this.instance_7.setTransform(679.2,199.1,1,1,0,0,0,359.1,359.1);
	this.instance_7.alpha = 0.07;
	this.instance_7.filters = [new cjs.ColorFilter(1, 1, 1, 1, 158, 119, 156, 0)];
	this.instance_7.cache(1185,-480,325,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1119));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("transparent").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,-98.2,1920,1718.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/nav.png?1490580540844", id:"nav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;


var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function reinit() {
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.奇遇logoNEW1();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
			if(iw < canvas.width){
				anim_container.style.transform = "translateX(-50%)",
				anim_container.style.left = '50%';
			}else{
				anim_container.style.transform = "translateX(0)",
				anim_container.style.left = '0';
			}
		}
	}
	// makeResponsive(true,'both',false,1);	
	makeResponsive(1,'width',1,2);
	// fnStartAnimation();
}