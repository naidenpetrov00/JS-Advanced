const input = [
    5,
    -3,
    20,
    7,
    0.5
];

function aggregate(arr) {
    console.log('Sum = ', reducer(arr, () => { }, 0));
    // console.log('Min = ', reducer(arr, () => { }));
    // console.log('Max = ', reducer(arr, () => { }));
    // console.log('Product = ', reducer(arr, () => { }));
    // console.log('Join = ', reducer(arr, () => { }));
}

function reducer(arr, operator, inital) {
    let result = inital;

    for (const element of arr) {
        result = operator(result, element);
    }

    return result
}

aggregate(input)