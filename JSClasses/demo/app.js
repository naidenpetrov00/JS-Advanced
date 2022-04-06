class Test {
    insideFunction() {
        console.log('inside im here');
    }
}

const test = new Test();
const test2 = new Test();

test.insideFunction();

Test.prototype.outsideFunction = function () {
    console.log('outside im here');
}

test.outsideFunction();
test2.outsideFunction();