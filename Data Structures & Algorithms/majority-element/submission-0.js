class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        if(!nums.length) return 0

        nums.sort((a,b) => a - b)

        let maxNumber = nums[0]
        let maxCount = 1

        let left = 0
        let right = 0

        while(left < nums.length && right < nums.length) {
            let count = 0

            while(nums[left] === nums[right] && right < nums.length) {
                count++
                right++
            }

            if(count > maxCount) {
                maxCount = count
                maxNumber = nums[left]
            }

            left = right
        }

        return maxNumber
    }
}
