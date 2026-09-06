class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map()

        for(let str of strs) {
            const key = str.split('').sort().join('')

            if(!cache.has(key)) {
                cache.set(key, [])
            }

            cache.get(key).push(str)
        }

        return Array.from(cache.values())
    }
}
