class MyQueue {
    constructor() {
        this.primary = []
        this.secondary = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.primary.push(x)
    }

    #move() {
        if(this.secondary.length) return

        while(this.primary.length) {
            this.secondary.push(this.primary.pop())
        }
    }

    /**
     * @return {number}
     */
    pop() {
        this.#move()

        return this.secondary.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        this.#move()

        return this.secondary[this.secondary.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        const total = this.primary.length + this.secondary.length

        return total === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
