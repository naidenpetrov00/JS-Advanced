const currencyFormatter = require('./formatter')

function getDollarFormatter(formater) {
    return function (value) {
        return formater(',', '$', true, value);
    }
}

function getEuroFormatter(formater) {
    return function (value) {
        return formater(',', 'euro', true, value);
    }
}

const dollarFormater = getDollarFormatter(currencyFormatter);
const euroFormater = getEuroFormatter(currencyFormatter);

const string = currencyFormatter(',', 'лв', false, 1.60);

console.log(dollarFormater(100));
console.log(euroFormater(5));