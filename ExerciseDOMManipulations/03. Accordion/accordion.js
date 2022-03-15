function toggle() {
    const SELECTORS = {
        button: '.button',
        hiddenText: '#extra',
        optionMore: 'More',
        optionLess: 'Less',
        hideTextCommand: 'none',
        showTextCommand: 'block',
    }

    const button = document.querySelector(SELECTORS.button);
    const hiddenText = document.querySelector(SELECTORS.hiddenText);

    if (button.textContent == SELECTORS.optionMore) {
        button.textContent = SELECTORS.optionLess;
        hiddenText.style.display = SELECTORS.showTextCommand;
    }
    else if (button.textContent == SELECTORS.optionLess) {
        button.textContent = SELECTORS.optionMore;
        hiddenText.style.display = SELECTORS.hideTextCommand;
    }
}