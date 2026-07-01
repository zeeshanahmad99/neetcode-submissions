class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sCount = {}

        for(let char of s) {
            sCount[char] = (sCount[char] || 0) + 1
        }

        const tCount = {}

        for(let char of t) {
            tCount[char] = (tCount[char] || 0) + 1
        }

        const sKeys = Object.keys(sCount)
        const tKeys = Object.keys(tCount)

        const keys = sKeys.length > tKeys.length ? sKeys : tKeys

        for(let key of keys) {
            if(sCount[key] !== tCount[key]) {
                return false
            }
        }

        return true
    }
}
