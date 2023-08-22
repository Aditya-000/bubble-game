var timer = 60;
var score = 0;
var hitnum = 0;

function setNewValue(){
     hitnum = Math.floor(Math.random()*10);
    document.querySelector("#newnum").textContent=hitnum;
}

function setScore(){
   score += 10;
   document.querySelector("#score").textContent = score;
}

function makeBubble(){
    var clutter = "";

    for(let i=0; i<147; i++){
        var ran = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${ran}</div>`;
    }
    
    document.querySelector("#bottom-panel").innerHTML=clutter;
}

function runTimer(){
     var stopTimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(stopTimer);
            document.querySelector("#bottom-panel").innerHTML=`<h2>Game Over</h2>`
        }

     },1000)
}

function logic(){
     document.querySelector("#bottom-panel").addEventListener("click",function(details){
           var selectednum = Number(details.target.textContent);
           if(selectednum === hitnum){
              setScore();
              setNewValue();
              makeBubble();
           }
     })
}


setNewValue();
runTimer();
makeBubble();
logic();
