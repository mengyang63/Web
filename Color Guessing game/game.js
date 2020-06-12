var colors = generateColors(6);

function pickcolor() {
    var random =  Math.round(Math.random() * colors.length);
    return colors[random];
}

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;

var h1 = document.querySelector("h1");

for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("correct!");
            message.textContent = "Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            alert("Wrong!!");
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

function changeColor(color) {
    for (let i = 0;  i < squares.length ; i++) {
        squares[i].style.backgroundColor = color;
        
    } 
}

function generateColors(num) {
    var res = [];
    for (var i = 0; i < num; i++) {
        res.push(randomColor());
    }
    return res;
}

function randomColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return "rgb(" + r + ", " +  g+ ", " + b + ")";
}