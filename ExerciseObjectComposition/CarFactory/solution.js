const storage = (function () {
    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }
    const carriage = {
        hatchback: { type: 'hatchback' },
        coupe: { type: 'coupe' },
    }

    return { engines, carriage };
})();

function carAssembler(order) {
    let car = {
        model: order.model,
        carriage: {},
    };

    const closest = [storage.engines.smallEngine.power,
    storage.engines.normalEngine.power,
    storage.engines.monsterEngine.power].reduce((a, b) => {
        return b - order.power < a - order.power ? b : a;
    });

    switch (closest) {
        case storage.engines.smallEngine.power:
            car.engine = storage.engines.smallEngine;
            break;
        case storage.engines.normalEngine.power:
            car.engine = storage.engines.normalEngine;
            break;
        case storage.engines.monsterEngine.power:
            car.engine = storage.engines.monsterEngine;
            break;
        default:
            break;
    }

    switch (order.carriage) {
        case storage.carriage.hatchback.type:
            car.carriage.type = storage.carriage.hatchback.type;
            break;
        case storage.carriage.coupe.type:
            car.carriage.type = storage.carriage.coupe.type;
            break;
        default:
            break;
    }
    car.carriage.color = order.color;

    if (order.wheelsize % 2 === 0) {
        order.wheelsize--;
    }

    car.wheelsize = [order.wheelsize, order.wheelsize, order.wheelsize, order.wheelsize];

    return car;
}

console.log(carAssembler(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
console.log(carAssembler(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));