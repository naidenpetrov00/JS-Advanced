const getFibonator = function () {
    let sum = 0;
    let first = 0;
    let second = 1;

    return function () {
        sum = first + second;
        first = second;
        second = sum;

        return first;
    }
}

const fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());