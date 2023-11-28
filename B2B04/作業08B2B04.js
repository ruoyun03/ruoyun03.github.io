(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業08B2B04_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["作業08B2B04_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+FAlxMAAAhLhMB8LAAAMAAABLhg");
	mask.setTransform(397.35,241.7);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1037,0.0947);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,794.7,483.4), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(397.4,241.7,1,1,0,0,0,397.4,241.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,794.7,483.4), null);


// stage content:
(lib.作業08B2B04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 筆11
	this.instance = new lib.手握筆();
	this.instance.setTransform(460.5,400.8,1,1,0,0,0,397.4,241.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({y:410.55},0).wait(1).to({x:466.35,y:417.7},0).wait(1).to({x:474.8,y:422.9},0).wait(1).to({x:476.1,y:432.65},0).wait(1).to({x:469.6,y:441.1},0).wait(1).to({x:467,y:454.75},0).wait(1).to({x:466.35,y:463.85},0).wait(1));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_92 = new cjs.Graphics().p("AgKBNQgcgEgSgTQgMgNgGgTQgFgSADgRQAFgaAVgSQAVgTAbgBQAZgBAWAQQAXAQAIAZQAHAZgLAaQgKAagXANQgRAJgUAAIgMgBg");
	var mask_graphics_93 = new cjs.Graphics().p("Ag+B2QgUgIgNgQQgNgQgDgVQgEgWAIgTQAJgWAWgOQAQgKATgCQgCgNACgNQAFgaAVgSQAUgTAbgBQAagBAWAQQAXAQAIAZQAHAagLAaQgKAZgXANQgPAIgRABIABADQACATgGARQgHATgRAOQgQAOgUADIgNABQgOAAgOgFg");
	var mask_graphics_94 = new cjs.Graphics().p("Ag1CgQgWgKgMgUQgNgTABgYQAAgSAIgPIgEgEQgNgQgDgVQgEgVAIgTQAJgXAWgOQAQgKATgCQgCgNACgNQAFgaAVgSQAUgTAbgBQAagBAWAQQAXAQAIAZQAHAagLAaQgKAagXANQgPAIgRABIABADQACASgGARIgDAHIAJAMQARAbgHAhQgGAWgSARQgRARgWADIgMABQgRAAgQgHg");
	var mask_graphics_95 = new cjs.Graphics().p("AAZDKQgbgHgQgVQgOgUAAgYQgQgBgOgHQgWgKgNgTQgMgUABgYQAAgSAHgOIgDgEQgNgPgEgWQgDgVAIgUQAJgWAVgOQARgLASgCQgCgNADgNQAFgaAVgSQAVgSAZgCQAagBAXAQQAXARAHAZQAHAZgKAaQgLAagWANQgPAIgRACIAAACQADATgHARIgDAHIAJALQAMATAAAVQAUAAAQAKQAfARAHAiQAGAagNAaQgNAagYALQgPAGgQAAQgKAAgLgDg");
	var mask_graphics_96 = new cjs.Graphics().p("ABVDmQgYAAgTgNQgTgMgKgXIgBgCQgNABgPgEQgbgHgQgWQgOgTgBgZQgPAAgPgHQgWgKgMgUQgNgTABgYQABgSAHgOIgEgEQgNgQgDgVQgEgWAIgTQAJgXAWgOQAQgKATgCQgCgNACgNQAFgaAVgSQAVgTAbgBQAZgBAWAQQAXAQAIAZQAHAagLAaQgKAagXANQgPAIgPABIAAADQACATgGARIgDAHIAJAMQALASAAAVQATAAARAJQAaAPAJAaQAcgEAYARQAdATAFAiQAEAWgKAWQgKAWgTAMQgSAMgXAAIgCAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AAhEUQgagJgNgYQgOgYAFgdQAFgdATgSIAHgFIgDgGIgBgDQgNABgPgEQgbgHgQgVQgOgTgBgZQgPgBgPgHQgWgKgMgTQgNgTABgYQABgRAHgPIgEgEQgNgQgDgWQgEgVAIgUQAJgWAWgOQAQgLATgCQgCgNACgNQAFgaAVgSQAVgSAbgCQAZgBAWAQQAXARAIAZQAHAZgLAaQgKAagXANQgPAJgPABIAAACQACATgGARIgDAHIAJAMQALATAAAVQATAAARAKQAaAOAJAZQAcgDAYARQAdATAFAhQAEAXgKAWQgKAVgRALQAFALACANQAFAdgOAXQgOAYgbAKQgPAFgNAAQgOAAgMgFg");
	var mask_graphics_98 = new cjs.Graphics().p("AACFPQgfgDgVgZQgVgaAEggQACgWAOgSQAOgSAUgIIAHgCQgJgVAEgYQAFgdATgSIAHgFIgDgGIgBgDQgNABgPgEQgbgHgQgVQgOgUgBgYQgPAAgPgHQgWgKgMgTQgNgUABgYQABgRAHgPIgEgEQgNgQgDgWQgEgVAIgUQAJgWAWgOQAQgLATgCQgCgNACgNQAFgaAVgSQAVgSAbgCQAZgBAWAQQAXARAIAZQAHAZgLAaQgKAagXANQgPAJgPABIAAACQACATgGARIgDAHIAJAMQALATAAAVQATAAARAKQAaAOAJAaQAcgDAYARQAdASAFAhQAEAXgKAWQgKAVgRALQAFALACANQAFAdgOAXQgOAYgbAKIgHACQAEAIACAKQAFAZgKAWQgKAWgXANQgSALgUAAIgIAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AAHGCQgcgBgWgUQgUgTgEgcQgEgcAOgXIAHgKIAAgBQgVgZAEghQACgVAOgTQAOgSAUgHIAHgCQgJgVAEgZQAFgdATgSIAHgFIgDgGIgBgDQgNACgPgEQgbgHgQgVQgOgTgBgZQgPAAgPgHQgWgKgMgUQgNgTABgYQABgSAHgPIgEgEQgNgQgDgVQgEgWAIgTQAJgXAWgOQAQgKATgCQgCgNACgNQAFgaAVgSQAVgTAbgBQAZgBAWAQQAXAQAIAZQAHAagLAaQgKAagXANQgPAIgPABIAAADQACATgGARIgDAHIAJAMQALASAAAVQATABARAJQAaAPAJAaQAcgEAYARQAdATAFAiQAEAVgKAWQgKAVgRAMQAFAKACANQAFAdgOAYQgOAXgbAKIgHACQAEAIACAKQAFAagKAWQgFAJgGAIIAEAHQAQAXgDAdQgDAdgUATQgWAXggAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_graphics_92,x:314.4969,y:284.2299}).wait(1).to({graphics:mask_graphics_93,x:310.9867,y:288.7277}).wait(1).to({graphics:mask_graphics_94,x:310.9867,y:293.1272}).wait(1).to({graphics:mask_graphics_95,x:311.9308,y:296.8991}).wait(1).to({graphics:mask_graphics_96,x:316.0671,y:299.423}).wait(1).to({graphics:mask_graphics_97,x:316.0671,y:304.4785}).wait(1).to({graphics:mask_graphics_98,x:316.0671,y:309.8922}).wait(1).to({graphics:mask_graphics_99,x:316.0671,y:314.9491}).wait(1));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(8));

	// 筆10
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(323.05,374.6,1,1,0,0,0,397.4,241.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).wait(1).to({x:324.35,y:366.8},0).wait(1).to({x:318.5,y:364.2},0).wait(1).to({x:311.35,y:368.75},0).to({_off:true},1).wait(8));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_88 = new cjs.Graphics().p("AgSBMQgUgFgOgNQgTgSgFgbQgFgaANgXQAMgXAagLQAZgMAYAHQAaAGARAWQARAWgBAZQAAAagRAWQgRAWgaAGQgJACgIAAQgJAAgKgCg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AhHBhQgTgFgOgNQgTgRgFgbQgFgcAMgWQANgXAZgLQAagLAZAGIANAFQAHgTAOgNQARgPAZgCQAYgDAUAKQAVALALAVQAMAVgCAXQgCAWgPATQgPATgWAHQgcAKgbgNQgFALgHAKQgRAVgZAHQgJACgJAAQgKAAgKgDg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AhHCLQgTgFgOgNQgTgRgFgbQgFgcAMgXQANgXAZgKQAagLAZAGIAEABQgHgIgFgKQgHgQAAgSQAAgTAIgQQAIgQAOgLQAPgLAQgDQAUgEAVAHQAVAHANAQQAQASACAZQACARgFAPQAKAJAGAMQAMAUgCAXQgCAXgPATQgPATgWAHQgcAJgbgMQgFALgHAKQgRAVgZAHQgJACgJAAQgKAAgKgDg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AhHCLQgTgFgOgNQgTgRgFgbQgFgcAMgXQAIgOAMgJQgGgGgDgIQgKgVAEgYQAFgZAQgRQAQgQAYgGQARgDAQADIAFgFQAPgLAQgDQAUgEAVAHQAVAHANAQQAQASACAZQACARgFAPQAKAJAGAMQAMAUgCAXQgCAXgPATQgPATgWAHQgcAJgbgMQgFALgHAKQgRAVgZAHQgJACgJAAQgKAAgKgDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_1_graphics_88,x:165.7793,y:267.8142}).wait(1).to({graphics:mask_1_graphics_89,x:171.0179,y:265.6732}).wait(1).to({graphics:mask_1_graphics_90,x:171.0179,y:261.4839}).wait(1).to({graphics:mask_1_graphics_91,x:171.0179,y:261.4839}).wait(9));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(88).to({_off:false},0).wait(12));

	// 下嘴筆
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(386.45,383.1,1,1,0,0,0,397.4,241.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).wait(1).to({x:398.8,y:387.65},0).wait(1).to({x:411.15,y:385.7},0).wait(1).to({x:422.85,y:380.5},0).to({_off:true},1).wait(12));

	// 下嘴遮色片 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_84 = new cjs.Graphics().p("AgNBrQgmgEgZgZQgZgZgFgmQgFgkARgfQAOgZAbgPQAagQAcABQAkABAdAXQAeAXAJAiQAIAhgOAjQgOAjgfASQgYANgcAAIgPgBg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AADB8QgbgRgNggQgRADgTgCQglgFgZgZQgZgZgGgkQgFgmARgeQAOgaAbgPQAagPAeAAQAjABAdAXQAWASALAYQAUgEAVAFQAoAIAYAdQAYAegBAoQgCApgZAcQgZAdgoAFIgSACQgeAAgZgQg");
	var mask_2_graphics_86 = new cjs.Graphics().p("ABcCOQgZgIgRgQQgRAJgWADQgoAGgggUQgcgRgNggQgRADgTgCQglgFgZgZQgZgZgGgkQgFgmARgeQAOgaAbgPQAagPAeAAQAjABAeAXQAWASALAYQAUgEAUAFQAhAGAWAWQAUgLAWgDQAYgCAWAHQAWAHARAQQASAQAJAWQAQAlgRApQgQAqglASQgVAKgWAAQgSAAgSgGg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AAeCOQgZgIgQgQQgRAJgWADQgpAGgggUQgcgRgNggQgRADgTgCQglgFgZgZQgZgZgGgkQgFgmARgeQAOgaAbgPQAagPAeAAQAjABAeAXQAWASALAYQAUgEAVAFQAhAGAVAWQATgLAXgDQAYgCAWAHQANgTAVgNQAfgSAhADQAiACAcAYQAbAYAIAhQAIAhgPAiQgOAhgeARQgdASglgEQgNgBgLgEQgQAZgaAMQgVAKgWAAQgSAAgSgGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_2_graphics_84,x:225.3002,y:269.6798}).wait(1).to({graphics:mask_2_graphics_85,x:231.2702,y:272.8184}).wait(1).to({graphics:mask_2_graphics_86,x:237.762,y:273.6182}).wait(1).to({graphics:mask_2_graphics_87,x:243.971,y:273.6182}).wait(13));

	// 下嘴
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhgAkQgWgWgpggIgsgkQgOgPAKgGIBRAMIgMADQAZAAA6ARQBEAUANACQATADAdgCIAxgEIBZANQgDAEgWAWIglAlQgcAYghAAQiRAAgogog");
	this.shape_1.setTransform(243.3538,274.575);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(84).to({_off:false},0).wait(16));

	// 上嘴筆
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(386.3,374.9,1,1,0,0,0,397.4,241.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).wait(1).to({x:399.3,y:373.6},0).wait(1).to({x:411.65,y:377.5},0).wait(1).to({x:418.15,y:389.85},0).to({_off:true},1).wait(16));

	// 上嘴遮色片 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_80 = new cjs.Graphics().p("AgdBoQgjgKgVgbQgVgbgBgkQgCgkAUgcQASgcAjgMQAggMAgAIQAhAJAXAdQAXAcABAiQABAigTAeQgUAeghAMQgRAGgTAAQgOAAgQgEg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AhaB6QgjgKgVgbQgVgbgBgkQgCgkAUgcQASgcAigMQAhgMAhAIIAIADQAPgTAUgLQAZgNAcABQAlABAeAaQAeAZAGAlQAHAkgTAiQgTAjgiAOQgiAOgmgMIgGgCQgTAagcALQgRAGgTAAQgPAAgQgEg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AibCHQgjgKgVgbQgVgbgBgkQgCgjAUgdQASgbAigNQAhgMAhAJIAIACQAPgSAVgMQAZgMAcAAQAXABAVALQAXgcAigIQAdgHAeAKQAeAJATAXQAXAbACAlQACAlgUAdQgTAdgkAMQgjANghgLIgPgHQgRAVgYAKQgiAOglgLIgGgCQgTAagdAKQgRAHgTAAQgPAAgQgFg");
	var mask_3_graphics_83 = new cjs.Graphics().p("ACaCaQgjgFgXgXQgcgagEgoIgQgEIgPgHQgRAVgXAKQgiAOgmgLIgFgCQgUAagdAKQggAMgjgKQgjgKgVgbQgVgbgBgkQgCgjAUgdQATgbAigNQAggMAhAJIAIACQAPgSAWgMQAZgMAbAAQAYABAVALQAWgcAjgIQAdgHAdAKQAeAJATAXQAVAZAEAhIAIACQAgAIAXAaQAXAaAEAhQADAhgRAeQgRAfgeAPQgWALgZAAIgRgCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_3_graphics_80,x:225.9499,y:268.4261}).wait(1).to({graphics:mask_3_graphics_81,x:232.0525,y:266.6263}).wait(1).to({graphics:mask_3_graphics_82,x:238.5539,y:265.2702}).wait(1).to({graphics:mask_3_graphics_83,x:243.0495,y:266.8571}).wait(17));

	// 上嘴
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ABpA7QAkgEAMAAQgwgwgMAAQgmAFgVAAQgLAAgQgFQgPgGgLAAQgRAAhhATIhNgMIAFgDQAwgUAmgVQBKgnAkAAQAGAAASAIQAUAIAJAAQAEAAAXgIQARgGARAHQAaAKAhAmQAmArAIAnQADAEgHAIg");
	this.shape_2.setTransform(243.5583,266.275);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(80).to({_off:false},0).wait(20));

	// 筆08
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(432.05,468,1,1,0,0,0,397.4,241.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).wait(1).to({x:406.05,y:480},0).wait(1).to({x:378.05,y:494},0).wait(1).to({x:348.05,y:504},0).wait(1).to({x:321.05,y:509},0).wait(1).to({x:291.05},0).to({_off:true},1).wait(20));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_74 = new cjs.Graphics().p("AhZDIQg5gagkg2Qgjg3gBg+QgBgwAVguQAVgtAmgfQAtglA8gKQA7gKA2AVQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGIgZACQguAAgqgTg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AjlD6Qg5gagkg3Qgjg2gBg/QgBgwAWgtQAVgtAlgfQAtglA8gKQA9gKA2AVIAGADQAUgoAhgbQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA4QgXA4gvAjQgvAjg8AGQg7AGg0gVQgXAsgmAeQgvAjg8AGIgaACQguAAgqgTg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AlsFFQg5gagkg2Qgjg3gBg+QgBgxAVguQAVgsAmgfQAtglA8gKQAxgJAuANQAEgPAIgQQAVgtAlgfQAtglA8gKQA8gKA2AVIAGADQAUgoAigbQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA3gvAjQgvAjg8AGQg7AGg0gVQgXAsgnAeQgvAjg8AGQgrAFgogLIgJAYQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AoCGGQg5gagkg2Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtgkA8gKQA8gKA2AVIANAFIAJgXQAVgtAmgfQAtglA8gKQAxgJAuANQAEgPAIgQQAVgtAkgfQAtglA8gKQA9gKA2AVIAGADQAUgoAigbQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAig8AGQg7AGg0gVQgXAsgnAeQgvAjg8AGQgsAFgogLIgJAYQgXA4gvAjQguAjg8AGQg9AHg1gYIgDgBIgGAQQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AqJG4Qg5gagkg2Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA7gKA2AUQAUgkAggaQAtglA8gKQA8gKA2AVIANAFIAJgXQAVgtAmgfQAtglA8gKQAwgJAuANQAEgPAIgQQAVgtAlgfQAtglA8gKQA9gKA2AVIAGADQAUgoAigbQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg7AGg0gVQgXArgnAeQgvAjg8AGQgsAFgogLIgJAYQgXA4gvAjQgvAjg8AGQg8AHg1gYIgDgBIgGAQQgXA4gvAjQgvAjg8AGQg2AGgwgSQgXAqgmAdQgvAjg8AGIgaACQguAAgqgTg");
	var mask_4_graphics_79 = new cjs.Graphics().p("Ar5HWQg/gMgwgvQgxgwgMg/QgFgaAAgaQABgVAEgUQAOhJA2gxQA4gxBJgFQA7gFA3AdQAcAOAWAUQAOgSASgPQAtglA8gKQA8gJA1AUQAUgkAggbQAtglA8gKQA9gKA2AWIANAFIAJgXQAVguAkgfQAtglA8gKQAygIAtANQAFgQAHgPQAVguAlgfQAtglA9gKQA8gKA2AWIAHACQAUgnAhgcQAtglA8gKQA9gKA2AWQA2AVAmAwQAmAwAIA5QAIA6gYA4QgYA4guAjQgvAjg9AHQg6AGg0gWQgXAtgoAcQguAjg9AHQgrAEgogLIgJAYQgYA4guAjQgvAjg9AHQg8AGg2gXIgCgCIgGAQQgYA4guAjQguAjg9AHQg2AFgwgSQgWArgmAcQgvAjg9AHQg8AGg2gXQgfgPgZgXQgiAtg3AYQgrASgrAAQgUAAgUgEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_4_graphics_74,x:300.6744,y:352.9867}).wait(1).to({graphics:mask_4_graphics_75,x:286.6744,y:357.9855}).wait(1).to({graphics:mask_4_graphics_76,x:273.1744,y:365.4867}).wait(1).to({graphics:mask_4_graphics_77,x:258.1744,y:371.9867}).wait(1).to({graphics:mask_4_graphics_78,x:244.6744,y:376.9867}).wait(1).to({graphics:mask_4_graphics_79,x:228.7227,y:378.5283}).wait(21));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(26));

	// 筆07
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(426.05,420,1,1,0,0,0,397.4,241.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).wait(1).to({x:434.05,y:444},0).wait(1).to({x:461.05,y:454},0).wait(1).to({x:485.05,y:451},0).wait(1).to({x:509.05,y:448},0).wait(1).to({x:535.05,y:454},0).wait(1).to({x:557.05,y:476},0).wait(1).to({y:509},0).to({_off:true},1).wait(26));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_66 = new cjs.Graphics().p("AhFDOQhBgWgogzQgTgagMghQgKgagCgjQgCgbAEgWQAGgmATgiQAUgiAdgZQAygqBFgHQBDgHA5AeQA6AfAgA9QAgA8gHBAQgHBBgsA1QgtA0g/ASQgbAIgdAAQgiAAglgNg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AhtFAQg5gagkg3Qgjg3gBg+QgBgxAVgtQAQggAXgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBDgHA6AfQA5AfAgA8QAhA9gHBBQgHBBgtAzIgHAIQAOAdAEAgQAIA6gYA4QgXA4gvAjQgvAjg8AHIgZABQguAAgqgSg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AgiGuQg5gagkg3Qgjg3gBg+QAAgQACgPQgtgagfguQgjg3gBg+QgBgwAVgtQAPghAYgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBDgHA6AfQA5AfAgA8QAhA9gHBBQgHBBgtA0IgHAIQAOAdAEAgQAEAdgEAdQAlAUAcAkQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHIgaABQguAAgpgSg");
	var mask_5_graphics_69 = new cjs.Graphics().p("ABaHWQg1gZgjgxQgWAIgZADQg9AGg1gXQg5gagkg3Qgjg3gBg+QAAgQACgPQgtgagfguQgjg3gBg9QgBgxAVgtQAPghAYgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBEgHA6AfQA4AfAgA8QAhA9gHBBQgHBBgtA0IgHAIQAOAdAEAgQAEAegEAdQAlATAcAkIAGAIQASgGATgDQA8gKA2AVQA3AWAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHQgOABgNAAQguAAgpgSg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AgiHWQg1gZgjgxQgXAIgZADQg9AGg1gXQg5gagkg3Qgjg3gBg+QAAgQACgPQgtgagfguQgjg3gBg9QgBgxAVgtQAPghAYgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBEgHA6AfQA5AfAgA8QAhA9gHBBQgHBBgtA0IgHAIQAOAdAEAgQAEAegEAdQAlATAcAkIAGAIQARgGATgDQA8gKA2AVIALAFQAJgKALgJQAtglA8gKQA8gJA2AVQA3AVAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHQg9AGg1gXIAAAAQgNANgQAMQgvAjg8AHQgOABgNAAQguAAgogSg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AikHWQg1gZgjgxQgXAIgZADQg9AGg1gXQg5gagkg3Qgjg3gBg+QAAgQACgPQgtgagfguQgjg3gBg9QgBgxAVgtQAPghAYgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBEgHA6AfQA5AfAgA8QAhA9gHBBQgHBBgtA0IgHAIQAOAdAEAgQAEAegEAdQAlATAcAkIAGAIQASgGATgDQA8gKA1AVIALAFQAJgKALgJQAtglA8gKQA8gJA2AVQAgAMAaAVQAngbAxgIQA8gKA2AWQA3AVAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHQg9AGg1gXQgZgMgVgRQgtAeg3AGQg9AGg1gXIAAAAQgNANgQAMQgvAjg7AHQgOABgNAAQguAAgpgSg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AH0HqQg5gagkg3IgJgPQgqAbg0AGQg9AGg1gXQgZgMgVgRQgtAeg3AGQg8AGg1gXIAAAAQgNAOgQALQgvAjg8AHQg9AHg1gYQg1gZgjgxQgXAIgZADQg9AGg1gXQg5gagkg3Qgjg3gBg+QAAgQACgPQgtgagfguQgjg3gBg9QgBgxAVgtQAPghAYgaIgGgOQgJgbgDgiQgBgcAEgXQAFglAUgjQATghAegZQAygqBEgIQBEgHA6AfQA5AfAgA8QAhA9gHBBQgHBBgtA0IgHAIQAOAdAEAgQAEAegEAdQAlAUAcAjIAGAIQASgGATgDQA8gKA2AVIALAFQAJgKALgJQAtgkA8gKQA7gKA2AWQAgALAaAVQAngbAxgHQA8gKA2AVQA3AVAmAwQALAOAJAQQAlgXAugIQA8gKA2AWQA3AVAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHIgaABQguAAgqgSg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AJXKPQg/gMgwgwQgxgvgMg/QgFgaAAgbQABgVAEgUQAFgdANgZQg1gagig0IgJgPQgrAbg0AFQg8AHg2gYQgZgLgVgSQgtAeg2AGQg8AHg2gYIAAAAQgNAOgPAMQgwAjg8AGQg9AHg1gYQg1gYgjgxQgXAIgZACQg9AHg1gYQg4gaglg2Qgjg3gBg+QAAgQACgOQgtgageguQgkg3gBg+QAAgxAUguQAQghAYgZIgGgPQgKgagCgjQgCgcAEgWQAGgmATgiQAUgiAdgZQAygqBEgHQBFgHA5AeQA6AfAgA9QAgA8gHBBQgHBBgtA1IgGAIQANAdAFAgQAEAdgFAdQAlAVAcAjIAGAJQASgGATgDQA8gKA3AVIAKAEQAJgKALgIQAtglA8gKQA8gKA2AVQAfAMAaAVQAngaAxgIQA9gKA2AVQA2AVAmAwQAMAPAIAQQAlgYAugHQA9gKA1AVQA3AVAmAvQAmAwAIA6QAIA5gYA5IgHAOIADABQA3AcAgAyQAiA2AABEQgBBEgjA1QgkA2g+AaQgrATgsAAQgTAAgUgEg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_5_graphics_66,x:280.7166,y:294.0723}).wait(1).to({graphics:mask_5_graphics_67,x:278.6614,y:306.0301}).wait(1).to({graphics:mask_5_graphics_68,x:282.1744,y:317.0301}).wait(1).to({graphics:mask_5_graphics_69,x:294.6744,y:321.0387}).wait(1).to({graphics:mask_5_graphics_70,x:307.1744,y:321.0387}).wait(1).to({graphics:mask_5_graphics_71,x:320.1744,y:321.0387}).wait(1).to({graphics:mask_5_graphics_72,x:335.6744,y:323.0301}).wait(1).to({graphics:mask_5_graphics_73,x:340.6498,y:338.0717}).wait(27));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).wait(34));

	// 筆06
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(435,389,1,1,0,0,0,397.4,241.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).wait(1).to({x:416,y:409},0).wait(1).to({x:385,y:417},0).wait(1).to({x:353,y:396},0).wait(1).to({x:337,y:372},0).wait(1).to({x:334,y:349},0).to({_off:true},1).wait(34));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_60 = new cjs.Graphics().p("AhZDIQg5gZgkg3Qgjg3gBg+QgBgwAVgtQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAlAwQAmAvAIA6QAIA5gXA5QgYA4gvAjQgvAjg8AGQgOACgMAAQguAAgpgTg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AhaFRQg7gIgwgoQgvgngVg3QgIgZgDgXQgDgWACgaQAFgyAZgpQAegyA3geIAIgEQgEgUAAgUQgBgxAVgtQAVguAmgfQAsglA8gKQA8gKA2AUQA3AWAlAwQAmAvAIA6QAIA6gXA4QgYA4gvAjQgRAMgTAKQAFAegDAhQgGA9gjAwQgjAvg5AYQgpASgrAAQgPAAgPgCg");
	var mask_6_graphics_62 = new cjs.Graphics().p("Aj2GmQhAgVgogxQgfgngLgzQgMgyAMgwQAPhAAzguQAzgvBBgIQAbgEAbADQAFgtAXgnQAfgzA2gdIAJgFQgEgTgBgVQAAgxAVgtQAUguAlgfQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAvAIA6QAIA6gYA5QgXA4gvAjQgSANgTAJQAGAdgDAhQgGA9gjAwQgjAvg5AYQg1AWg2gFIAAADQgKA/grAyQgsAyg9ARQgcAIgbAAQgjAAgjgMg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AmGG1QgtgHgogZQgogZgZgmQgaglgIgvQgJguALgsQANgzAjgoQAjgpAwgTQAwgTA1AEQA1AFAsAbQAkAXAZAiQAPgXAWgTQAzgvBBgIQAagEAaADQAFguAYgmQAegzA3geIAIgEQgEgUAAgUQgBgxAVgtQAVguAmgfQAsglA9gLQA8gJA2AUQA3AWAlAwQAmAvAIA6QAIA6gXA4QgYA5gvAjQgRAMgTAKQAFAdgDAhQgGA9gjAvQgjAwg5AYQg1AWg1gFIgBADQgJA/gsAyQgtAyg9ARQg8ARhAgVQg/gVgogxIgGgIQgSAcgaAWQgjAcguANQgeAJgdAAQgQAAgPgCg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AkOG1QgtgHgogZQgogZgZgmQgaglgIgvQgEgVAAgUQgvAEgrgOQgvgQglgkQglgkgQgwQgOgmABgrQADg5AggzQAhgzAzgaQA0gaA8ADQA8ADAwAgQAwAfAbA2QAZAxgBAzQAUgCAUACQA1AFAsAbQAkAXAZAiQAPgXAWgTQAygvBBgIQAagEAbADQAFguAYgmQAegzA3geIAIgEQgEgUAAgUQgBgxAVgtQAVguAmgfQAsglA9gLQA8gJA2AUQA3AWAlAwQAmAvAIA6QAIA6gXA4QgYA5gvAjQgRAMgTAKQAFAdgDAhQgGA9gjAvQgjAwg5AYQg1AWg1gFIgBADQgJA/gsAyQgtAyg9ARQg9ARhAgVQg+gVgogxIgGgIQgSAcgaAWQgjAcguANQgeAJgdAAQgQAAgPgCg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AjIHSQgtgGgogZQgogZgZgmQgagmgIguQgEgVAAgVQgvAFgrgOQgvgQglgkQglglgQgvQgOgnABgrQACgeAKgeIgXgJQg5gZgkg3Qgjg3gBg+QgBgxAWgtQAVguAlgfQAtglA8gKQA9gKA2AWQA2AVAmAwQAlAvAIA6QAHAzgRAxQAcAJAZAQQAwAgAbA2QAZAxgBAzQAUgCAUACQA1AEAsAcQAkAXAYAiQAPgXAWgUQAzguBBgKQAbgDAaADQAGgtAXgmQAegzA3geIAIgEQgEgUAAgUQgBgxAVguQAVgtAmgfQAsgmA9gKQA8gKA2AVQA3AWAlAvQAmAwAIA6QAIA6gXA4QgYA4gvAjQgRANgTAIQAFAfgDAgQgGA+gjAvQgjAwg5AYQg0AWg2gGIgBAEQgJA/gsAyQgtAyg9ARQg9AQhAgUQg/gVgogyIgGgHQgRAcgaAVQgjAdguANQgdAJgeAAQgQAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_6_graphics_60,x:288.676,y:261.0427}).wait(1).to({graphics:mask_6_graphics_61,x:282.6948,y:273.0499}).wait(1).to({graphics:mask_6_graphics_62,x:270.7202,y:282.5316}).wait(1).to({graphics:mask_6_graphics_63,x:252.6913,y:283.0499}).wait(1).to({graphics:mask_6_graphics_64,x:240.6943,y:283.0499}).wait(1).to({graphics:mask_6_graphics_65,x:233.676,y:280.0525}).wait(35));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).wait(40));

	// 筆05
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(337.05,409.05,1,1,0,0,0,397.4,241.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53).to({_off:false},0).wait(1).to({x:339.05,y:437.05},0).wait(1).to({x:340.05,y:472.05},0).wait(1).to({x:321.05,y:491.05},0).wait(1).to({x:298.05,y:505.05},0).wait(1).to({x:270.05,y:515.05},0).wait(1).to({x:250.05,y:535.05},0).to({_off:true},1).wait(40));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_53 = new cjs.Graphics().p("AhPDLQg6gXgkgwQgbgjgLgsQgLgsAHgrQAKg8AogvQApgwA5gSQA5gTA8APQA+AOAqAqQArArAPA9QAPA7gSA6QgSA5gvApQgvAqg7AKQgSADgTAAQgnAAgpgQg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AgFFgQgtgHgogZQgogZgZgmQgaglgIguQgJgvALgsQAHgcANgYQgRgPgOgSQgbgjgLgsQgLgsAHgsQAKg8AogvQApgwA5gSQA5gTA8APQA+AOAqAqQArArAPA9QAPA8gSA6QgHAUgJASQAaAXATAeQAbAuAEA0QADAzgVAyQgVAxgoAhQgjAdguANQgdAIgeAAQgQAAgOgCg");
	var mask_7_graphics_55 = new cjs.Graphics().p("Ag7HzQg5gZgkg3Qgjg3gBg+QgBgxAWgtQASgoAfgdQgZgUgRgbQgaglgIguQgJguALgsQAHgbANgZQgRgPgOgTQgbgjgLgsQgLgsAHgsQAKg8AogvQApgwA5gSQA5gTA8APQA+AOAqAqQArArAPA9QAPA8gSA6QgHAUgJASQAaAXATAfQAbAuAEA0QADAygVAyQgTArghAfQARAPAQATQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHQgOABgNAAQgtAAgpgTg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AhPKAQg5gagkg3Qgjg3gBg+QgBgxAVgtQAQgjAagaIgGgIQgjg3gBg+QgBgxAWgtQASgoAfgcQgZgUgRgbQgaglgIguQgJgvALgsQAHgbANgZQgRgPgOgTQgbgjgLgsQgLgsAHgsQAKg8AogvQApgwA5gSQA5gTA8APQA+AOAqAqQArArAPA9QAPA8gSA6QgHAUgJASQAaAXATAfQAbAuAEA0QADAzgVAyQgTArghAfQARAOAQATQAlAwAIA5QAIA6gYA4QgQAogcAcQAhAtAHA1QAIA6gYA4QgXA4gvAjQgvAjg8AHIgaABQgtAAgqgSg");
	var mask_7_graphics_57 = new cjs.Graphics().p("Ai4LpQg5gagkg3Qgjg2gBg/QgBgwAVguQAVgtAmgfQAnghA0gMQAAguAUgrQAQgjAagaIgGgIQgjg3gBg+QgBgxAWgsQASgoAfgdQgZgUgRgbQgaglgIguQgJgvALgsQAHgbAOgZQgSgPgOgTQgbgjgLgsQgLgsAHgsQAKg8AogvQApgwA5gSQA4gTA9APQA+AOAqAqQArArAPA9QAPA8gSA6QgGAUgKASQAaAXATAfQAbAuAEA0QADAzgVAyQgTArghAfQASAPAPATQAlAwAIA4QAIA6gYA4QgQAngcAdQAhAtAHA1QAIA6gYA4QgXA4gvAjQglAcgtAKQgBApgRAoQgXA4gvAjQguAjg8AHQgOABgNAAQguAAgpgSg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AlYMWQg5gagkg3Qgjg2gBg/QgBgwAVguQAVgtAmgfQAsgmA9gKQA8gKA2AVQAXAJAUAOQAVgtAlgfQAnghAzgMQAAguAUgrQAQgjAagaIgGgIQgjg3gBg+QgBgwAWgtQASgoAfgdQgZgUgRgbQgaglgIguQgJgvALgsQAHgbAOgZQgSgPgOgTQgagjgLgsQgLgsAHgsQAKg8AngvQApgwA5gSQA5gTA9APQA+AOAqAqQArArAPA9QAPA8gSA6QgGAUgKASQAaAXATAfQAbAuAEA0QADAzgVAyQgTArghAfQASAPAPATQAlAwAIA5QAIA5gYA4QgQAngcAdQAhAtAHA1QAIA6gYA4QgXA4gvAjQglAcgtAKQgBApgRAoQgXA4gvAjQgvAjg8AHQg9AHg0gYQgRgIgOgKQgYAzgsAgQgvAjg8AHQgOABgNAAQguAAgpgSg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AnaN0Qg5gZgkg3Qgjg3gBg+QgBgwAWguQAVguAlgfQAtglA8gKQAogGAlAHQAEgiAPghQAVgtAmgfQAsgmA9gKQA8gKA2AVQAXAJAUAOQAUgtAlgfQAnghA0gMQAAguAUgrQAQgjAagaIgGgIQgjg2gBg+QgBgxAWgtQASgoAfgdQgZgUgRgbQgaglgIguQgJgvALgsQAHgbAOgZQgSgPgOgTQgbgjgLgsQgLgsAHgsQAKg8AogvQApgwA5gSQA5gTA9APQA+AOAqAqQArArAPA9QAPA8gSA6QgGAUgKASQAaAXATAfQAbAuAEA0QADAzgVAyQgTArghAfQASAPAPATQAlAwAIA5QAIA6gYA4QgQAmgcAdQAhAtAHA1QAIA6gYA4QgXA4gvAjQglAcgtAKQgBApgRAoQgXA4gvAjQgvAjg8AHQg9AHg1gYQgRgIgOgKQgYAzgsAgQguAjg8AHQgiAEgggGQgEAegNAdQgXA5gvAiQgvAjg8AHQgOABgNAAQguAAgpgTg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_7_graphics_53,x:179.6548,y:278.0353}).wait(1).to({graphics:mask_7_graphics_54,x:182.1884,y:291.5426}).wait(1).to({graphics:mask_7_graphics_55,x:182.6889,y:308.0092}).wait(1).to({graphics:mask_7_graphics_56,x:182.6889,y:322.0019}).wait(1).to({graphics:mask_7_graphics_57,x:176.1744,y:332.5105}).wait(1).to({graphics:mask_7_graphics_58,x:160.1744,y:337.0105}).wait(1).to({graphics:mask_7_graphics_59,x:147.1744,y:346.5092}).wait(41));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).wait(47));

	// 筆04
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(309.05,271.3,1,1,0,0,0,397.4,241.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({_off:false},0).wait(1).to({x:275.05,y:285.3},0).wait(1).to({x:257.05,y:314.3},0).wait(1).to({x:261.05,y:344.3},0).wait(1).to({x:279.05,y:363.3},0).wait(1).to({x:276.05,y:392.3},0).wait(1).to({x:278.05,y:422.3},0).wait(1).to({x:291.05,y:447.3},0).wait(1).to({x:293.05,y:475.3},0).wait(1).to({x:315.05,y:496.3},0).wait(1).to({x:330.05,y:516.3},0).to({_off:true},1).wait(47));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_42 = new cjs.Graphics().p("AhZDIQg5gagkg2Qgjg3gBg+QgBgwAVgtQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGQgOACgMAAQguAAgpgTg");
	var mask_8_graphics_43 = new cjs.Graphics().p("ABpDIQg5gagkg2IgMgWQgWAvgpAfQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgwAVgtQAVguAmgfQAsglA9gKQA8gKA2AVQA3AVAmAwQANARAJATQAUgpAjgcQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGQgOACgNAAQguAAgpgTg");
	var mask_8_graphics_44 = new cjs.Graphics().p("AmoEsQg5gZgkg3Qgjg3gBg+QgBgxAVgtQAVgtAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA8gKA1AVQA3AVAmAwQANARAKATQAUgpAjgcQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA3gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgVQgXAugpAfQgvAjg7AGQgtAFgogLQgCAlgPAlQgYA4gvAjQgvAjg8AGQgOACgNAAQguAAgpgTg");
	var mask_8_graphics_45 = new cjs.Graphics().p("AnLHCQg5gZgkg3Qgjg3gBg+QgBgxAVgtQAVguAmgfQALgKANgIQggg0gBg6QgBgxAVgtQAVguAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANARAKATQAUgpAjgcQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgWQgXAvgpAfQgvAjg8AGQgsAFgogLQgCAlgPAkQgYA4gvAjIgPAKQAZAnAGAtQAIA6gXA5QgYA4gvAjQgvAjg8AGQgOACgNAAQguAAgpgTg");
	var mask_8_graphics_46 = new cjs.Graphics().p("AmFJEQg5gagkg2Qgjg3gBg+QgBgtATgrQgegWgWghQgjg3gBg+QgBgxAVgtQAVgtAmgfQALgKANgIQggg0gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANARAKATQAUgoAjgdQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgWQgXAvgpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAJQAZAnAGAtQAIA6gXA5IAAAAQAWARASAXQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_8_graphics_47 = new cjs.Graphics().p("AjRKtQg5gagkg2Qgig2gCg9QgagEgZgLQg5gagkg2Qgjg3gBg+QgBgtATgrQgegWgWghQgjg3gBg+QgBgwAVgtQAVguAmgfQALgKANgIQggg0gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANARAKATQAUgpAjgcQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgWQgXAvgpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAKQAZAnAGAtQAIA5gXA5IAAAAQAWARASAXQAlAwAIA6IACAYQAVADATAIQA2AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQguAjg8AGQgOACgNAAQguAAgpgTg");
	var mask_8_graphics_48 = new cjs.Graphics().p("AjfNHQg2gRgmgnQgigigQguQgRgvAFgvQAFgyAZgqQATgfAcgYIgCgDQgig1gCg9QgagEgZgMQg5gZgkg3Qgjg3gBg+QgBgsATgrQgegWgWghQgjg2gBg+QgBgxAVguQAVgtAmgfQALgKANgIQggg0gBg8QgBgwAVguQAVgtAmgfQAsgmA9gKQAygIAuANQACgpASgoQAVgtAmgfQAsgmA9gKQA7gKA2AVQA3AWAmAwQANARAKATQAUgpAjgcQAsgmA9gKQA8gKA2AVQA3AWAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHQg9AHg1gYQg5gagkg3IgMgVQgXAvgpAeQgvAjg8AHQgsAFgogMQgCAmgPAkQgYA4gvAjIgPALQAZAnAGAtQAIA6gXA4IAAABQAWARASAXQAlAvAIA5IACAYQAVAEATAIQA2AVAmAwQAlAwAIA5QAIA6gYA4QgVAygmAhQAdArAGA1QAHA5gUAyQgVAzgqAkQgrAkg1ALQgVAFgWAAQggAAghgKg");
	var mask_8_graphics_49 = new cjs.Graphics().p("AifPFQg4gagkg3Qgkg2gBg+QgBgsARgpQgXgPgUgTQgigigQgvQgRguAFgwQAFgxAZgqQATggAcgXIgCgDQgig2gCg8QgagFgZgLQg5gagkg2Qgjg3gBg9QgBgtATgqQgegXgWghQgjg3gBg+QgBgxAVgtQAVguAmgfQALgJANgIQggg1gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANASAKASQAUgoAjgdQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgVQgXAugpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAKQAZAnAGAtQAIA6gXA5IAAABQAWAQASAXQAlAwAIA6IACAYQAVAEATAGQA2AVAmAwQAlAwAIA6QAIA5gYA5QgVAxgmAiQAdAqAGA2QAHA4gUAzIgBABQAhAUAZAgQAmAwAIA6QAIA6gXA4QgYA4gvAjQgvAjg7AHQgOABgNAAQguAAgpgSg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AhtRWQg5gagkg3Qgjg3gBg+QgBgxAVgtQAGgOAIgMQgbgVgUggQgkg2gBg+QgBgsARgpQgXgOgUgUQgigigQgvQgRguAFgwQAFgxAZgqQATggAcgXIgCgDQgig2gCg8QgagFgZgLQg5gagkg1Qgjg3gBg+QgBgtATgqQgegXgWghQgjg3gBg+QgBgxAVgtQAVguAmgfQALgJANgIQggg1gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygIAuANQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANASAKASQAUgoAjgdQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgVQgXAugpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAKQAZAnAGAtQAIA6gXA5IAAABQAWAQASAXQAlAwAIA6IACAYQAVAEATAHQA2AVAmAwQAlAwAIA5QAIA5gYA5QgVAxgmAiQAdAqAGA2QAHA4gUAzIgBABQAhAUAZAgQAmAwAIA6QAIA6gXA4QgIASgJAPQAUAQARAWQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AHIgZABQguAAgqgSg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AgnTmQg5gZgkg3Qgjg3gBg+QgBgxAWgtIAHgPQgkgZgagnQgjg3gBg+QgBgxAVgtQAGgOAIgMQgbgVgUggQgkg2gBg+QgBgsARgpQgXgOgUgUQgigigQgvQgRguAFgwQAFgxAZgqQATggAcgXIgCgDQgig1gCg8QgagFgZgLQg5gagkg2Qgjg3gBg+QgBgtATgqQgegXgWghQgjg3gBg+QgBgxAVgtQAVguAmgfQALgJANgIQggg1gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygIAuANQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANASAKASQAUgoAjgdQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgVQgXAugpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAKQAZAnAGAtQAIA6gXA5IAAABQAWAQASAXQAlAwAIA6IACAYQAVAEATAHQA2AVAmAwQAlAwAIA6QAIA5gYA4QgVAxgmAiQAdAqAGA2QAHA4gUAzIgBABQAhAUAZAgQAmAwAIA6QAIA6gXA4QgIASgJAPQAUARARAVQAlAwAIA5QAIA6gYA4IgLAXQAdATAXAdQAlAwAIA5QAIA6gYA4QgXA5gvAiQgvAjg8AHIgaABQguAAgpgTg");
	var mask_8_graphics_52 = new cjs.Graphics().p("ACMVLQg5gagkg3QgggxgEg3QgZgEgZgMQg5gZgkg3Qgjg3gBg+QgBgxAWgtIAHgPQgkgZgagnQgjg3gBg+QgBgxAVgtQAGgOAIgMQgbgWgUgfQgkg2gBg+QgBgsARgpQgXgPgUgTQgigigQgvQgRguAFgwQAFgxAZgpQATggAcgXIgCgDQgig2gCg8QgagFgZgLQg5gagkg2Qgjg3gBg+QgBgtATgqQgegXgWghQgjg3gBg+QgBgxAVgtQAVguAmgfQALgJANgIQggg1gBg7QgBgxAVgtQAVguAmgfQAsglA9gKQAygJAuAOQACgqASgnQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQANASAKASQAUgoAjgdQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2IgMgVQgXAugpAfQgvAjg8AGQgsAFgogLQgCAlgPAlQgYA4gvAjIgPAKQAZAnAGAtQAIA6gXA5IAAABQAWAQASAXQAlAwAIA6IACAYQAVAEATAHQA2AVAmAwQAlAwAIA6QAIA5gYA5QgVAxgmAiQAdApAGA2QAHA4gUAzIgBABQAhAUAZAgQAmAwAIA6QAIA6gXA4QgIASgJAPQAUAQARAWQAlAwAIA5QAIA6gYA4IgLAXQAdATAXAdQAlAwAIA5IACAOQAUAEAUAHQA3AWAmAvQAlAwAIA6QAIA6gXA4QgYA4gvAjQgvAjg8AHQgOABgNAAQguAAgpgSg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_8_graphics_42,x:177.6744,y:164.0427}).wait(1).to({graphics:mask_8_graphics_43,x:158.1744,y:164.0427}).wait(1).to({graphics:mask_8_graphics_44,x:144.1744,y:174.0427}).wait(1).to({graphics:mask_8_graphics_45,x:140.6744,y:189.0427}).wait(1).to({graphics:mask_8_graphics_46,x:140.6744,y:202.033}).wait(1).to({graphics:mask_8_graphics_47,x:140.6744,y:212.5427}).wait(1).to({graphics:mask_8_graphics_48,x:140.6744,y:227.0587}).wait(1).to({graphics:mask_8_graphics_49,x:140.6744,y:240.5177}).wait(1).to({graphics:mask_8_graphics_50,x:140.6744,y:255.0091}).wait(1).to({graphics:mask_8_graphics_51,x:140.6744,y:269.508}).wait(1).to({graphics:mask_8_graphics_52,x:140.6744,y:279.5177}).wait(48));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(42).to({_off:false},0).wait(58));

	// 筆03
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(354.05,284.05,1,1,0,0,0,397.4,241.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(33).to({_off:false},0).wait(1).to({x:338.05,y:309.05},0).wait(1).to({x:313.05,y:321.05},0).wait(1).to({x:288.05,y:332.05},0).wait(1).to({x:292.05,y:360.05},0).wait(1).to({x:312.05,y:380.05},0).wait(1).to({x:313.05,y:411.05},0).wait(1).to({x:318.05,y:444.05},0).wait(1).to({x:319.05,y:455.05},0).to({_off:true},1).wait(58));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_33 = new cjs.Graphics().p("AhZDIQg5gagkg3Qgjg2gBg/QgBgvAWguQAVgtAlgfQAtglA8gKQA7gKA3AVQA2AVAmAwQAlAwAIA6QAIA5gYA4QgXA4gvAjQgvAjg9AGIgYACQgvAAgpgTg");
	var mask_9_graphics_34 = new cjs.Graphics().p("AhoFUQg5gagkg2Qgjg3gBg+QgBgxAWguQASgmAdgcIgCgCQgjg2gBg/QgBgwAWguQAVgtAlgfQAtglA8gKQA7gKA3AVQA2AVAmAwQAlAwAIA6QAIA6gYA4QgSArgfAeQAcAqAHAyQAIA5gYA5QgXA4gvAjQgvAjg8AGQgNACgNAAQguAAgpgTg");
	var mask_9_graphics_35 = new cjs.Graphics().p("AiuHRQg5gagkg2Qgjg3gBg+QgBgxAVgtQAVguAmgfQAdgZAlgMQgFgVAAgVQgBgwAWguQASgmAdgdIgCgCQgjg2gBg/QgBgwAWguQAVgtAlgfQAtglA7gKQA8gKA3AVQA2AVAmAwQAlAwAIA6QAIA6gYA4QgSArgfAfQAcAqAHAyQAIA4gYA5QgXA4gvAjQgaATgeALIACAPQAIA5gYA5QgXA4gvAjQguAjg8AGQgOACgNAAQguAAgpgTg");
	var mask_9_graphics_36 = new cjs.Graphics().p("Ak6HqQg5gagkg3Qgjg2gBg/QgBgwAWguQAVgtAlgfQAtglA8gKQA9gKA2AVQAQAGAPAJQANgQAQgNQAdgZAlgMQgFgVAAgUQgBgxAWguQARgmAdgdIgCgCQgjg2gBg/QgBgwAWguQAVgtAlgfQAtglA8gKQA8gKA3AVQA2AVAmAwQAlAwAIA6QAIA6gYA4QgSArgfAfQAcAqAHAyQAIA4gYA5QgXA4gvAjQgaATgeALIACAPQAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg0gYIgVgLQgRAVgVAQQgvAjg8AGIgaACQguAAgqgTg");
	var mask_9_graphics_37 = new cjs.Graphics().p("Al4JhQgogIgjgXQgkgYgYgkQgYglgIgqQgJgrAJgrQAIgrAXgkQAZgnAogbQAogaAugIIAWgDQADgoASgmQAVguAlgfQAtgkA9gKQA8gKA2AWQAQAGAPAJQAMgQAQgNQAdgZAlgNQgFgVAAgVQAAgwAVguQASgnAdgcIgCgCQgjg3gBg+QAAgxAVgtQAVguAlgfQAtglA9gKQA7gKA3AWQA3AVAlAwQAlAvAJA6QAHA6gYA5QgRAqggAfQAdAqAHAyQAIA6gYA4QgYA3guAjQgbAUgeAKIACAPQAJA6gZA4QgXA4gvAjQgvAjg8AHQg8AHg1gYIgVgLQgRAUgWAQQguAjg8AHIgLABQgCAZgHAaQgNAqgbAiQgaAggkAVQgkAWgpAGQgRADgSAAQgWAAgYgFg");
	var mask_9_graphics_38 = new cjs.Graphics().p("AjYLZQgvgEgrgXQgogWgdgkQgegkgNgrQgNgrAFgtQgNgGgMgIQgkgYgYgkQgYglgIgqQgJgrAJgrQAIgrAXgkQAZgnAogbQAogaAugIIAWgDQADgoASglQAVguAlgfQAtglA9gKQA8gKA2AWQAQAGAPAJQAMgQAQgNQAdgZAlgNQgFgVAAgVQAAgwAVguQASgnAdgcIgCgCQgjg3gBg+QAAgxAVgtQAVguAlgfQAtglA9gKQA7gKA3AWQA3AVAlAwQAlAvAJA6QAHA6gYA5QgRAqggAfQAdAqAHAyQAIA6gYA4QgYA4guAjQgbAUgeAKIACAPQAJA5gZA4QgXA4gvAjQgvAjg8AHQg8AHg1gYIgVgLQgRAUgWAQQguAjg8AHIgLABIgCASQAWAKAUAQQAoAhAYAvQAYA0gEA8QgEA8gfAwQghAwg2AbQguAWgwAAIgRAAg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AgZNVQg8gMgqgnQgrgogSg5QgQg1AJg0IgVgBQgvgDgrgYQgogWgdgjQgegkgNgsQgNgqAFguQgNgGgMgHQgkgYgYglQgYglgIgqQgJgqAJgrQAIgsAXgkQAZgmAogaQAogbAugIIAWgDQADgoASgmQAVgtAlgfQAtglA9gKQA8gKA2AVQAQAGAPAJQAMgQAQgNQAdgZAlgMQgFgVAAgVQAAgxAVguQASgmAdgdIgCgCQgjg2gBg/QAAgwAVguQAVgtAlgfQAtglA9gKQA7gKA3AVQA3AVAlAwQAlAwAJA6QAHA6gYA4QgRArggAfQAdAqAHAyQAIA5gYA5QgYA4guAjQgbATgeALIACAPQAJA5gZA5QgXA3gvAjQgvAjg8AGQg8AHg1gYIgVgLQgRAVgWAQQguAjg8AGIgLABIgCASQAWALAUAQQAoAgAYAwQAYA0gEA8IgDAaQAaAAAbAGQA6ANAqAmQAqAnASA4QATA5gNA4QgMA3gnAtQgoAsg2ASQggALgiAAQgXAAgYgGg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AiMPZQg4gaglg3Qgjg3gBg+QAAgxAUgtQAWguAlgfIATgOQgKgUgHgWQgQg1AJg0IgVgBQgvgDgrgYQgogWgdgjQgegkgNgsQgNgqAFgtQgNgGgMgIQgkgYgYglQgYglgIgqQgJgqAJgqQAIgsAXgkQAZgnAogaQAogbAugIIAWgCQADgpASgmQAVgtAlgfQAtglA9gKQA8gKA2AVQAQAHAPAIQAMgPAQgOQAdgYAlgNQgFgVAAgVQAAgxAVguQASgmAdgcIgCgDQgjg2gBg/QAAgwAVguQAVgtAlgfQAtglA9gKQA7gKA3AVQA3AVAlAwQAlAwAJA6QAHA6gYA4QgRArggAfQAdAqAHAyQAIA5gYA5QgYA4guAjQgbATgeALIACAPQAJA5gZA5QgXA4gvAjQgvAjg8AGQg8AHg1gYIgVgLQgRAVgWAQQguAig8AGIgLABIgCASQAWALAUAQQAoAgAYAwQAYA0gEA8IgDAaQAaAAAbAGQA6ANAqAmQAqAnASA4QATA5gNA4QgMA3gnAtQgTAVgXAQQAVAkAGApQAHA6gXA4QgYA4gvAjQguAjg8AHIgaABQguAAgqgSg");
	var mask_9_graphics_41 = new cjs.Graphics().p("AgeROQgwgMgnghQgmghgTgtQgMgcgEgYQgDgVABgcQAAgPADgPQgZgUgTgdQgjg3gBg+QAAgxAUgtQAWguAlgfIATgOQgKgUgHgWQgQg1AJg0IgVgBQgvgDgrgYQgogWgdgjQgegkgNgsQgNgqAFguQgNgGgMgHQgkgYgYglQgYgkgIgqQgJgqAJgrQAIgsAXgkQAZgnAogaQAogbAugIIAWgDQADgoASgmQAVgtAlgfQAtglA9gKQA8gKA2AVQAQAGAPAJQAMgQAQgNQAdgZAlgMQgFgVAAgVQAAgxAVguQASgmAdgdIgCgCQgjg2gBg/QAAgwAVguQAVgtAlgfQAtglA9gKQA7gKA3AVQA3AVAlAwQAlAwAJA6QAHA6gYA4QgRArggAfQAdAqAHAyQAIA5gYA5QgYA4guAjQgbATgeALIACAPQAJA5gZA5QgXA4gvAjQgvAjg8AGQg8AHg1gYIgVgLQgRAVgWAQQguAjg8AGIgLABIgCASQAWALAUAQQAoAgAYAvQAYA0gEA8IgDAaQAaAAAbAGQA6ANAqAmQAqAnASA4QATA5gNA4QgMA3gnAtQgTAVgXAPQAVAlAGApQAEAdgEAdQApAhAWA0QAVA0gEA2QgEAygZArQgYAtgoAdQgnAdgyAJQgVAFgWAAQgaAAgagHg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_9_graphics_33,x:198.6744,y:154.0355}).wait(1).to({graphics:mask_9_graphics_34,x:197.1744,y:168.0453}).wait(1).to({graphics:mask_9_graphics_35,x:190.1744,y:180.5453}).wait(1).to({graphics:mask_9_graphics_36,x:176.1744,y:183.0355}).wait(1).to({graphics:mask_9_graphics_37,x:165.75,y:193.5944}).wait(1).to({graphics:mask_9_graphics_38,x:165.75,y:205.0989}).wait(1).to({graphics:mask_9_graphics_39,x:165.75,y:218.0345}).wait(1).to({graphics:mask_9_graphics_40,x:165.75,y:232.5117}).wait(1).to({graphics:mask_9_graphics_41,x:165.75,y:243.0385}).wait(59));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({_off:false},0).wait(67));

	// 筆02
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(424.05,295,1,1,0,0,0,397.4,241.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({_off:false},0).wait(1).to({x:449.05,y:312},0).wait(1).to({x:474.05,y:305},0).wait(1).to({x:481.05,y:273},0).wait(1).to({y:244},0).wait(1).to({x:466.05,y:214},0).wait(1).to({x:437.05,y:196},0).wait(1).to({x:411.05,y:187},0).wait(1).to({x:375.05,y:199},0).wait(1).to({x:354.05,y:215},0).wait(1).to({x:337.05,y:231},0).to({_off:true},1).wait(67));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_22 = new cjs.Graphics().p("AhZDIQg5gagkg2Qgjg3gBg+QgBgwAWguQAVgtAlgfQAtglA8gKQA7gKA2AVQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGIgZACQguAAgqgTg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AAjEdQg4gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg2gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA2AVAmAwQAgApALAxIAAAAQA9gKA2AVQA2AVAmAwQAlAwAIA5QAIA6gYA4QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AClFeQg5gagkg2QgMgTgIgUQgQAEgRACQg8AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg1Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApALAxIAAAAQA8gKA2AVQA2AVAmAwQAUAaAMAcIAVgEQA8gKA2AVQA3AVAmAvQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_25 = new cjs.Graphics().p("ABLFeQg5gagjg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg1Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApAKAxIABAAQA9gKA2AVQA1AVAmAwQAUAaALAcIASgEIAAgMQgBgxAVgtQAVguAmgfQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA6gXA3QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AAjHCQg4gagkg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg9QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApALAxIAAAAQA9gKA2AVQA2AVAlAwQAUAZAMAcIARgEIAAgMQgBgwAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA5gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AAjJnQg4gagkg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgsAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgAoALAxIAAAAQA9gKA2AVQA2AVAlAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgnAAgsQgBgxAVguQAOgdAUgXQgogZgcgpQgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAwAIA6QAIA5gYA4QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AAjLVQg4gagkg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApALAxIAAAAQA9gKA2AVQA2AVAlAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgwAVguQAOgdAUgXQgogZgcgpQgjg3gBg+IAAgHIgHABQg9AHg0gYQg5gagkg2Qgjg3gBg+QgBgxAVgtQAVguAmgfQAsglA8gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QADAQgBARQA6gJA0AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAwAIA6QAIA4gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AAjMMQg4gagkg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApALAxIAAAAQA9gKA2AVQA2AVAlAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgxAVgtQAOgdAUgXQgogZgcgpQgjg3gBg+IAAgHIgHABQg9AHg0gYQg5gagkg2IgKgTQgQAEgRACQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA2AVQA3AVAlAwQANARAJARIAVgEQA8gKA2AVQA3AVAmAwQAlAwAIA6QADAQgBARQA6gJA0AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAwAIA5QAIA5gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_30 = new cjs.Graphics().p("ABaM0Qg5gagjg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAgApALAxIAAAAQA9gKA1AVQA2AVAmAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgxAVguQAOgcAUgXQgogZgcgpQgjg3gBg+IAAgHIgHABQg9AHg1gYQg4gagkg2IgKgTQgQAEgRACQg9AHg1gYQg5gagkg2QgIgNgGgNIgCACQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAVgtQAVguAmgfQAsglA9gKQA8gKA2AVQA3AVAmAwQAPAUAKAVQArggA3gJQA8gKA2AVQA2AVAmAwQANARAJARIAVgEQA8gKA2AVQA3AVAmAwQAlAwAIA6QADAQgBARQA6gJA0AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAvAIA6QAIA5gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_31 = new cjs.Graphics().p("ADwM0Qg5gagkg2QgMgTgIgUQgQAEgRACQg9AHg0gYQg5gagkg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA2AVQA3AVAmAwQAfApALAxIAAAAQA9gKA2AVQA2AVAmAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgxAVguQAOgcAUgXQgogZgcgpQgjg3gBg+IAAgHIgHABQg9AHg1gYQg5gagkg2IgKgTQgQAEgRACQg9AHg0gYQg5gagkg2QgIgNgGgNIgCACQgvAjg8AGQg9AHg1gYIgNgGQgXAygrAgQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA2AVQAMAFALAGQAVgtAlgeQAsglA9gKQA8gKA2AVQA3AVAmAwQAPAUAKAVQArggA2gJQA8gKA2AVQA3AVAmAwQANARAJARIAVgEQA8gKA2AVQA3AVAmAwQAlAwAIA6QADAQgBARQA6gJA0AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAvAIA6QAIA5gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AFeM0Qg5gagkg2QgMgTgIgUQgQAEgRACQg9AHg1gYQg5gagjg3QgXgjgIgmIgMABQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAWguQAVgtAlgfQAtglA8gKQA8gKA1AVQA3AVAmAwQAgApALAxIAAAAQA9gKA2AVQA2AVAmAwQAUAaAMAcIARgEIAAgMQgBgxAVgtQAVguAmgfIAUgPQgTgoAAgsQgBgxAVguQAOgcAUgXQgogZgcgpQgjg3gBg+IAAgHIgHABQg9AHg1gYQg5gagkg2IgKgTQgQAEgRACQg9AHg1gYQg5gagjg2QgIgNgGgNIgCACQgvAjg8AGQg9AHg1gYIgNgGQgXAygrAgQgvAjg8AGQgVACgTgBIgDAHQgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQAagFAZACIAFgOQAVgtAmgfQAtglA8gKQA8gKA2AVQAMAFALAGQAVgtAlgeQAsglA9gKQA8gKA2AVQA3AVAmAwQAOAUAKAVQArggA3gJQA8gKA2AVQA3AVAmAwQANARAJARIAVgEQA8gKA2AVQA3AVAmAwQAlAwAIA6QADAQgBARQA6gJA0AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgOAhgWAaQAgAUAZAfQAlAvAIA6QAIA5gYA5QgXA4gvAjIgKAHQAMAbAEAfQAIA6gXA4QgYA4gvAjQgpAegzAJQADAygVAyQgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_10_graphics_22,x:254.6744,y:176.0355}).wait(1).to({graphics:mask_10_graphics_23,x:267.1744,y:184.5355}).wait(1).to({graphics:mask_10_graphics_24,x:280.1744,y:191.0355}).wait(1).to({graphics:mask_10_graphics_25,x:289.176,y:191.0355}).wait(1).to({graphics:mask_10_graphics_26,x:293.1744,y:181.0355}).wait(1).to({graphics:mask_10_graphics_27,x:293.1744,y:164.5355}).wait(1).to({graphics:mask_10_graphics_28,x:293.1744,y:153.5355}).wait(1).to({graphics:mask_10_graphics_29,x:293.1744,y:148.0355}).wait(1).to({graphics:mask_10_graphics_30,x:287.6744,y:144.033}).wait(1).to({graphics:mask_10_graphics_31,x:272.6744,y:144.033}).wait(1).to({graphics:mask_10_graphics_32,x:261.6744,y:144.033}).wait(68));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(22).to({_off:false},0).wait(78));

	// 筆01
	this.instance_19 = new lib.手握筆();
	this.instance_19.setTransform(233,298.05,1,1,0,0,0,397.4,241.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:225,y:269.05},0).wait(1).to({x:228,y:238.05},0).wait(1).to({x:247,y:212.05},0).wait(1).to({x:271,y:202.05},0).wait(1).to({x:297},0).wait(1).to({x:319,y:211.05},0).wait(1).to({x:338,y:227.05},0).wait(1).to({x:355,y:248.05},0).wait(1).to({x:374,y:269.05},0).wait(1).to({x:388,y:292.05},0).wait(1).to({x:403,y:315.05},0).wait(1).to({x:419,y:338.05},0).wait(1).to({x:435,y:356.05},0).wait(1).to({x:454,y:376.05},0).wait(1).to({x:474,y:390.05},0).wait(1).to({x:491,y:406.05},0).wait(1).to({x:522,y:413.05},0).wait(1).to({x:529,y:383.05},0).wait(1).to({x:510,y:354.05},0).wait(1).to({x:494,y:333.05},0).wait(1).to({x:470,y:309.05},0).to({_off:true},1).wait(78));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AhZDIQg5gagkg2Qgjg3gBg+QgBgwAWguQAVgtAlgfQAtglA8gKQA7gKA2AVQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGIgZACQguAAgqgTg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AgTFKQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg1Qgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA1AVQA3AVAmAwQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAvAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgpgTg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AAKHqQg4gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgwAVguQALgWAOgTQgpgZgcgqQgjg3gBg+QgBgxAVguQAVgtAmgfQAtglA8gKQA8gKA2AVQA2AVAmAwQAlAwAIA6QAIA5gYA5QgLAagQAWQAgAUAaAgQAlAwAIA5QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AAKKAQg4gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgpQgjg3gBg+QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQA7gKA2AVQA3AVAmAwQAlAwAIA5QAIA6gXA5QgYA4gvAjQgOAKgQAIQAVAkAFApQAIA5gYA5QgLAagQAWQAgATAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AgiLLQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAlgfQAsglA9gKQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA5gYA4QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgpgTg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AiVMCQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAlgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQA2AWAmAwQAlAvAIA6QAIA6gYA4QgXA4gvAjQgvAjg9AGQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4guAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAkAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg7AGIgaACQguAAgqgTg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AkIMCQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAegaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgFASgDQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQgpgTgeghQgWAHgYACQggAEgegGQgWAqgmAdQguAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAkAwAIA6QAIA5gYA5QgXA4guAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_7 = new cjs.Graphics().p("Al7MCQg5gagkg2Qgjg3gBg+QgBgdAHgbIgRgHQg5gagkg2Qgjg3gBg+QgBgxAVguQAKgWAPgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA7gKA3AVQAvATAiAmQAQgFASgDQA8gKA2AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QAIA6gXA4QgYA4gvAjQgvAjg8AGQg9AHg1gYQg3gZgkg0QgMADgNABQg9AHg1gYQgpgTgeghQgWAHgYACQggAEgdgGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AnQMCQg5gagkg2Qgjg3gBg+QgBgdAHgbIgRgHQg5gagkg2Qgjg3gBg+QgBgxAVguQAKgWAPgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA2AVQAvATAiAmQAQgFASgDQA8gKA2AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QAIA6gXA4QgYA5gvAjQguAig9AGQg9AHg1gXQg4gZgkg3Qgkg2gBg+QgVgFgUgJQg3gZgkg0QgMADgNABQg9AHg1gYQgpgTgeghQgVAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AolMCQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAhAmQAQgFASgDQA8gKA2AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QADAYgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6QAIA4gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+IABgTQgWgEgUgJQg4gZgkg3Qgkg2gBg+QgVgFgUgJQg3gZgjg0QgNADgNABQg9AHg1gYQgogTgeghQgWAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_10 = new cjs.Graphics().p("Ap/MCQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgFASgDQA7gKA2AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QADAYgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6IACANQAUADAUAIQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2QgggygEg3QgagEgZgLQg5gagkg2Qgjg3gBg+IABgTQgWgEgUgJQg4gZgkg3Qgkg2gBg+QgVgFgUgJQg3gZgjg0QgNADgNABQg8AHg1gYQgpgTgeghQgWAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_11 = new cjs.Graphics().p("ArFMCQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgFASgDQA8gKA1AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QADAYgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6IACANQAUADAUAIQA3AVAmAwQAlAwAIA6QAEAbgDAbIABABQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QAAgOABgOIgMgFQg5gagkg2QgggygEg3QgagEgZgLQg5gagkg2Qgjg3gBg+IABgTQgWgEgUgJQg4gZgkg3Qgkg2gBg+QgVgFgUgJQg3gZgig0QgNADgNABQg9AHg1gYQgpgTgeghQgWAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA4gYA5QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AMvM5Qg5gagkg2Qgjg3gBg+IABgUQgWgEgUgJQg5gagkg2Qgjg3gBg+QAAgOABgOIgMgFQg5gagkg2QgggygEg3QgagEgZgLQg5gagkg2Qgjg3gBg9IABgTQgWgFgUgJQg4gZgkg3Qgkg2gBg+QgVgFgTgJQg3gZgjg0QgNADgNABQg9AHg1gYQgpgTgeghQgWAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA5gYA4QgLAagQAWQAgAUAaAgQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgZgcgqQgjg3gBg9QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgFASgDQA8gKA2AVQA3AVAlAwIAJAMIAOgCQA8gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QADAYgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6IACAOQAUADAUAIQA3AVAmAvQAlAwAIA6QAEAbgDAbIABABQA3AVAmAwQAlAwAIA6QADAXgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AN1OdQg5gagkg2Qgjg3gBg9IgLgEQg5gagkg2Qgjg3gBg+IABgUQgWgEgUgJQg5gagkg2Qgjg3gBg+QAAgOABgOIgMgFQg5gagkg2QgggygEg3QgagEgZgLQg5gagkg1Qgjg3gBg+IABgTQgWgFgUgJQg4gZgjg3Qgkg2gBg+QgVgFgUgJQg3gZgjg0QgNADgNABQg9AHg1gYQgpgTgeghQgWAHgYACQggAEgegGQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA5gYA5QgLAagQAWQAgAUAaAfQAlAwAIA6QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QgBgdAIgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVguQALgWAOgTQgpgYgcgqQgjg3gBg+QgBgxAVguQAVgtAmgfQASgPAVgLQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgFASgDQA8gKA2AVQA3AVAmAwIAJAMIAOgCQA7gKA2AVQA3AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA3AVAlAwQAmAvAIA6QADAYgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6IACAOQAUADAUAIQA3AVAmAwQAlAwAIA5QAEAbgDAbIABABQA3AVAmAwQAlAwAIA6QADAXgBAXQAPADAPAGQA3AVAmAwQAlAwAIA6QACAMAAANQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGIgaACQguAAgqgTg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AQdQQQg5gCgugXQgwgZgfgtQgXgigKgoQgDgOgCgNQgZgFgXgKQg5gagkg2Qgjg3gBg9IgLgEQg5gagkg2Qgjg3gBg+IABgUQgWgEgUgJQg5gagkg2Qgjg3gBg+QAAgOABgOIgMgFQg5gagkg2QgfgygFg2QgagEgZgLQg5gagkg2Qgjg3gBg+IABgTQgWgFgTgJQg4gZgkg3Qgkg2gBg+QgVgFgUgJQg3gZgjg0QgNADgNABQg9AHg1gYQgpgTgeghQgWAHgYACQggADgegFQgWAqgmAdQgvAjg8AGIgQABIgGARQgYA4gvAjQgOAKgQAIQAVAkAFApQAIA5gYA5QgLAagQAWQAhAUAZAgQAlAwAIA5QAGApgLApIAHADQA3AVAmAwQAlAwAIA6QAIA5gYA5QgXA4gvAjQgvAjg8AGQg9AHg1gYQg5gagkg2Qgjg3gBg+QAAgdAHgbIgSgHQg5gagkg2Qgjg3gBg+QgBgxAVgtQALgWAOgTQgpgZgcgqQgjg3gBg+QgBgxAVguQAVgtAmgfQASgQAVgKQgbgxgBg2QgBgxAVgtQAVguAmgfQAsglA9gKQAOgDANAAIAJgXQAVguAmgfQAsglA9gKQAmgHAkAGQAUgkAfgaQAtglA8gKQA8gKA3AVQAvATAiAmQAQgGASgCQA8gKA2AVQA3AVAmAwIAJAMIAOgCQA8gKA2AVQA2AVAmAwQAlAwAIA6QACANAAANQAQADAOAGQA3AVAlAwQAmAvAIA6QAEAXgCAYQAPADAPAGQA3AVAmAwQAlAwAIA6IACAOQAVADATAIQA3AVAmAwQAlAwAIA6QAEAbgDAbIABABQA3AUAmAwQAlAwAIA6QAEAXgCAXQAPADAPAGQA3AVAmAwQAlAwAIA6QACAMAAANQA3AVAmAwQAlAwAIA6IAAAAIADAAQA3AHArAcQAtAdAbAvQAbAvACA0QAAAcgHAfQgQBBgsAsQghAggvAQQgoAOgtAAIgJAAg");
	var mask_11_graphics_15 = new cjs.Graphics().p("ARwReQhAgIgxgmQgxgngVg9IgEgNQgtgFgmgTQgxgZgfgtQgXgigKgoQgDgOgBgNQgZgFgYgKQg4gagkg2Qgjg2gCg+IgLgEQg4gagkg2Qgkg3gBg+IABgTQgVgFgVgJQg4gagkg2Qgkg3gBg+QAAgOACgOIgNgFQg4gagkg2QgggwgEg3QgbgFgZgLQg4gagjg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgjg2gCg+QgUgFgUgJQg4gYgjg1QgMADgOABQg8AHg2gYQgogSgegiQgWAHgYACQggAEgegFQgXAqglAcQgvAjg9AGIgQACIgGAQQgXA4gvAjQgOALgQAIQAUAjAGApQAIA5gYA5QgLAagRAWQAhAUAZAgQAmAwAIA6QAGAqgLAoIAHACQA2AVAmAwQAmAwAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgcAHgcIgSgHQg4gagkg2Qgkg3gBg9QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQATgPAVgLQgcgwgBg3QAAgxAVgtQAVguAlgfQAtglA8gKQAOgCAOgBIAJgXQAVguAlgfQAtglA8gKQAngGAjAGQAUglAggaQAsglA9gKQA8gKA2AVQAvATAjAmQAQgFARgDQA9gKA2AVQA2AVAmAwIAJANIAOgDQA8gKA3AVQA2AVAmAwQAlAwAIA6QACANAAANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAYgCAXQAQADAPAGQA2AVAmAwQAmAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QAEAbgEAcIACAAQA2AVAmAwQAmAvAIA6QADAXgCAXQAQADAPAGQA2AVAmAwQAmAwAIA6QACANAAAMQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQArAJAjAXQAsAdAaAwQAaAvABA1QACA+giA4QgiA3g3AcQgtAWgyAAIgagBg");
	var mask_11_graphics_16 = new cjs.Graphics().p("ASoSqQg2gRgmgmQgigigQgvQgFgMgDgNIgBAAQhAgHgxgnQgxgmgVg+IgEgNQgtgEgmgTQgxgZgfguQgXghgKgpQgDgNgCgNQgYgFgYgLQg4gZgkg3Qgjg2gCg9IgLgFQg4gZgkg3Qgkg3gBg+IABgTQgWgEgUgKQg4gZgkg3Qgkg3gBg+QAAgNACgOIgNgFQg4gZgkg3QgggxgEg3QgbgEgYgMQg4gZgkg3Qgkg3gBg+IABgSQgVgFgUgJQg5gagkg2Qgkg2gBg/QgVgEgTgJQg4gZgjg0QgNADgNABQg8AGg2gXQgpgTgeghQgVAHgYACQggADgegFQgXAqglAcQgvAjg9AHIgQABIgGAQQgXA4gvAjQgPALgPAIQAUAkAGAoQAIA6gYA4QgMAbgQAWQAhAUAZAgQAmAwAIA5QAFAqgLApIAIADQA2AVAmAvQAmAwAIA5QAIA6gYA4QgYA4guAjQgvAjg9AHQg8AGg2gYQg4gZgkg3Qgkg3gBg+QAAgcAHgbIgSgHQg4gagkg3Qgkg2gBg+QAAgxAVgtQAKgWAOgTQgogZgcgrQgkg3gBg+QAAgxAVgtQAVguAlgfQASgPAVgKQgbgxgBg2QAAgxAVguQAVgtAlgfQAtgmA8gKQAOgCANgBIAKgXQAVgtAlgfQAtgmA8gKQAmgGAkAGQAUgkAggbQAsglA9gKQA8gKA2AWQAvASAiAnQARgGARgDQA9gKA2AWQA2AVAmAwIAJAMIAOgDQA8gKA3AVQA2AWAmAvQAmAwAIA6QABANABANQAPAEAPAFQA1AVAmAwQAlAwAJA6QADAXgCAXQAQAEAPAGQA2AVAmAwQAmAwAIA5IABAOQAVAEAUAIQA2AVAmAwQAmAwAIA5QADAcgDAbIACABQA2AVAmAwQAmAwAIA4QADAYgCAWQAPAEAQAGQA2AVAmAwQAmAwAIA5QABANABANQA2AVAmAwQAmAwAIA5IAAABIADAAQA2AHAsAcQAsAdAbAuQAQAcAHAdQAqAIAkAXQAsAeAaAvQAPAbAGAdQAmAEAkARQAzAZAgAsQAfAtAHA4QAHA4gUAzQgUAygrAlQgrAkg1ALQgWAFgWAAQggAAgggKg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AUeTaQg1gSglgoQgRgSgMgVIgQAEQg1AMg3gRQg2gQgmgnQgigigQguQgFgNgDgMIgBAAQhAgIgxgmQgxgngVg9IgEgOQgugEglgTQgxgZgfgtQgXgigKgoQgDgOgCgNQgYgFgYgKQg4gagkg2Qgkg3gBg9IgLgEQg4gagkg2Qgkg3gBg+IABgUQgWgEgUgJQg4gagkg2Qgkg3gBg9QAAgOACgOIgNgFQg3gagkg2QgggygEg3QgbgEgZgLQg4gagkg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgkg2gBg+QgVgFgTgJQg4gZgjg0QgNADgNABQg8AHg2gYQgpgTgeghQgWAHgXACQggAEgegGQgXAqglAdQgvAjg9AGIgQABIgGARQgXA4gvAjQgPAKgPAIQAUAkAGApQAIA5gYA5QgMAagQAWQAhAUAZAgQAmAwAIA6QAFApgLApIAIADQA2AVAmAwQAmAvAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgdAHgbIgSgHQg4gagkg1Qgkg3gBg+QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQASgQAVgKQgbgxgBg2QAAgxAVgtQAVguAlgfQAtglA8gKQAOgDANAAIAKgXQAVguAlgfQAtglA8gKQAmgHAkAGQAUgkAggaQAsglA9gKQA8gKA2AVQAvATAiAmQAQgFASgDQA9gKA2AVQA2AVAmAwIAJAMIAOgCQA8gKA3AVQA2AVAmAwQAmAwAIA6QABANABANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAXgCAYQAOADAQAGQA2AVAmAwQAmAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QADAbgDAbIACABQA2AVAmAwQAmAwAIA6QADAXgCAWQAPADAQAGQA2AVAmAwQAmAwAIA6QABAMABANQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQAqAIAkAYQAsAdAaAwQAPAaAGAdQAmAEAkASQAzAZAgAsIAKAQIAHgBQA5gPA7ASQA7ARAoArQAoArANA9QANA8gTA4QgTA3gvAoQgvAog6AKQgSADgSAAQgkAAgjgMg");
	var mask_11_graphics_18 = new cjs.Graphics().p("ASITaQg1gSglgoQgRgSgMgVIgQAEQg1AMg3gRQg2gQgmgnQgigigQguQgFgNgDgMIgBAAQhAgIgxgmQgxgngVg9IgEgOQgtgEgmgTQgxgZgfgtQgXgigKgoQgDgOgCgNQgYgFgYgKQg4gagkg2Qgjg3gCg9IgLgEQg4gagkg2Qgkg3gBg+IABgUQgVgEgVgJQg3gagkg2Qgkg3gBg9QAAgOACgOIgNgFQg4gagkg2QgggygEg3QgbgEgZgLQg4gagkg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgkg2gBg+QgVgFgTgJQg4gZgjg0QgNADgNABQg8AHg2gYQgpgTgeghQgVAHgYACQggAEgegGQgXAqglAdQgvAjg9AGIgQABIgGARQgXA4gvAjQgPAKgPAIQAUAkAGApQAIA5gYA5QgLAagRAWQAhAUAZAgQAmAwAIA6QAGApgMApIAIADQA2AVAmAwQAmAvAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgdAHgbIgSgHQg4gagkg1Qgkg3gBg+QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQATgQAUgKQgbgxgBg2QAAgxAVgtQAVguAlgfQAtglA8gKQAOgDANAAIAKgXQAVguAlgfQAtglA8gKQAmgHAkAGQAUgkAggaQAsglA9gKQA8gKA2AVQAvATAiAmQARgFARgDQA9gKA2AVQA2AVAmAwIAJAMIAOgCQA8gKA3AVQA2AVAmAwQAmAwAIA6QACANAAANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAXgCAYQAQADAPAGQA2AVAmAwQAlAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QAEAbgEAbIACABQA2AVAmAwQAmAwAIA6QADAXgCAWQAQADAPAGQA2AVAmAwQAmAwAIA6QABAMABANQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQAqAIAkAYQAsAdAaAwQAPAaAGAdQAmAEAkASQAzAZAgAsIAKAQIAHgBQA5gPA7ASQAjAKAbATIAFgGQAug4BEgTQBGgUBDAaQBEAbAnA/QAmA/gHBKQgEArgUAoQgfA9g6AhQgoAYgvAFQhBAHg9ghQgMgGgKgIQgNAPgPANQgvAog6AKQgSADgSAAQgkAAgjgMg");
	var mask_11_graphics_19 = new cjs.Graphics().p("ASITaQg1gSglgoQgRgSgMgVIgQAEQg1AMg3gRQg2gQgmgnQgigigQguQgFgNgDgMIgBAAQhAgIgxgmQgxgngVg9IgEgOQgtgEgmgTQgxgZgfgtQgXgigKgoQgDgOgCgNQgYgFgYgKQg4gagkg2Qgjg3gCg9IgLgEQg4gagkg2Qgkg3gBg+IABgUQgVgEgVgJQg3gagkg2Qgkg3gBg9QAAgOACgOIgNgFQg4gagkg2QgggygEg3QgbgEgZgLQg4gagkg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgkg2gBg+QgVgFgTgJQg4gZgjg0QgNADgNABQg8AHg2gYQgpgTgeghQgVAHgYACQggAEgegGQgXAqglAdQgvAjg9AGIgQABIgGARQgXA4gvAjQgPAKgPAIQAUAkAGApQAIA5gYA5QgLAagRAWQAhAUAZAgQAmAwAIA6QAGApgMApIAIADQA2AVAmAwQAmAvAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgdAHgbIgSgHQg4gagkg1Qgkg3gBg+QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQATgQAUgKQgbgxgBg2QAAgxAVgtQAVguAlgfQAtglA8gKQAOgDANAAIAKgXQAVguAlgfQAtglA8gKQAmgHAkAGQAUgkAggaQAsglA9gKQA8gKA2AVQAvATAiAmQARgFARgDQA9gKA2AVQA2AVAmAwIAJAMIAOgCQA8gKA3AVQA2AVAmAwQAmAwAIA6QACANAAANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAXgCAYQAQADAPAGQA2AVAmAwQAlAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QAEAbgEAbIACABQA2AVAmAwQAmAwAIA6QADAXgCAWQAQADAPAGQA2AVAmAwQAmAwAIA6QABAMABANQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQAqAIAkAYQAsAdAaAwQAPAaAGAdQAmAEAkASQAzAZAgAsIAKAQIAHgBQAzgNA0AMQgLgMgKgPQgkg2gBg/QAAgxAVgtQAVguAlgfQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAwAIA5QAIA6gYA5QgGAOgIAOQA3AbAiA3QAmA/gHBKQgEArgUAoQgfA9g6AhQgoAYgvAFQhBAHg9ghQgMgGgKgIQgNAPgPANQgvAog6AKQgSADgSAAQgkAAgjgMg");
	var mask_11_graphics_20 = new cjs.Graphics().p("ASITaQg1gSglgoQgRgSgMgVIgQAEQg1AMg3gRQg2gQgmgnQgigigQguQgFgNgDgMIgBAAQhAgIgxgmQgxgngVg9IgEgOQgtgEgmgTQgxgZgfgtQgXgigKgoQgDgOgCgNQgYgFgYgKQg4gagkg2Qgjg3gCg9IgLgEQg4gagkg2Qgkg3gBg+IABgUQgVgEgVgJQg3gagkg2Qgkg3gBg9QAAgOACgOIgNgFQg4gagkg2QgggygEg3QgbgEgZgLQg4gagkg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgkg2gBg+QgVgFgTgJQg4gZgjg0QgNADgNABQg8AHg2gYQgpgTgeghQgVAHgYACQggAEgegGQgXAqglAdQgvAjg9AGIgQABIgGARQgXA4gvAjQgPAKgPAIQAUAkAGApQAIA5gYA5QgLAagRAWQAhAUAZAgQAmAwAIA6QAGApgMApIAIADQA2AVAmAwQAmAvAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgdAHgbIgSgHQg4gagkg1Qgkg3gBg+QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQATgQAUgKQgbgxgBg2QAAgxAVgtQAVguAlgfQAtglA8gKQAOgDANAAIAKgXQAVguAlgfQAtglA8gKQAmgHAkAGQAUgkAggaQAsglA9gKQA8gKA2AVQAvATAiAmQARgFARgDQA9gKA2AVQA2AVAmAwIAJAMIAOgCQA8gKA3AVQA2AVAmAwQAmAwAIA6QACANAAANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAXgCAYQAQADAPAGQA2AVAmAwQAlAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QAEAbgEAbIACABQA2AVAmAwQAmAwAIA6QADAXgCAWQAQADAPAGQA2AVAmAwQAmAwAIA6QABAMABANQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQAqAIAkAYQAsAdAaAwQAPAaAGAdQAmAEAkASQAzAZAgAsIAKAQIAHgBQAzgNA0AMQgLgMgKgPQgkg2gBg/QAAgOACgOIgMgFQg5gZgkg3Qgkg3gBg+QAAgxAVgtQAVguAlgfQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAwAIA6QADAbgDAbIACABQA2AVAmAwQAmAwAIA5QAIA6gYA5QgGAOgIAOQA3AbAiA3QAmA/gHBKQgEArgUAoQgfA9g6AhQgoAYgvAFQhBAHg9ghQgMgGgKgIQgNAPgPANQgvAog6AKQgSADgSAAQgkAAgjgMg");
	var mask_11_graphics_21 = new cjs.Graphics().p("ASITaQg1gSglgoQgRgSgMgVIgQAEQg1AMg3gRQg2gQgmgnQgigigQguQgFgNgDgMIgBAAQhAgIgxgmQgxgngVg9IgEgOQgtgEgmgTQgxgZgfgtQgXgigKgoQgDgOgCgNQgYgFgYgKQg4gagkg2Qgjg3gCg9IgLgEQg4gagkg2Qgkg3gBg+IABgUQgVgEgVgJQg3gagkg2Qgkg3gBg9QAAgOACgOIgNgFQg4gagkg2QgggygEg3QgbgEgZgLQg4gagkg2Qgkg3gBg+IABgTQgVgFgUgJQg5gZgkg3Qgkg2gBg+QgVgFgTgJQg4gZgjg0QgNADgNABQg8AHg2gYQgpgTgeghQgVAHgYACQggAEgegGQgXAqglAdQgvAjg9AGIgQABIgGARQgXA4gvAjQgPAKgPAIQAUAkAGApQAIA5gYA5QgLAagRAWQAhAUAZAgQAmAwAIA6QAGApgMApIAIADQA2AVAmAwQAmAvAIA6QAIA5gYA5QgYA4guAjQgvAjg9AGQg8AHg2gYQg4gagkg2Qgkg3gBg+QAAgdAHgbIgSgHQg4gagkg1Qgkg3gBg+QAAgxAVguQAKgWAOgTQgogZgcgqQgkg3gBg+QAAgxAVguQAVgtAlgfQATgQAUgKQgbgxgBg2QAAgxAVgtQAVguAlgfQAtglA8gKQAOgDANAAIAKgXQAVguAlgfQAtglA8gKQAmgHAkAGQAUgkAggaQAsglA9gKQA8gKA2AVQAvATAiAmQARgFARgDQA9gKA2AVQA2AVAmAwIAJAMIAOgCQA8gKA3AVQA2AVAmAwQAmAwAIA6QACANAAANQAPADAPAGQA2AVAmAwQAlAvAJA6QADAXgCAYQAQADAPAGQA2AVAmAwQAlAwAIA6IABAOQAVADAUAIQA2AVAmAwQAmAwAIA6QAEAbgEAbIACABQA2AVAmAwQAmAwAIA6QADAXgCAWQAQADAPAGQA2AVAmAwQAmAwAIA6QABAMABANQA2AVAmAwQAmAwAIA6IAAAAIADAAQA2AHAsAcQAsAdAbAvQAQAbAHAdQAqAIAkAYQAsAdAaAwQAPAaAGAdQAmAEAkASQAzAZAgAsIAKAQIAHgBQAzgNA0AMQgLgMgKgPQgkg2gBg/QAAgOACgOIgMgFQg5gZgkg3QgegtgFgzIgdgDQhAgMgvgnQgngggWgvQgVgvABgyQACgzAYguQAYguApgdQAwgiA4gGQAjgDAlAHQA4AKArAfQApAdAZAwQAUAlAEApQAgACAeAMQA2AVAmAwQAmAwAIA6QADAbgDAbIACABQA2AVAmAwQAmAwAIA5QAIA6gYA5QgGAOgIAOQA3AbAiA3QAmA/gHBKQgEArgUAoQgfA9g6AhQgoAYgvAFQhBAHg9ghQgMgGgKgIQgNAPgPANQgvAog6AKQgSADgSAAQgkAAgjgMg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:92.6744,y:205.0355}).wait(1).to({graphics:mask_11_graphics_1,x:85.6744,y:192.0355}).wait(1).to({graphics:mask_11_graphics_2,x:82.6744,y:176.0355}).wait(1).to({graphics:mask_11_graphics_3,x:82.6744,y:161.033}).wait(1).to({graphics:mask_11_graphics_4,x:87.1744,y:153.533}).wait(1).to({graphics:mask_11_graphics_5,x:98.6744,y:148.0355}).wait(1).to({graphics:mask_11_graphics_6,x:110.1744,y:148.0355}).wait(1).to({graphics:mask_11_graphics_7,x:121.676,y:148.0355}).wait(1).to({graphics:mask_11_graphics_8,x:130.176,y:148.0355}).wait(1).to({graphics:mask_11_graphics_9,x:138.6744,y:148.0355}).wait(1).to({graphics:mask_11_graphics_10,x:147.6744,y:148.0355}).wait(1).to({graphics:mask_11_graphics_11,x:154.6744,y:148.0355}).wait(1).to({graphics:mask_11_graphics_12,x:163.1744,y:153.5355}).wait(1).to({graphics:mask_11_graphics_13,x:170.1744,y:163.5355}).wait(1).to({graphics:mask_11_graphics_14,x:180.1511,y:173.1481}).wait(1).to({graphics:mask_11_graphics_15,x:188.6026,y:181.1123}).wait(1).to({graphics:mask_11_graphics_16,x:198.1402,y:189.5524}).wait(1).to({graphics:mask_11_graphics_17,x:210.6474,y:194.5413}).wait(1).to({graphics:mask_11_graphics_18,x:225.6289,y:194.5413}).wait(1).to({graphics:mask_11_graphics_19,x:225.6289,y:194.5413}).wait(1).to({graphics:mask_11_graphics_20,x:225.6289,y:194.5413}).wait(1).to({graphics:mask_11_graphics_21,x:225.6289,y:194.5413}).wait(79));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(64.6,198.3,889.8,578.5);
// library properties:
lib.properties = {
	id: '935D372277ED9A4EA789BB1092136963',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1701161171706", id:"Image"},
		{src:"images/作業08B2B04_atlas_1.png?1701161171623", id:"作業08B2B04_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['935D372277ED9A4EA789BB1092136963'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;