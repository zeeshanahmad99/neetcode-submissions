class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles)

        let left = 1
        let right = max
        let min = max

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)

            let hours = 0

            for(let p of piles) {
                hours += Math.ceil(p / mid)
            }

            if(hours > h) {
                left = mid + 1
            } else {
                min = Math.min(min, mid)
                right = mid - 1
            }
        }

        return min
    }
}