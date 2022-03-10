// @ts-nocheck
function addItem() {
    const SELECTORS = {
        input: '#newItemText',
        resultList: '#items',
        child: 'li',
    }

    const getInput = () => document.querySelector(SELECTORS.input).value;

    const getResultList = () => document.querySelector(SELECTORS.resultList);

    const createChild = () => {
        const input = document.createElement(SELECTORS.child);
        input.textContent = getInput();

        return input;
    }

    const resultAdd = () => {
        const result = getResultList();
        const child = createChild();
        result.appendChild(child);
    }

    resultAdd();
}

