class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const rightSmall = Array(heights.length).fill(-1)
        let stack = []

        for(let i=0; i<heights.length; i++) {
            const val = heights[i]

            while(stack.length && val < heights[stack.at(-1)]) {
                const index = stack.pop()
                rightSmall[index] = i
            }

            stack.push(i)
        }

        const leftSmall = Array(heights.length).fill(-1)
        stack = []

        for(let i=heights.length - 1; i>=0; i--) {
            const val = heights[i]

            while(stack.length && val < heights[stack.at(-1)]) {
                const index = stack.pop()
                leftSmall[index] = i
            }

            stack.push(i)
        }

        let max = 0

        for(let i=0; i<heights.length; i++) {
            const current = heights[i]

            const left = leftSmall[i] === -1 ? 0 : leftSmall[i] + 1
            const right = rightSmall[i] === -1 ? heights.length - 1 : rightSmall[i] - 1

            const height = current * (right - left + 1)

            max = Math.max(height, max)
        }

        return max
    }
}

