import {SNAKE_SPEED, update as updatesnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById("game-board");

function main(currentTime){
    if(gameOver){
        if(confirm("Game Over")){
            window.location.reload();
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return; 
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updatesnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerText = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



