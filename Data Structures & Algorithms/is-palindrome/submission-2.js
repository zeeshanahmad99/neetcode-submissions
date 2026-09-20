class Solution {
    isAlphanumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!this.isAlphanumeric(s[left])) {
                left++;
                continue;
            }

            if (!this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
