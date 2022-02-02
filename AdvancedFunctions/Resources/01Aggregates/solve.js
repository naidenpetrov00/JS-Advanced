const input = [
    5,
    -3,
    20,
    7,
    0.5
];

function aggregate(arr) {
    console.log('Sum = ', reducer(arr, (a, b) => a + b, 0));
    console.log('Min = ', reducer(arr, (a, b) => a < b ? a : b));
    console.log('Max = ', reducer(arr, (a, b) => a > b ? a : b));
    console.log('Product = ', reducer(arr, (a, b) => a * b, 1));
    console.log('Join = ', reducer(arr, (a, b) => `${a}${b}`, ''));
}

function reducer(arr, operator, inital) {
    const arrCopy = arr.slice(0);
    let result = inital;

    if (result === undefined) {
        result = arrCopy.shift();
    }

    for (const element of arr) {
        result = operator(result, element);
    }

    return result
}

aggregate(input)