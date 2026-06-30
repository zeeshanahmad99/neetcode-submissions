class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits) return []
        
        const keys = digits.split('')

        const mapping = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'] 
        }

        const mappedDigits = keys.map(key => mapping[key])

        return this.getCombination('', mappedDigits)
    }

    getCombination(letter, arr) {
        if(!arr.length) return [letter]
        const result = []

        const current = arr[0]

        for(let l of current) {
            result.push(...this.getCombination(`${letter}${l}`, arr.slice(1)))
        }

        return result
    }
}
