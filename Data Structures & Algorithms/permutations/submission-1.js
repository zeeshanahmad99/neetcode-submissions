class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length === 0) return [[]]

        let perms = this.permute(nums.slice(1))
        let result = []

        for(let p of perms) {
            for(let i=0; i<=p.length; i++) {
                const pCopy = p.slice()
                pCopy.splice(i, 0, nums[0])
                result.push(pCopy)
            }
        }

        return result
    }
}
