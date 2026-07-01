class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        let pairs = 0
        let single = 0

        for (let val of Object.values(count)) {
            if (val === 1 && single === 0) {
                single++
            } else {
                if(val % 2 === 0) {
                    pairs += val
                } else {
                    if(single === 0) {
                        single++
                    }

                    val--
                    pairs += val
                }
            }
        }

        return pairs + single
    }
}
