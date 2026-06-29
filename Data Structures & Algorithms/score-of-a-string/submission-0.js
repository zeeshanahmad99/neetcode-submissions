class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let result = 0

        for(let i=0; i<s.length - 1; i++) {
            const curr = s[i]
            const next = s[i+1]

            result += Math.abs(next.charCodeAt(0) - curr.charCodeAt(0))
        }

        return result
    }
}
