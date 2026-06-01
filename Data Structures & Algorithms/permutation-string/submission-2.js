class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const original = s1.split('').reduce((acc, char) => {
            acc[char] = (acc[char] ?? 0) + 1
            return acc
        }, {})


        for(let i = 0; i<s2.length; i++) {
            let j = i
            let temp = {...original}

            while(j < s2.length) {
                const current = s2[j]

                if(!temp.hasOwnProperty(current)) break;

                temp[current] = temp[current] - 1

                if(temp[current] <= 0) delete temp[current]

                if(Object.keys(temp) <= 0) return true

                j++
            }
        }

        return false
    }
}
