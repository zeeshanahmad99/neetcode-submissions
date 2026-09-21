class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const cache = new Map()

        for(let i=0; i<numbers.length; i++) {
            const val = numbers[i]

            if(cache.has(val)) {
                return [cache.get(val) + 1, i + 1]
            }

            cache.set(target - val, i)
        }
    }
}
