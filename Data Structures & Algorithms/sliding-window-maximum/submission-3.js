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
// 2,2,4,4,6

// 1,2,1,0,4,2,6

// 6,6,6

// 7,4

// 7,2,4
// 4,4

// 1,-1

// 1,-1
// -1


// 3,3,2,5

// 1,3,1,2,0,5

// 5,5,5

// 3,3,2

// 1,3,1,2,0,5
// 5,5,5


