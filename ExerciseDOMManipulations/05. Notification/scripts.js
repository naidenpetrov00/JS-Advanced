function notify(message) {
    const SELECTORS = {
        notification: '#notification',
    };
    const STYLE = {
        hideDisplay: 'none',
        showDisplay: 'block',
        timeOut: 2000,
    }

    const notificationElement = document.querySelector(SELECTORS.notification);
    notificationElement.textContent = message;
    notificationElement.style.display = STYLE.showDisplay;

    setTimeout(() => { notificationElement.style.display = STYLE.hideDisplay; }, STYLE.timeOut);
}