class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0
        let max = 0

        while(i < s.length) {
            let count = k

            let j = i

            while(j < s.length - 1) {
                if(s[j + 1] !== s[i]) {
                    if(count) {
                        count--
                    } else {
                        break;
                    }
                }
                
                j++
            }

            let l = i

            while(l > 0) {
                if(s[l - 1] !== s[i]) {
                    if(count) {
                        count--
                    } else {
                        break;
                    }
                }
                
                l--
            }

            max = Math.max(max, j - l + 1)
            i++
        }

        return max
    }
}
