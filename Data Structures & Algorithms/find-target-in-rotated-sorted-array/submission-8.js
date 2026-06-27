class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1
        let startIndex = left

        while(left < right) {
            const mid = Math.floor((left + right) / 2)

            if(nums[left] < nums[mid]) {
                startIndex = nums[startIndex] < nums[left] ? startIndex : left
                left = mid
            } else {
                startIndex = nums[startIndex] < nums[right] ? startIndex : right
                right = mid
            }
        }

        if(target >= nums[startIndex] && target <= nums[nums.length - 1]) {
            left = startIndex
            right = nums.length - 1    
        } else {
            left = 0
            right = startIndex - 1
        }

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)

            if(nums[mid] === target) return mid

            if(target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1
    }
}
