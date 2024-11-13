'use strict';



const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEL=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

score0El.textContent=0;
score1El.textContent=0;
diceEL.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;

const switchPlayer=function(){
    
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer===0?1:0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

 btnRoll.addEventListener('click',function(){
    const dice=Math.trunc(Math.random()*6)+1;

    diceEL.classList.remove('hidden');
    diceEL.src=`dice-${dice}.png`;

    if(dice!=1){
        currentScore=currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer()
    }
 });


btnHold.addEventListener('click',()=>{
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector('.btn--roll').disabled = true;
document.querySelector('.btn--hold').disabled = true;
    }
    else{
        switchPlayer();
    }
})

const newGame=document.querySelector('.btn--new');
newGame.addEventListener('click',()=>{
    location.reload();
})