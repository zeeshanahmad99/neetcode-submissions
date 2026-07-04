class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];
        const cache = {};

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right] + current;

                if (sum === 0) {
                    const key = [nums[i], nums[left], nums[right]].sort((a, b) => a - b).toString();
console.log(key)
                    if (!cache[key]) {
                        result.push([nums[i], nums[left], nums[right]]);
                    }
                    
                    cache[key] = true;
                    right--
                    left++
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}
