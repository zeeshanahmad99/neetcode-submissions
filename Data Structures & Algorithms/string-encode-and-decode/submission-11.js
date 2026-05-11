class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        strs.forEach(str => {
            encodedString += `#${str.length}#${str}`
        })

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i= 0;
        let leftCharsToRead = 0
        let currentString
        const strings = []
        
        while(i < str.length) {
            const char = str[i]

            if(char === '#' && leftCharsToRead === 0) {
                if(currentString !== undefined) strings.push(currentString)
                currentString = ''

                let j= i+1;

                while(true) {
                    let innerChar = str[j]

                    if(innerChar === "#") break;
                    
                    j++
                }

                leftCharsToRead = Number(str.slice(i+1, j))
                i=j
            } else {
                if(currentString === undefined) currentString = ''
                currentString += char
                leftCharsToRead--
            }

            i++
        }

        if(currentString !== undefined) strings.push(currentString)

        return strings
    }
}

// #5#Hello#5#World
