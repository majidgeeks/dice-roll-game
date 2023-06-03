



var winTimePara = document.getElementById("win-time");
var attemptPara = document.getElementById("attempt");
var averagePara = document.getElementById("win-average");

var diceResult = document.getElementById("diceResult");
var attempt = 0;
var winningScore = 0;

function diceroll(playerPick){
    // var numAll = +e.innerHTML;
    var randomResult = Math.ceil(Math.random()*6);
    // numAll = randomResult;
    // diceResult.innerHTML = numAll;

   if(randomResult === 1){
    diceResult.src ="./images/dice 1.webp" 
   }
   else if(randomResult === 2){
    diceResult.src = "./images/dice 2.webp"
}

else if(randomResult === 3){
    diceResult.src = "./images/dice 3.jfif"
}
else if(randomResult === 4){
    diceResult.src = "./images/dice 4.webp"
}

else if(randomResult === 5){
    diceResult.src = "./images/dice 5.webp"
}
else if(randomResult === 6){
    diceResult.src = "./images/dice 6.webp"
}

attempt++;
if(playerPick === randomResult) {
     winningScore++;

     
     
    }
    else{
        // console.log("you lose ");
        
        
    }
    winTimePara.innerHTML =  winningScore;
    attemptPara.innerHTML = attempt;
    averagePara.innerHTML = (winningScore * 100) / attempt;

};





