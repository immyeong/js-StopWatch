const appendTens =document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');

let tens = 0;
let seconds = 0;
let interval;

startBtn.addEventListener('click' , function(){
    interval = setInterval(startTime, 10);
})

stopBtn.addEventListener('click', function(){
    clearInterval(interval);
});

resetBtn.addEventListener('click', function(){
    clearInterval(interval);
    tens=0;
    seconds=0;
    appendTens.innerText = 0;
    appendSeconds.innerText = 0;
});

function startTime(){
    tens++;

    if(tens > 99){
        seconds++;
        appendSeconds.innerText = seconds;
        tens = 0;
        appendTens.innerText = tens;
    }else{
        tens++;
        appendTens.innerText = tens;
    }
}