class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = s.split('').sort().join('')
        const tSorted = t.split('').sort().join('')

        return sSorted === tSorted
    }
}
