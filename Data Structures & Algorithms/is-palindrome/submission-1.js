class Solution {
    isAlphaNumeric(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while(left < right) {
            const leftChar = s[left].toLowerCase()
            const rightChar = s[right].toLowerCase()

            if(!this.isAlphaNumeric(leftChar)) {
                left++
                continue
            }

            if(!this.isAlphaNumeric(rightChar)) {
                right--
                continue
            }

            if(leftChar !== rightChar) {
                return false
            }

            left++
            right--
        }

        return true
    }
}
