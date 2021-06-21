'use strict';
const computerScore=document.getElementById('computer_score');

const userScore=document.getElementById('user_score');

let cScore = 0;
let pScore = 0;
 let resultmsg =" ";

const gameStartContainer = document.getElementById('game-start');

const gameResultContainer = document.querySelector('.game-result');

const hands = document.querySelector('.hands');

const btnGameStart = document.getElementById('btn-game-start');


const computerChoice = document.getElementById('computer_choice');
const userChoice = document.getElementById('user_choice');
const result = document.getElementById('result');
//functions



//Game start function



const gameStart = function(){
    computerScore.innerText = cScore;
    userScore.innerText = pScore;
    
    gameResultContainer.classList.remove('hidden');
    gameStartContainer.classList.add('hidden');
     
    hands.classList.remove('hidden');
    
};


const gameLogic = function (userSelected, computerSelected, resultmsg) {
    if(userSelected === computerSelected) {
        resultmsg = "Draw";
        updateDOM(userSelected, computerSelected , resultmsg);
        return;
    }
    if(userSelected==='rock'){
        if(computerSelected ==='paper') {
           cScore++;
           resultmsg = "You Lost";
           updateDOM(userSelected, computerSelected , resultmsg); 
           return;
        }else{
            
           
            pScore++;
            resultmsg = "You Won";
            updateDOM(userSelected, computerSelected, resultmsg);
            return;
        }
    }
    if(userSelected==='paper'){
        if(computerSelected ==='scissors') {
            cScore++;
            resultmsg = "You Lost";
           updateDOM(userSelected, computerSelected, resultmsg); 
            return;
        }else{
            pScore++;
            resultmsg = "You Won";
            updateDOM(userSelected, computerSelected, resultmsg);
            return;
        }
    }
    if(userSelected==='scissors'){
        if(computerSelected ==='rock') {
            cScore++;
            resultmsg = "You Lost";
           updateDOM(userSelected, computerSelected, resultmsg); 
           return;
        }else{
            pScore++;
            resultmsg = "You Won";
            updateDOM(userSelected, computerSelected, resultmsg);
            return;
        }
    }
}

//update dom

const updateDOM = function (userSelected, computerSelected, resultmsg) {
    computerScore.innerText = cScore;
    userScore.innerText = pScore;

    computerChoice.innerHTML = `Computer chose <strong>${computerSelected.toUpperCase()} </strong>`;
    userChoice.innerHTML = `You chose <strong>${userSelected.toUpperCase()} </strong>`;
    result.innerHTML = resultmsg;
}


const check = function (input) {
    let userSelected = input;
    const choices = ['rock', 'paper', 'scissors'];
    const num = Math.trunc(Math.random() * 3);

    const computerSelected = choices[num];

   //calling gameLogic ()

   gameLogic(userSelected, computerSelected, resultmsg);
};


//event listener

btnGameStart.addEventListener('click', gameStart);


//calling function
