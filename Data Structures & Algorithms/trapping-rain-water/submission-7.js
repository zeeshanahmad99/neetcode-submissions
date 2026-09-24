class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        const leftMax = new Array(n).fill(0)
        const rightMax = new Array(n).fill(0)

        let max = 0

        for(let i=0; i<n; i++) {
            leftMax[i] = max
            max = Math.max(max, height[i])
        }

        max = 0

        for(let i=n-1; i>=0; i--) {
            rightMax[i] = max
            max = Math.max(max, height[i])
        }

        let totalWater = 0

        for(let i=0; i<n; i++) {
            const min = Math.min(leftMax[i], rightMax[i])
            totalWater += Math.max(min - height[i], 0)
        }

        return totalWater
    }
}
