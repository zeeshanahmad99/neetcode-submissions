class MinStack {
    constructor() {
        this.stack = [];
        this.sorted = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        const min = Math.min(val, !this.sorted.length ? val : this.sorted[this.sorted.length - 1]);

        this.sorted.push(min)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.sorted.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.sorted[this.sorted.length - 1];
    }
}
