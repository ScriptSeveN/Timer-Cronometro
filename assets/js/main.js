function clock() {
    const timer = document.querySelector('.relogio');
    let seconds = 0;
    let timerStop = null;

    // Formata os segundos no formato HH:MM:SS
    const formatTime = (sec) =>
        new Date(sec * 1000).toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });

    // Evento para manipular os botões
    document.addEventListener('click', ({ target }) => {
        if (target.classList.contains('iniciar') && !timerStop) {
            timerStop = setInterval(() => (timer.innerHTML = formatTime(++seconds)), 1000);
            timer.classList.remove('stopClock');
        } else if (target.classList.contains('pausar')) {
            clearInterval(timerStop);
            timer.classList.add('stopClock');
            timerStop = null;
        } else if (target.classList.contains('zerar')) {
            clearInterval(timerStop);
            timerStop = seconds = null;
            timer.innerHTML = formatTime(0);
            timer.classList.remove('stopClock');
        }
    });
}
clock();
