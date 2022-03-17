function attachEventsListeners() {
    const SELECTORS = {
        buttons: '[type=button]',
        inputs: '[type=text]',
    };

    const inputElements = document.querySelectorAll(SELECTORS.inputs)
    const buttonElements = document.querySelectorAll(SELECTORS.buttons);

    const inputs = {
        daysInput: inputElements[0],
        minutesInput: inputElements[1],
        hoursInput: inputElements[2],
        secondsInput: inputElements[3],
    }

    console.log(inputs);

    for (const button of buttonElements) {
        button.addEventListener('click', () => {
            converter(button.id);
        });
    }

    function converter(id) {
        if (id === 'daysBtn') {
            
        } else if (id === 'hoursBtn') {

        } else if (id === 'minutesBtn') {

        } else if (id === 'secondsBtn') {

        }
    }
}