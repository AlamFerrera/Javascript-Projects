const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
const sizeLabel = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 5;
sizeLabel.innerText = size;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = "";

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", () => {
    color = colorEl.value;
});

increase.addEventListener("click", ()=> {
    size += 5;
    
    if(size >= 50){
        size = 50;
    }
    sizeLabel.innerText = size;
});

decrease.addEventListener("click", ()=> {
    size -= 5;
    
    if(size <= 5){
        size = 5;
    }
    sizeLabel.innerText = size;
});

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

    drawCircle(x,y);
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
});

function drawLine(x1,y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


