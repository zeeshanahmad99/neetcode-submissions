class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const queue = []
        const result = []

        for(let i=0; i<nums.length; i++) {
            const val = nums[i]

            queue.push(val)

            if(queue.length > k) {
                result.push(queue.shift())
            }

            if(queue.length >= 2 && queue.at(-1) > queue.at(-2)) {
                let i = 0
                
                while(i<queue.length) {
                    queue[i] = Math.max(queue[i], queue.at(-1))
                    i++
                }
            }
        }

        result.push(queue[0])

        return result
    }
}