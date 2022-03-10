function stopwatch() {
    const SELECTORS = {
        time: '#time',
        startButton: '#startBtn',
        stopButton: '#stopBtn',
        eventType: 'click',
        canseledStopwatch: '00:00',
        timerSeparator: ':',
    }

    const getTimer = () => document.querySelector(SELECTORS.time);

    const getStartButton = () => document.querySelector(SELECTORS.startButton);

    const getStopButton = () => document.querySelector(SELECTORS.stopButton);

    const startButton = getStartButton();
    const stopButton = getStopButton();
    let timer = getTimer();
    startButton.addEventListener(SELECTORS.eventType, timerStarter);
    stopButton.addEventListener(SELECTORS.eventType, timerStoper)

    let minutes = 0;
    let seconds = 0;
    let cancel;

    function incremenetSeconds() {
        seconds += 1;
        timerDisplayer();
        console.log(seconds);
    }

    function timerStarter() {
        startButton.disabled = true;
        stopButton.disabled = false;

        cancel = setInterval(incremenetSeconds, 1000);
    }

    function timerStoper() {
        startButton.disabled = false;
        stopButton.disabled = true;

        seconds = 0;
        minutes = 0;
        timer.textContent = SELECTORS.canseledStopwatch;
        clearInterval(cancel);
    }

    function timerDisplayer(params) {
        if (seconds < 60) {
            timer.textContent = minutes + SELECTORS.timerSeparator + seconds;
        }
        else {
            seconds = 0;
            minutes++;
            timer.textContent = minutes + SELECTORS.timerSeparator + seconds;
        }
    }
}