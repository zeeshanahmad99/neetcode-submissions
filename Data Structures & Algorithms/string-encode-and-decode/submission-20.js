class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = []

        for(let str of strs) {
            encoded.push(`${str.length}#${str}`)
        }

        return encoded.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []

        let length = ''

        for(let i=0; i<str.length; i++) {
            const char = str[i]

            if(char === '#') {
                const wordLength = parseInt(length)
                decoded.push(str.slice(i + 1, i + 1 + wordLength))
                i += wordLength
                length = ''
            } else {
                length += char
            }
        }

        return decoded
    }
}
