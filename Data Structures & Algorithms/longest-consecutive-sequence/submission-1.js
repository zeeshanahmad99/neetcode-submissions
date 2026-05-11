class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0

        nums.sort((a,b) => a-b)
        nums = Array.from(new Set(nums))

        let longest = 1
        let currentLength = 1

        for(let i=1; i<nums.length; i++) {
            const previous = nums[i-1];
            const current = nums[i];

            if(previous + 1 === current) {
                currentLength++
            } else {
                longest = currentLength > longest ? currentLength : longest
                currentLength = 1
            }
        }

        longest = currentLength > longest ? currentLength : longest

        return longest
    }
}
