class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tObj = t.split('').reduce((acc, char) => {
            acc[char] = (acc[char] ?? 0) + 1
            return acc
        }, {})

        let short = null
        let i=0

        while(i<s.length) {
            if(!tObj[s[i]]) {
                i++
                continue
            }

            const shortObj = {}
            let j=i

            while(j<s.length) {
                const char = s[j]

                if(!tObj[char]) {
                    j++
                    continue
                }

                shortObj[char] = (shortObj[char] ?? 0) + 1

                const isMatch = Object.entries(tObj).every(([key, count]) => shortObj[key] >= count)

                if(isMatch) {
                    while(s[i+1] === s[i] && shortObj[i] > tObj[i]) {
                        shortObj[i]--
                        i++
                    }

                    if(short === null || j-i+1 < short.length) {
                       short = s.substring(i, j + 1)
                    }
                    break;
                }

                j++
            }

            i++
        }

        return short === null ? '' : short
    }
}
