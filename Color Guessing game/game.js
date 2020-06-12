var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var reset = document.querySelector("#reset");

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var NumofColor = 3;

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    NumofColor = 3;
    colors = generateColors(NumofColor);
    pickedColor = pickcolor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    NumofColor = 6;
    colors = generateColors(NumofColor);
    pickedColor = pickcolor();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

reset.addEventListener("click", function () {
    colors = generateColors(NumofColor);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    reset.textContent = "New Colors";
})

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
            reset.textContent = "Play Again?";
        } else {
            alert("Wrong!!");
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

//change all the squares to the same color
function changeColor(color) {
    for (let i = 0;  i < squares.length ; i++) {
        squares[i].style.backgroundColor = color;        
    } 
}

// generate colors based on the int num
function generateColors(num) {
    var res = [];
    for (var i = 0; i < num; i++) {
        res.push(randomColor());
    }
    return res;
}

//generate a random color
function randomColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return "rgb(" + r + ", " +  g+ ", " + b + ")";
}

// Pick a color for the result
function pickcolor() {
    var random =  Math.round(Math.random() * colors.length);
    return colors[random];
}