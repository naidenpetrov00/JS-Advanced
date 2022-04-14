const inputs = {
    Hello: 'Hello',
};

const expect = require('chai').expect;
const StringBuilder = require('../solution');

describe('String Builder', function () {
    let emtyStringBuilder = new StringBuilder();
    let stringBuilder = new StringBuilder(inputs.Hello);

    beforeEach(function () {
    });

    it('Can be instantiated with a passed in string argument or without anything', function () {
        expect(stringBuilder).to.be.instanceOf(StringBuilder);
        expect(emtyStringBuilder).to.be.instanceOf(StringBuilder);
    })

    it('append func should convert and add to the end of the storage', function () {
        stringBuilder.append(inputs.Hello);
        expect(stringBuilder._stringArray).to.have.length.above(0);
    })

    describe('prepend', function () {
        it('should convert string to array', function () {
            stringBuilder.prepend(inputs.Hello);

            expect(stringBuilder._stringArray).to.be.
        })
    })
});