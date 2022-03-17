function lockedProfile() {
    const SELECTORS = {
        buttons: 'button',
        clickEvent: 'click',
    };

    const buttonElements = document.querySelectorAll(SELECTORS.buttons);

    for (const button of buttonElements) {
        button.addEventListener(SELECTORS.clickEvent, () => {

            const hidenFilesId = button.parentElement.querySelector('div').id;
            const hidenFilesElement = button.parentElement.querySelector(`#${hidenFilesId}`);
            hidenFilesElement.style.display = 'block';
        })
    }
}