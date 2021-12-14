const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let x = undefined;
let y = undefined;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
}

drawCircle(50, 50);