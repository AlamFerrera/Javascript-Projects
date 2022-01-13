const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    const startGame = () => {
        const btnJugar = document.getElementById("btnJugar");
        const introScreen = document.getElementById("intro");
        const match = document.getElementById("match");

        btnJugar.addEventListener("click", () => {
            introScreen.classList.toggle("fadeOut");
            match.classList.toggle("fadeIn");    
            playMatch();
        });
    };

    //Match
    const playMatch = () => {
        const options = document.querySelectorAll(".option");
        const playerHand = document.getElementById("playerHand");
        const computerHand = document.getElementById("computerHand");

        //Calcular opcion
        const computerOptions = ['rock','papel', 'tijera'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                //Deshabilita las opciones cuando la animacion se ejecuta
                options.forEach((opt) => {
                    opt.disabled = true;
                });

                //set default img
                playerHand.src = `assets/rock.png`;
                computerHand.src = `assets/rock.png`;
                
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                setTimeout(() => {
                    //Update Img
                    playerHand.src = `assets/${this.value}.png`;
                    computerHand.src = `assets/${computerChoice}.png`;
                    
                    //Compare hands
                    compareHands(this.value, computerChoice);
                    
                    playerHand.style.animation = "";
                    computerHand.style.animation = "";

                    //Habilita las opciones cuando la animacion termina
                    options.forEach((opt) => {
                        opt.disabled = false;
                    });
                }, 2200);
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.getElementById("winner");

        
        if(playerChoice === computerChoice){
            winner.innerHTML = "Empate";
        }
        //Check for Rock
        else if(playerChoice === "rock"){
            if(computerChoice === "tijera"){
                winner.innerText = "Jugador Gana";
                pScore++;
            }
            else if(computerChoice === "papel"){
                winner.innerText = "Computadora Gana";
                cScore++;
            }
        }
        //Check for Papel
        else if(playerChoice === "papel"){
            if(computerChoice === "tijera"){
                winner.innerText = "Computadora Gana";
                cScore++;
            }
            else if(computerChoice === "rock"){
                winner.innerText = "Jugador Gana";
                pScore++;
            }
        }
        //Check for tijera
        else if(playerChoice === "tijera"){
            if(computerChoice === "rock"){
                winner.innerText = "Computadora Gana";
                cScore++;
            }
            else if(computerChoice === "papel"){
                winner.innerText = "Jugador Gana";
                pScore++;
            }
        }
        updateScore(pScore, cScore);
    };

    const updateScore = (p_score, c_score) => {
        const playerScore = document.getElementById("player-score");
        const computerScore = document.getElementById("computer-score");

        playerScore.innerText = p_score;
        computerScore.innerText = c_score;
    };

    //funcion llamada en la funcion principal
    startGame();
}

//funcion que inicia el juego
game(); 