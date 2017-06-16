var zon = true;
import ZimClass from '../index.js';
console.log(ZimClass);
window.createjs = ZimClass.createjs;
window.zim = ZimClass.zim;
// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"		sets canvas and stage to dimensions and scales to fit inside window size
// "outside"	sets canvas and stage to dimensions and scales to fit outside window size
// "full"		sets stage to window size with no scaling
// "tagID"		add canvas to HTML tag of ID - set to dimensions if provided - no scaling

var scaling = "fit"; // fit scales to fit the browser window while keeping the aspect ratio
var width = 1024; // can go higher...
var height = 768;
var color = "#acd241";
var frame = new zim.Frame(scaling, width, height, color); // see docs for more options and info
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;

	// put your code here (you can delete this code)

	var button = new zim.Button(140, 60, "ZIM");
	button.center(stage); // this adds to stage as well otherwise stage.addChild(button);
	button.on("click", function() { // on() is like addEventListener()
		zgo("http://zimjs.com/code/frame.html"); // or relative URL, target is available too
	});

	stage.update(); // update the stage to see any changes

}); // end of ready
