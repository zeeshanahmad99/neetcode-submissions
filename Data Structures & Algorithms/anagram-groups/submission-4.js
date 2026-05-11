class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map()

        for(let str of strs) {
            const sorted = str.split("").sort().join("")

            const val = [...(cache.get(sorted) ?? []), str]
            cache.set(sorted, val)
        }


        return Array.from(cache.values())
    }
}
