const SELECTORS = {
    email: '[name=email]',
    rows: '#customers tbody tr',
    emailCell: '.email-cell',
};

const getEmail = () => document.querySelector(SELECTORS.email).value;

const getRows = () => document.querySelector(SELECTORS.rows)

const getRowToDelete = (rows, email) =>
    [...rows].find(row =>
        email == row.querySelector(SELECTORS.emailCell).innerHTML);

const deleteRow = (row) => row.remove();

const clearEmail =
    () => document.querySelector(SELECTORS.email) = '';

const deleteByEmail = () => {
    const email = getEmail();
    const rows = getRows();
    const rowToDelete = getRowToDelete(rows, email);
    deleteRow(rowToDelete);
    clearEmail();
};