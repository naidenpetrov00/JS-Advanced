function listProcessor(input) {
    const list = (function () {
        let arr = [];

        return {
            add: (element) => arr.push(element),
            remove: (element) => arr = arr.filter(e => e !== element),
            print: () => console.log(arr.join(','))
        };
    })();
    
    input.forEach(element => {
        const command = element.split(' ').filter(e => e !== '');
        list[command[0]](command[1]);
    });
}

listProcessor(
    ['add hello',
        'add again',
        'remove hello',
        'add again',
        'print']
);
listProcessor(
    ['add pesho',
        'add george',
        'add peter',
        'remove peter',
        'print']
);