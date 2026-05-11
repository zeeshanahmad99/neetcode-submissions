class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = new Array(nums.length).fill(1)
        let lastProduct = 1

        for (let i = 0; i < nums.length; i++) {
            products[i] = lastProduct
            lastProduct *= nums[i]
        }

        lastProduct = 1;

        for (let j = nums.length - 1; j >= 0; j--) {
            products[j] *= lastProduct
            lastProduct *= nums[j]
        }

        return products;
    }
}





