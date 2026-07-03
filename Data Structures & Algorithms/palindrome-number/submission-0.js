class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if(x < 0) return false

        let toReverse = x
        let reversed = 0

        while(toReverse !== 0) {
            reversed = reversed * 10 + toReverse % 10

            toReverse = Math.floor(toReverse / 10)
        }

        return reversed === x
    }
}
