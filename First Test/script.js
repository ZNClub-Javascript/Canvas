// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 50, 0, 2*Math.PI);
context.closePath();
context.fill();

//border
context.lineWidth =1 ;
context.stroke();

//inner colours to differentiate from yellow
context.fillStyle = "red";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, Canvas!"
context.font = "30px Garamond";
context.fillText("ZNevzz",55,175);

/*


var tx=95;
var ty=35;

var lx=45;
var ly=85;

var bx=95;
var by=135;

var rx=145;
var ry=85;



//right side
context.beginPath();
context.arc(145, 85, 3, 0, 2*Math.PI);
context.closePath();
context.fill();
context.fillText("h(0)",145+5,85);

//top side
context.beginPath();
context.arc(95, 135-2*50, 3, 0, 2*Math.PI);
context.closePath();
context.fill();
context.fillText("h(1)",95,);

//left side
context.beginPath();
context.arc(95, 135, 3, 0, 2*Math.PI);
context.closePath();
context.fill();
context.fillText("h(2)",145+5,85);

//bottom side
context.beginPath();
context.arc(145, 85, 3, 0, 2*Math.PI);
context.closePath();
context.fill();
context.fillText("h(3)",145+5,85);

*/