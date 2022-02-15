function maxNumberFinder(input) {
    const max = Math.max.apply(null, input);
    return max;
}

console.log(maxNumberFinder([10, 20, 5]));
console.log(maxNumberFinder([1, 44, 123, 33]));