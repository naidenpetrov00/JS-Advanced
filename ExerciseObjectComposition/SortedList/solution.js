let sortedList = (function (input) {
    let list = [];

    function sorter() {
        list = list.sort((a, b) => a - b);
    }

    function add(element) {
        list.push(element);
        sorter();
    };

    function remove(index) {
        list.splice(index, 1);
    }

    function get(index) {
        return list[index];
    }

    function size() {
        return list.length;
    }

    function toString() {
        return list.toString();
    }
    return { add, remove, get, size, toString };
})();

sortedList.add(3);
sortedList.add(2);
sortedList.add(4);
console.log(sortedList.toString());
sortedList.remove(0);
console.log(sortedList.get(0));
console.log(sortedList.toString());
console.log(sortedList.size());