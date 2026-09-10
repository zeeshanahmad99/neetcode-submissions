class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = board.length;
        const col = board[0].length;

        const subBoxCache = new Map()

        for(let i=0; i<row; i++) {
            const rCache = new Set()
            const cCache = new Set()

            for(let j=0; j<col; j++) {
                const rCell = board[i][j]
                const cCell = board[j][i]
                
                const subRow = Math.floor(i / 3)
                const subCol = Math.floor(j / 3)
                const key = `${subRow},${subCol}`

                if(!subBoxCache.has(key)) {
                    subBoxCache.set(key, new Set())
                }

                const subCache = subBoxCache.get(key)

                if(rCell !== '.') {
                    if(rCache.has(rCell)) return false

                    rCache.add(rCell)
                }

                if(cCell !== '.') {
                    if(cCache.has(cCell)) return false

                    cCache.add(cCell)
                }

                if(rCell !== '.') {
                    if(subCache.has(rCell)) return false

                    subCache.add(rCell)
                }
            }
        }

        return true
    }
}
