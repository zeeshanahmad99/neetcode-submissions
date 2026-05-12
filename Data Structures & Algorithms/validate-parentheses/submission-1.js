class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const bracketPair = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        for(let bracket of s) {
            const lastBracket = stack.at(-1)

            if(stack.length && lastBracket === bracketPair[bracket]) {
                stack.pop()
            } else {
                stack.push(bracket)
            }
        }

        return stack.length === 0
    }
}
