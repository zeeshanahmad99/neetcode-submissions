class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        const shortBar = new Array(n).fill(0)
        let max = 0

        for(let i=0; i<n; i++) {
            shortBar[i] = max
            max = Math.max(max, height[i])
        }

        max = 0

        for(let i=n-1; i>=0; i--) {
            shortBar[i] = Math.min(max, shortBar[i])
            max = Math.max(max, height[i])
        }

        let totalWater = 0

        for(let i=0; i<n; i++) {
            totalWater += Math.max(shortBar[i] - height[i], 0)
        }

        return totalWater
    }
}
