class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const cache = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            const sIndex = s[i].charCodeAt() - 97
            cache[sIndex]++
            
            const tIndex = t[i].charCodeAt() - 97
            cache[tIndex]--
        }

        for(const item of cache) {
            if(item !== 0) return false;
        }

        return true
    }
}




