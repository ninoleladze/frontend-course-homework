let numSquares = 6;
let colors = [];
let pickedColor;
let squares = [];

let colorDisplay = document.getElementById("colorDisplay");
let container = document.getElementById("container");
let newColorsButton = document.getElementById("newColors");

// Generate random colors and assign them to squares
function init() {
    setupSquares();
    reset();
}

// Create squares dynamically
function setupSquares() {
    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        squares.push(square);
        square.addEventListener("click", () => {
            let clickedColor = square.style.backgroundColor;
            if (clickedColor === pickedColor) {
                alert("Correct!");
                changeColors(clickedColor);
            } else {
                square.style.backgroundColor = "#232323"; // Hide incorrect square
            }
        });
    }
}

// Reset game with new colors
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    squares.forEach((square, i) => {
        square.style.backgroundColor = colors[i];
        square.style.display = "block";
    });
}

newColorsButton.addEventListener("click", reset);

// Helper functions
function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

init();
