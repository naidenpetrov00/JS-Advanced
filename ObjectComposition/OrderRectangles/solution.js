function orderRectangles(input) {
    let rects = [];

    for (const [width, height] of input) {
        const rect = rectangle(width, height)
        rects.push(rect);
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;
}

const rectangle = function (width, height) {
    const rect = {
        width,
        height,
        area: () => rect.width * rect.height,
        compareTo: function (otherRect) {
            const result = otherRect.area() - rect.area();

            return result || (otherRect.width - rect.width)
        }
    }
    return rect;
};


console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));