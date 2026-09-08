class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs.length) return ''

        const strsLengths = []

        for(let str of strs) {
            strsLengths.push(str.length)
        }

        return strsLengths.join(',') + '#' + strs.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const dividerIndex = str.indexOf('#')

        const lengths = dividerIndex !== -1 ? str.slice(0, dividerIndex).split(',').map(num => parseInt(num)) : []

        const decoded = []

        let index = dividerIndex + 1

        for(let len of lengths) {
            decoded.push(str.slice(index, index + len))
            index += len
        }

        return decoded
    }
}
