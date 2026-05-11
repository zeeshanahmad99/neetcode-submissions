class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = new Array(nums.length).fill(0)

        products[0] = nums[0]
        let product = nums[0]

        for(let i=1; i<nums.length; i++) {
            const current = nums[i]
            products[i] = product
            product *= current
        }

        const rightProducts = new Array(nums.length).fill(0)
        products[0] = nums.at(-1)
        product = nums.at(-1)

        for(let i=nums.length-2; i>=0; i--) {
            const current = nums[i]
            rightProducts[i] = product
            product *= current
        }

        
        products[0] = rightProducts[0]

        for(let i=1; i<nums.length-1; i++) {
            products[i] *= rightProducts[i]
        }

        return products;
    }
}

// 1  1  2  8
// 48 24 6  6







