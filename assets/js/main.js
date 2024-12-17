const startButton = document.querySelector('.iniciar');
const stopButton = document.querySelector('.pausar');
const clearButton = document.querySelector('.zerar');
const timer = document.querySelector('.relogio');
let seconds = 0;
let timerStop = null;

function getSecond(second) {
    let data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        second: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        timeZone: 'UTC'
    });
}

function startTimer() {
    if(timerStop === null) {
        timerStop = setInterval(()=>{
            let timerValue = getSecond(seconds);
            timer.innerHTML = `${timerValue}`;
            timer.classList.remove('stopClock');
            seconds++
        }, 1000);
    }  
}

function stopTimer() {
    clearInterval(timerStop);
    timer.classList.add('stopClock');
    timerStop = null
}

function clearTimer() {
    timer.innerHTML = getSecond(0);
    clearInterval(timerStop);
    timer.classList.remove('stopClock');
    seconds = 0;
    timerStop = null;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
clearButton.addEventListener('click', clearTimer);
