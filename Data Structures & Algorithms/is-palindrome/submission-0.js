class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let leftP = 0
        let rightP = s.length - 1
        const regex = /^[a-zA-Z0-9]$/

        while(leftP < rightP) {
            const leftChar = s[leftP]
            const rightChar = s[rightP]

            if(!regex.test(leftChar)) {
                leftP++
                continue;
            }

            if(!regex.test(rightChar)) {
                rightP--
                continue;
            }

            if(leftChar.toLowerCase() !== rightChar.toLowerCase())
                return false;
            
            leftP++
            rightP--
        }

        return true
    }
}
