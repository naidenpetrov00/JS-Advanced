(function solve() {
    Array.prototype.last = () => {
        return this[this.length - 1];
    };

    Array.prototype.skip = (number) => {
        let result = [];

        for (let i = number; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.take = (number) => {
        let result = [];

        for (let i = 0; i < number; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.sum = () => {
        let sum = 0;

        for (let i = 0; i < this.length; i++) {
            if (isNaN(+this[i])) {
                throw Error('parametar is not a number');
            } else {
                console.log(this[i]);
                sum += +this[i];
            }
        }

        return sum;
    };

    Array.prototype.average = () => {
        return this.sum() / this.length;
    };
})();