function addItem() {
    const SELECTORS = {
        textInput: '#newItemText',
        valueInput: '#newItemValue',
        dropDownMenu: '#menu',
        optionElement: 'option',
        empty: '',
    }

    const text = document.querySelector(SELECTORS.textInput);
    const value = document.querySelector(SELECTORS.valueInput);

    const menu = document.querySelector(SELECTORS.dropDownMenu);

    const option = document.createElement(SELECTORS.optionElement);
    option.textContent = text.value;
    option.value = value.value;
    menu.appendChild(option);

    text.value = SELECTORS.empty;
    value.value = SELECTORS.empty;
}