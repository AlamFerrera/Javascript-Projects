import {SNAKE_SPEED, update as updatesnake, draw as drawSnake} from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return; 
    lastRenderTime = currentTime;

    update();
    draw();
}

//window.requestAnimationFrame(main);

function update(){
    updatesnake();
}

function draw(){
    gameBoard.innerText = "";
    drawSnake(gameBoard);
}
main();



