class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let cur = 0

        for(let i=0; i<t.length; i++) {
            const char = t[i]

            if(char === s[cur]) {
                cur++
            }
        }

        return cur >= s.length
    }
}
