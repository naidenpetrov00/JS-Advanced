const sum = require('../SumOfNumbers/index');
const expect = require('chai').expect;

describe('Test', function () {
    it('Should sum two numbers', function () {
        expect(sum([1,2,3])).to.be.equal(6);
    });
});