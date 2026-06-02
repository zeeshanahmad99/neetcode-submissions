class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)
        const stack = [[temperatures[0], 0]]

        for(let i = 1; i<temperatures.length; i++) {
            const current = temperatures[i]

            while(stack.length) {
                const [lastVal, lastIndex] = stack[stack.length - 1]

                if(current <= lastVal) break;

                stack.pop()
                result[lastIndex] = i - lastIndex
            }

            stack.push([current, i])
        }

        return result
    }
}
