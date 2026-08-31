class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const count = {}

        for(let char of s) {
            count[char] = (count[char] ?? 0) + 1
        }

        for(let char of t) {
            count[char] = (count[char] ?? 0) - 1
        }

        const isAllZero = Object.values(count).every(val => val === 0)

        return isAllZero
    }
}
