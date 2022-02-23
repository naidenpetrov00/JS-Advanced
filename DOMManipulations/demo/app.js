const createListItem = (function () {
    const listItemTemplate = document.createElement('li');
    listItemTemplate.className = 'list-item';

    const aTemplate = document.createElement('a');
    aTemplate.href = '#';
    listItemTemplate.appendChild(aTemplate);

    return (text) => {
        aTemplate.innerHTML = text;
        const actualListItem = listItemTemplate.cloneNode(true);
        document.querySelector('.list')
            .appendChild(actualListItem);
    };
}());

const addNewListItem = () => {
    const textElement = document.querySelector('#tb-text');
    const text = textElement.value;
    textElement.value = '';
    createListItem(text);
}

const deleteListItem = (ev) => {
    const listItemToDelete = ev.target.parentNode;
    document.querySelector('.list')
        .removeChild(listItemToDelete);
};

window.onload = () => {
    document.querySelector('#btn-add')
        .addEventListener('click', addNewListItem);

    document.querySelector('.list')
        .addEventListener('click', deleteListItem);
};