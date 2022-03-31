function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return Number(arr);
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length) {
        end = arr.length;
    }
    if (arr.length === 0) {
        return 0;
    }

    const newArr = arr.slice(start, end);

    const sum = newArr.reduce((a, b) => {
        return +a + +b;
    })

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));