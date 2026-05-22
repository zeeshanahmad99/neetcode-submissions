class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let left = 0;
        let right = 0;
        const cache = new Map();

        while(left < s.length && right < s.length) {
            if(cache.has(s[right])) {
                longest = Math.max(longest, right - left)

                const duplicateIndex = cache.get(s[right])

                while(left <= duplicateIndex) {
                    cache.delete(s[left])
                    left++
                }
            } else {
                cache.set(s[right], right)
                right++
            }
        }


        longest = Math.max(longest, right - left)

        return longest;
    }
}
