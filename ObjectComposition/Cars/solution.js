const cars = (function () {
    let cars = {};

    function create(name) {
        cars[name] = {};
    }
    function createInherit(name, parentName) {
        cars[name] = Object.create(cars[parentName]);
    }
    function set(name, propKey, propValue) {
        cars[name][propKey] = propValue;
    }
    function print(car) {
        console.log(cars[car]);
        const parentProp = Object.getPrototypeOf(cars[car]);
        const isEmpty = Object.keys(parentProp).length === 0;
        if (!isEmpty) {
            console.log(parentProp);
        }

    }

    return { create, print, createInherit, set };
})();

cars.create('c1');
cars.createInherit('c2', 'c1');
cars.set('c1', 'color', 'red');
cars.set('c2', 'model', 'new');
cars.print('c1');
cars.print('c2');
['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
