var timer = 60;
var score = 0;
var randomnum = 0;

function makeBubble() {
    var clutter = "";

    for (i = 1; i <= 144; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   var timerclr =  setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer
        } else{ 
            clearInterval(timerclr)
            var scr = score;
            document.querySelector("#pbtm").innerHTML = `<div id="scoreDisplay">Final Score: <span id="finalScore">${scr}</span>`

        }
    }, 1000);
}

function getHit(){
    randomnum = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = randomnum;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent)
    if(clickednum === randomnum){
        increaseScore();
        makeBubble();
        getHit();
    }
    
})
document.querySelector("#startButton").addEventListener("click",function () {

    makeBubble();

    getHit();
    runTimer();
})

