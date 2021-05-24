class Stack {

    static fromIterable(iterable) {
        if (!typeof iterable [Symbol.iterator] === 'function') throw new Error("iterable is not iterable");

        const newStack = new Stack();
        newStack.data = [...iterable];
        
        return newStack;
    }

    constructor(maxSize) {
        if (!isValidNumber) throw new Error("is not number");
        this.data = [];
        this.top = -1;
        this.maxSise = maxSize;
        this.maxSise !== undefined ? this.maxSise = maxSize : this.maxSise = 10;
    }

    push(element) {
        if (this.top >= this.maxSise - 1) throw new Error('stack overflow');

        if (element === undefined) {
            this.data[this.data.length] = undefined;
        }else {
            this.data[this.data.length] = element;
            this.top += 1;
            return this.top;
        } 
                    
    }

    pop() {
        if (this.data.length <= 0) throw new Error("stack is empty");
        let removeElement = this.data[this.top];
        this.data.length = this.data.length - 1;
        this.top--;
        return removeElement;
    }

    peek() {
        if (this.data.length <= 0) return null;
       return this.data[this.top];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    toArray() {
        return [...this.data];
    }



}

function isValidNumber(number) {
    return typeof number === 'number' && !isNaN(number) && isFinite(number);
}


module.exports = { Stack };
