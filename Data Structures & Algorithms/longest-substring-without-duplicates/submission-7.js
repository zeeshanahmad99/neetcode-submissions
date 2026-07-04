class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const cache = {};

        let left = 0;
        let right = 0;
        let maxLength = 0;

        while (right < s.length) {
            const char = s[right];

            while (cache[char]) {
                delete cache[s[left]];
                left++;
            }

            cache[char] = true;
            right++;

            maxLength = Math.max(maxLength, right - left);
        }

        return maxLength;
    }
}
