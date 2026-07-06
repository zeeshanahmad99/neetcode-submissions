class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProduct = new Array(nums.length).fill(1)
        const postProduct = new Array(nums.length).fill(1)
        
        let next = 1

        for(let i=0; i<nums.length; i++) {
            preProduct[i] = next
            next *= nums[i]
        }

        next = 1

        for(let i=nums.length - 1; i>=0; i--) {
            postProduct[i] = next
            next *= nums[i]
        }

        const result = []

        for(let i=0; i<nums.length; i++) {
            result[i] = preProduct[i] * postProduct[i]
        }

        return result
    }
}
