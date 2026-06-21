class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxHeight = 0

        for(let i=0; i<heights.length; i++) {
            const current = heights[i]

            let left = i
            let right = i

            while(left > 0) {
                if(heights[left - 1] >= current) {
                    left--
                } else {
                    break
                }
            }

            while(right < heights.length - 1) {
                if(heights[right + 1] >= current) {
                    right++
                } else {
                    break
                }
            }

            maxHeight = Math.max(maxHeight, current * (right - left + 1))
        }

        return maxHeight
    }
}
