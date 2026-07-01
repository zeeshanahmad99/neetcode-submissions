class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const noteCount = {}

        for(let i=0; i<ransomNote.length; i++) {
            const char = ransomNote[i]

            noteCount[char] = (noteCount[char] || 0) + 1
        }

        const magazineCount = {}

        for(let i=0; i<magazine.length; i++) {
            const char = magazine[i]

            magazineCount[char] = (magazineCount[char] || 0) + 1
        }

        for(let key in noteCount) {
            if(!magazineCount[key] || magazineCount[key] < noteCount[key]) {
                return false
            }
        }

        return true
    }
}
