class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const cache = new Map();

        for(let item of nums) {
            if(cache.has(item)) return true;

            cache.set(item, true)
        }

        return false
    }
}
