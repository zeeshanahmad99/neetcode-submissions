class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = []

        for (let i = 0; i < strs.length; i++) {
            const item = strs[i]
            sorted.push([item.split("").sort().join(""), i])
        }

        sorted.sort((a, b) => a[0].localeCompare(b))

        const groups = []

        let i = 0, j = 1;

        while (i < strs.length) {
            if (j >= strs.length) {
                j = strs.length - 1;
                
                const arr = []

                for (let k = i; k <= j; k++) {
                    const originalIndex = sorted[k][1]
                    const val = strs[originalIndex]
                    arr.push(val)
                }

                groups.push(arr)
                
                break;
            } else if (sorted[i][0] !== sorted[j][0]) {
                const arr = []

                for (let k = i; k < j; k++) {
                    const originalIndex = sorted[k][1]
                    const val = strs[originalIndex]
                    arr.push(val)
                }

                groups.push(arr)

                i = j
                j = j + 1
            } else {
                j++
            }
        }

        return groups
    }
}
