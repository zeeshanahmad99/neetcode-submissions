class Solution {
    compute(left, right, operator) {
        if(operator === '+') {
            return left + right
        } else if(operator === '-') {
            return left - right
        } else if(operator === '*') {
            return left * right
        } else if(operator === '/') {
            return Math.trunc(left / right)
        }
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(let i=0; i<tokens.length; i++) {
            const char = tokens[i]

            if(Number.isNaN(Number(char))) {
                const right = stack.pop()
                const left = stack.pop()
                const result = this.compute(left, right, char)
                stack.push(result)
            } else {
                stack.push(Number(char))
            }
        }

        return stack[0]
    }
}
