class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Time: O(n + logn)
        // Space: O(n)
        
        for(let i=0; i<numbers.length; i++) {
            const diff = target - numbers[i]

            let left = i + 1
            let right = numbers.length - 1

            while(left <= right) {
                const mid = Math.floor((left + right) / 2)
                const midVal = numbers[mid]

                if(midVal === diff) {
                    return [i+1, mid+1]
                } else if(diff < midVal) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
    }
}
