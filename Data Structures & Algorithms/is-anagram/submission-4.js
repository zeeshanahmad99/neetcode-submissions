class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const charArray = new Array(26).fill(0)

        for(let i=0; i<s.length; i++) {
            const char = s[i]
            const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
            charArray[charIndex]++
        }

        for(let i=0; i<t.length; i++) {
            const char = t[i]
            const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
            charArray[charIndex]--
        }

        const isAllZero = charArray.every(val => val === 0)

        return isAllZero
    }
}
