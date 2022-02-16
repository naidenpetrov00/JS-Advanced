function sortArray(numbers, orderKey) {
    const ascendingKey = 'asc';
    const descendingKey = 'desc';

    if (orderKey === ascendingKey) {
        return numbers.sort((a, b) => {
            return a - b;
        });
    }
    else if (orderKey === descendingKey) {
        return numbers.sort((a, b) => {
            return b - a;
        });
    }
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');