class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const result = []

        for(let i=0; i<=n; i++) {
            const count = i.toString(2).split('').filter(char => char === '1').length

            result[i] = count
        }

        return result
    }
}
