class MinStack {
    constructor() {
        this.values = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.values.push(val)

        if(this.min.length) {
            this.min.push(Math.min(val, this.min.at(-1)))
        } else {
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.values.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.values.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min.at(-1)
    }
}
