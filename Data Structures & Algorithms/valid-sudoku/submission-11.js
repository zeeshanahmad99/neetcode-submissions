class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<9; i++) {
            const seen = new Set()

            for(let j=0; j<9; j++) {
                const cell = board[i][j]
                if(cell === '.') continue
                if(seen.has(cell)) return false
                seen.add(cell)
            }
        }

        for(let i=0; i<9; i++) {
            const seen = new Set()

            for(let j=0; j<9; j++) {
                const cell = board[j][i]
                if(cell === '.') continue
                if(seen.has(cell)) return false
                seen.add(cell)
            }
        }

        for(let square=0; square<9; square++) {
            const seen = new Set()

            for(let i=0; i<3; i++) {
                for(let j=0; j<3; j++) {
                    const row = Math.floor(square / 3) * 3 + i
                    const col = (square % 3) * 3 + j
                    const cell = board[row][col]

                    if(cell === '.') continue
                    if(seen.has(cell)) return false
                    seen.add(cell)
                }
            }
        }

        return true
    }
}
