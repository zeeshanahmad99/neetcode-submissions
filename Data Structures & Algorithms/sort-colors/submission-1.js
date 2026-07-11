class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0)

        for(let val of nums) {
            count[val]++
        }

        let cIndex = 0

        for(let i=0; i<nums.length; i++) {
            while(!count[cIndex]) cIndex++
            if(cIndex >= 3) break

            nums[i] = cIndex
            count[cIndex]--
        }

        return nums
    }
}