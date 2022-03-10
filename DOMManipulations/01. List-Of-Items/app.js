// @ts-nocheck
function addItem() {
    const SELECTORS = {
        input: '#newItemText',
        resultList: '#items',
    }

    const getInput = () => document.querySelector(SELECTORS.input).value;

    const getResultList = () => document.querySelector(SELECTORS.resultList);

    const input = document.createElement('li');
    input.textContent = getInput();
    const result = getResultList();
    result.appendChild(input)
}

