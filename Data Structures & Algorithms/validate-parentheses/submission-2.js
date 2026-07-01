class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mapping = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let bracket of s) {
            if (stack.length && stack.at(-1) === mapping[bracket]) {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        }

        return stack.length === 0;
    }
}
