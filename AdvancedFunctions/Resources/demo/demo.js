function sum3(a, b, c) {
    return a + b + c;
}

function sum3curry(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const op = sum3curry(3)(5);
console.log(op);
console.log(sum3curry(9)(9)(9));