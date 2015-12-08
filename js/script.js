var rows = 16; //Initial number of rows
var cols = 16; //Initial number of columns
var boxWidth = 100/cols + "%"; //Makes width of boxes responsive
var conWidth = $('.container').width(); //Gets width of row element
var boxHeight = conWidth*(1/cols); //Sets box height equal to initial box width
var gridColor = "white"; //Sets the initial background color
var paintColor = "black"; //Sets the initial paint color
var safeColors = ['00','33','66','99','cc','ff'];
var paintValue = 2; //Sets the method of painting (hover/click)

function createGrid() { //creates a grid based off of set row/cols
	var row = rows;
	var col = cols;
	for (var i = 0; i < row; i += 1) {
		$('.container').append("<div class='row'></div>")
	}
	for (var j = 0; j < col; j += 1) {
		$('.row').append("<div class='box'></div>")
	}
}

function setRows() { //Allows for the user to change the number of rows
	$("button#rows").click(function() {
		rows = prompt("How many rows would you like?");
	});
}

function setBox() { //Sets the initial box size
	$("div.box").width(boxWidth).height(boxHeight);
}

function resetInk() { //Resets paint color to black
	$("button#black").click(function() {
		paintColor = "black";
	});
}

var rand = function() { //Generates a random number
    return Math.floor(Math.random()*6);
}

function randomColor() { //Uses random number to generate rgb values
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
}

function randCol() { //Sets paint color to random value
	$("button#rainbow").click(function() {
		paintColor = randomColor()
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

function gridReset() { //Resets grid background
	$("button#reset").click(function() { 
		$("div.box").css("background-color",gridColor)
	});
}

$(document).ready(function() { 
	createGrid();
	setBox();
	randCol();
	resetInk();
	hoverPaint();
	clickMode();
	hoverMode();
	gridReset();
});