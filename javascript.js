//Create the canvas
var canvas = new fabric.Canvas("c");

//Function to create a circle
function circleMaker() {
	//Draw the circle
	var circle = new fabric.Circle({
		radius: 75,
		originX: "center",
		originY: "center"
	});

	//Add a gradient to the circle
	circle.setGradient("fill", {
		x1: 0,
		y1: 0,
		x2: 0,
		y2: circle.height,
		colorStops: {
			0: "#00a0dc",
			1: "#005473"
		}
	});

	//Add text to the circle
	var textbox = new fabric.Textbox("Change Me!", {
		originX: "center",
		originY: "center",
		fontSize: 20,
		fill: "white",
		textAlign: "center"
	});

	//Create a group for the circle and text
	var circgroup = new fabric.Group([circle, textbox], {
		left: 100,
		top: 100
	});

	//Add the grouped object to the canvas
	canvas.add(circgroup);
}

//Function to create a rectangle
function squareMaker(imgElement) {
	//Draw the rectangle
	var rect = new fabric.Rect({
		fill: "#031733",
		width: 248,
		height: 100
	});

	//Add text to the rectangle
	var textbox2 = new fabric.Textbox("Change it again!", {
		top: 45,
		left: 10,
		width: 140,
		fontSize: 20,
		fill: "white",
		textAlign: "center"
	});

	//Add image to the rectangle
	fabric.Image.fromURL("http://fabricjs.com/assets/pug_small.jpg", function(
		oImg
	) {
		oImg.crossOrigin = 'anonymous';
		oImg.set({
			top: 0.5,
			left: 176,
			scaleX: 0.2,
			scaleY: 0.184,
		});

		//Create a group for the rectangle, text and image
		var rectagroup = new fabric.Group([rect, textbox2, oImg], {
			top: 100,
			left: 100
		});

		//Add the grouped object to the canvas
		canvas.add(rectagroup);
	});
}

function arrowMaker() {
	//Create a rectangle
	var rectangle = new fabric.Rect({
		left: 0,
		top: 112,
		fill: "#add8e6",
		width: 100,
		height: 24
	});

	// create a triangle
	var triangle = new fabric.Triangle({
		width: 50,
		height: 100,
		fill: "#add8e6",
		left: 200,
		top: 100,
		angle: 90
	});

	var arrowgroup = new fabric.Group([rectangle, triangle], {
		top: 100,
		left: 100,
		scale: 0.5
	});

	canvas.add(arrowgroup);
}

//Function to delete the selected object
function deleteFunction() {
	//Remove the selected object from the canvas
	canvas.remove(canvas.getActiveObject());
}

//Function to edit the text on an object
function submitFunction() {
	//Put the text from the input box in a variable
	var x = document.getElementById("circletext").value;

	//Add the currently selected object to a variable
	var test = canvas.getActiveObject();

	//Take the second item in the grouped object's item array, the apply the input text to the object's text attribute
	test.item(1).set({
		text: x
	});

	//Re-render all objects in the canvas to update the text change
	canvas.requestRenderAll();
}

function sendBack() {
	var selection = canvas.getActiveObject();

	canvas.sendBackwards(selection);
}

function bringForward() {
	var selection = canvas.getActiveObject();

	canvas.bringForward(selection);
}

function clearFunction() {
	canvas.clear();
}

function lockFunction() {
	canvas.forEachObject(function(object) {
		object.selectable = false;
	});
}

function unlockFunction() {
	canvas.forEachObject(function(object) {
		object.selectable = true;
	});
}

function canvasExport() {
	console.log("Exporting...");
	var image = new Image();
	image.crossOrigin = 'anonymous';
	console.log(image);
	image.src = canvas.toDataURL("png");
	var w = window.open("");
	w.document.write(image.outerHTML);
}
