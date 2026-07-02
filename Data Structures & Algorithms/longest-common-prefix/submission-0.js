class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = ''

        let cur = 0

        while(true) {
            let char = strs[0][cur] || ''

            for(let i=0; i<strs.length; i++) {
                let str = strs[i]

                if(char !== str[cur] || cur >= str.length) {
                    char = ''
                    break
                }
            }

            if(char) {
                common += char
                cur++
            } else {
                break
            }
        }

        return common
    }
}
