class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const copy = []

        for(let i=0; i<nums.length; i++) {
            copy.push([nums[i], i])
        }
        
        copy.sort((a, b) => a[0] - b[0])

        let i = 0, j = nums.length - 1;

        while (i < j) {
            const sum = copy[i][0] + copy[j][0]

            if (sum === target) {
                return [copy[i][1], copy[j][1]]
            } else if (sum < target) {
                i++
            } else {
                j--
            }
        }

        return []
    }
}
