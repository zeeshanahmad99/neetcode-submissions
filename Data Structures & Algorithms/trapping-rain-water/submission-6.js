class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftMax = new Array(height.length).fill(0)
        const rightMax = new Array(height.length).fill(0)

        let max = 0

        for(let i=1; i<height.length; i++) {
            const val = height[i-1]
            max = Math.max(max, val)
            leftMax[i] = max
        }

        max = 0

        for(let i=height.length - 2; i>=0; i--) {
            const val = height[i+1]
            max = Math.max(max, val)
            rightMax[i] = max
        }

        let water = 0

        for(let i=0; i<height.length; i++) {
            const left = leftMax[i]
            const right = rightMax[i]
            const diff = Math.min(left, right) - height[i]

            if(diff > 0) water += diff
        }

        return water
    }
}


// 0,2,0,3,1,0,1,3,2,1
// 0,0,2,2,3,3,3,3,3,3
// 3,3,3,3,3,3,3,2,1,0
// 0,0,2,2,3,3,3,2,1,0
// 0,0,2,0,2,3,2,0,0,0
