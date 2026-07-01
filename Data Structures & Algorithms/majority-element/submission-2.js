class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const cache = {}

        for(let val of nums) {
            cache[val] = (cache[val] || 0) + 1
        }

        const half = Math.floor(nums.length / 2)

        for(let [num, count] of Object.entries(cache)) {
            if(count > half) {
                return num
            }
        }
    }
}
