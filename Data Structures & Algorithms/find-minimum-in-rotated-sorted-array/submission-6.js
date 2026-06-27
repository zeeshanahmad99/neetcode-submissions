class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        let min = nums[0]

        while(left < right) {
            const mid = Math.floor((left + right) / 2)

            if(nums[left] < nums[mid]) {
                min = Math.min(nums[left], min)
                left = mid
            } else {
                min = Math.min(nums[right], min)
                right = mid
            }
        }

        return min
    }
}
