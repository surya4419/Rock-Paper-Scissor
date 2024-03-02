let userScore=0;
let comoScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx =Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
   
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comoScore++;
        compScorePara.innerText=comoScore;
        msg.innerText=`You lose , ${ compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
 
 //generate computer choice->modular
 const compChoice=genCompChoice();
 if(userChoice===compChoice){
    //draw game
    drawGame();
    msg.innerText="Draw, Try again";
    msg.style.backgroundColor="#081b31";
 }else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors"?false:true;
    }else{
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
       playGame(userChoice);
    });
});