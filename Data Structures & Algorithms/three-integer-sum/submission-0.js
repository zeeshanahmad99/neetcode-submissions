class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        const tripletsKeys = new Set()

        for(let i=0; i<nums.length; i++) {
            const val = nums[i];

            const cache = new Map()

            for(let j=i+1; j<nums.length; j++) {
                const innerVal = nums[j]

                if(cache.has(innerVal)) {
                    const triplets = [val, cache.get(innerVal), innerVal]

                    const key = triplets.toSorted((a, b) => a - b).join(',')

                    if(!tripletsKeys.has(key)) {
                        result.push(triplets)
                        tripletsKeys.add(key)
                    }
                } else {
                    cache.set(-(val + innerVal), innerVal)
                }
            }
        }

        return result;
    }
}

