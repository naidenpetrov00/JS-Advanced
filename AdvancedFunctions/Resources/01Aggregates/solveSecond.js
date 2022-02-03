const input = [
    5,
    -3,
    20,
    7,
    0.5
];

function aggregate(arr) {
    console.log('Sum = ', arr.reduce((a, b) => a + b, 0));
    console.log('Min = ', arr.reduce((a, b) => a < b ? a : b, Number.MAX_SAFE_INTEGER));
    console.log('Max = ', arr.reduce((a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER));
    console.log('Product = ', arr.reduce((a, b) => a * b, 1));
    console.log('Join = ', arr.reduce((a, b) => `${a}${b}`, ''));
}

aggregate(input)