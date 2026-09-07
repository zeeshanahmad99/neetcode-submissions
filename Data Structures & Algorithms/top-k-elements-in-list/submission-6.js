class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Time: O(n)
        // Space: O(n)

        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue((x) => x[1])

        for(let [num, cnt] of Object.entries(count)) {
            heap.enqueue([num, cnt])

            if(heap.size() > k) heap.dequeue()
        }

        const res = []

        for(let i=0; i<k; i++) {
            const [num, _cnt] = heap.dequeue()
            res.push(num)
        }

        return res
    }
}
