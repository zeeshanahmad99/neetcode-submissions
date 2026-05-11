class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b) => a - b)
        
        for(let i=0;i<nums.length-1;i++) {
            const val1 = nums[i]
            const val2 = nums[i+1]

            if(val1 === val2) return true
        }

        return false;
    }
}
