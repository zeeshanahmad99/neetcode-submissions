class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {}

        for(let val of nums) {
            if(count[val]) {
                return true
            }

            count[val] = 1
        }

        return false
    }
}
