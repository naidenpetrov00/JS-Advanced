function argumentInfo() {
    const items = [...arguments];

    let info = {};
    let typeCount = {};

    items.map((element) => {
        const type = typeof element;
        if (info.hasOwnProperty(type)) {
            typeCount[type]++;
        }
        else {
            typeCount[type] = 1;
            info[type] = element;
        }
    })

    console.log(info);
    console.log(typeCount);

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })