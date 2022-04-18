class Stringer {
    constructor(innerString, innerLength) {
        this._initialInnerString = innerString;
        this._innerString = innerString;
        this._innerLength = +innerLength;
    }

    get InitialInnerString() {
        return this._initialInnerString;
    }

    get InnerString() {
        return this._innerString;
    }

    get InnerLength() {
        return this._innerLength
    }

    set InnerLength(length) {
        const result = this.InnerLength + length;

        if (result < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = result;
        }
    }

    increase(length) {
        this.InnerLength(length);
    }

    decrease(length) {
        this.InnerLength(-Math.abs(length));
    }

    toString(){
        if()
    }
}