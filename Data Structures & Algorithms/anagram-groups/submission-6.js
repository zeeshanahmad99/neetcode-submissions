class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const status = new Array(strs.length).fill(false)
        const result = []

        let i=0
        while(i<strs.length) {
            const current = strs[i]
            let currentGroup = [current]

            let j = i+1

            while(j<strs.length) {
                const secondVal = strs[j]

                if(current.length === secondVal.length) {
                    const sortedCurrent = current.split('').sort().join('')
                    const sortedSecond = secondVal.split('').sort().join('')

                    if(sortedCurrent === sortedSecond) {
                        currentGroup.push(secondVal)
                        status[j] = true
                    }
                }

                j++
            }

            result.push(currentGroup)
            i++

            while(status[i]) {
                i++
            }
        }

        return result
    }
}
