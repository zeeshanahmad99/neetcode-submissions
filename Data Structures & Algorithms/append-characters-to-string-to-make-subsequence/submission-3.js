class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let cur = 0

        for(let i=0; i<s.length; i++) {
            if(s[i] === t[cur]) {
                cur++
            }
        }

        return t.length - cur
    }
}
