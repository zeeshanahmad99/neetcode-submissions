class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if(nums[mid] === target) {
                return mid
            } else if(nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1
    }
}

// [-1, 0, 2, 4, 6, 8]
// [ 0, 1, 2, 3, 4, 5]
// 5/2 = 2
// 8/2 = 4
// 6/2 = 3

