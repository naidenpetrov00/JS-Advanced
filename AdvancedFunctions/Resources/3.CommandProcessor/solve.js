function getManipulator() {
    let string = ''

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.substr(n);
    }

    function removeEnd(n) {
        string = string.substring(0, string.length - n)
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
};

const muManip = getManipulator();

muManip.append('hello');
muManip.print();
muManip.append('again');
muManip.print();

const secondManip = getManipulator();

secondManip.append('Softuni');
secondManip.removeEnd(4);
secondManip.print();