class Solution {
    evaluate(left, right, operation) {
        if(operation === '+') {
            return left + right
        } else if(operation === '-') {
            return left - right
        } else if (operation === '*') {
            return left * right
        } else {
            return Math.trunc(left / right)
        }
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const nums = []

        for(let t of tokens) {
            const isNumber = !Number.isNaN(Number(t))

            if(isNumber) {
                nums.push(Number(t))
            } else {
                const right = nums.pop()
                const left = nums.pop()

                const result = this.evaluate(left, right, t)

                nums.push(result)
            }
        }

        return nums[0]
    }
}
10,
12
-132
-22
-220
-203
