var rows = 16; //Initial number of rows
var cols = 16; //Initial number of columns
var boxWidth; //Div.box width variable
var conWidth; //Width of the container element
var boxHeight; //Div.box height variable
var gridColor = "white"; //Sets the initial background color
var paintColor = "black"; //Sets the initial paint color

function createGrid() { //creates a grid based off of set row/cols
	var row = rows;
	var col = cols;
	for (var i = 0; i < row; i += 1) {
		$('.container').append("<div class='row'></div>")
	}
	for (var j = 0; j < col; j += 1) {
		$('.row').append("<div class='box'></div>")
	}
	$("div.box").css("background-color",gridColor);
}

function deleteGrid() { //Removes all div.row/div.box elements
	$('.container').empty();
}

function setBox() { //Sets the initial box size
	boxWidth = 100/cols + "%";
	conWidth = $('.container').width();
	boxHeight = conWidth*(1/cols);
	$("div.box").width(boxWidth).height(boxHeight);
}

function resize() { //Allows the user to change the sketchpad dimensions
	$("button#resize").click(function() {
		rows = parseInt(prompt("How many rows would you like? (Must use an integer)"));
		cols = parseInt(prompt("How many columns would you like? (Must use an integer)"));
		deleteGrid();
		createGrid();
		setBox();
		hoverPaint();
	});
}

function paintCol() { //Changes the paint color
	$("button#paint").click(function() {
		paintColor = prompt("Set a color value. (Example: #ff0000 or red)");
	});
}

function bkgrCol() { //Chanes the background color
	$("button#bkgr").click(function() {
		gridColor = prompt("Set a color value. (Example: #ff0000 or red)");
		$("div.box").css("background-color",gridColor);
	});
}

function hoverPaint() { //Paints by hovering
	$("div.box").hover(function() { 
		$(this).css("background-color",paintColor);
	});
}

function clickPaint() { //Paints by clicking
	$("div.box").click(function() { 
		$(this).css("background-color",paintColor);
	});
}

function clickMode() { //Switches to click mode
	$("button#click").click(function() {
		$("div.box").unbind('mouseenter mouseleave');
		clickPaint();
	});
}

function hoverMode() { //Switches to hover mode
	$("button#hover").click(function() {
		$("div.box").unbind('click');
		hoverPaint();
	});
}

function gridClear() { //Clears painted boxes
	$("button#clear").click(function() {
		deleteGrid();
		createGrid();
		setBox();
		hoverPaint();
	});
}

function gridReset() { //Resets all values to default
	$("button#reset").click(function() {
		rows = 16;
		col = 16;
		gridColor = "white";
		paintColor = "black";
		deleteGrid();
		createGrid();
		setBox();
		hoverPaint();
	});
}

$(document).ready(function() { //Calls all the button functions/main functionality
	createGrid();
	setBox();
	resize();
	paintCol();
	bkgrCol();
	hoverPaint();
	clickMode();
	hoverMode();
	gridClear();
	gridReset();
});