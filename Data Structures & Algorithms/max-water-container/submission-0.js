class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let leftP = 0;
        let rightP = heights.length - 1

        while(leftP < rightP) {
            const distance = rightP - leftP
            const leftVal = heights[leftP]
            const rightVal = heights[rightP]
            const height = leftVal < rightVal ? leftVal : rightVal

            area = Math.max(area, distance * height)

            if(leftVal < rightVal) {
                leftP++
            } else {
                rightP--
            }
        }

        return area;
    }
}
