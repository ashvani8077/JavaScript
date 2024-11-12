'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number: '

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

// document.querySelector('.guess').value=23;


                    // Implementation of Game Logic
let generateNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;



document.querySelector('.check').addEventListener('click',()=>{
    const guessNumber=Number(document.querySelector('.guess').value);
    console.log(guessNumber)

    if(!guessNumber){
        document.querySelector('.message').textContent="❌ No Number "
    }



    else if(guessNumber===generateNumber){
        document.querySelector('.message').textContent="😎 Correct Number";
        document.querySelector('.number').textContent=generateNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.check').disabled = true;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }


    else if(guessNumber>generateNumber){


        if(score>0){
            document.querySelector('.message').textContent="Too High!📈";
            score--;
            document.querySelector('.score').textContent=score;
        }


        else{
            document.querySelector('.message').textContent="You lost the game😐";
            document.querySelector('body').style.backgroundColor='red';
        }
    }



    else if(guessNumber<generateNumber){


        if(score>0){
            document.querySelector('.message').textContent="Too Low!📉";
            score--;
            document.querySelector('.score').textContent=score;
        }


        else{
            document.querySelector('.message').textContent="You lost the game😐";
            document.querySelector('body').style.backgroundColor='red';
        }
    }
    
});


document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    generateNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start Guessing...";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})