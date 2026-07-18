class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0
        let right = nums.length - 1
        let k = 0

        while(left < right) {
            if(nums[left] !== val) {
                left++
                k++
            } else if(nums[right] === val) {
                right--
            } else {
                const temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp

                right--
                left++
                k++
            }
        }

        if(left < nums.length && nums[left] !== val) k++

        return k
    }
}
