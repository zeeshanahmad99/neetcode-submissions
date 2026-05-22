class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<board.length; i++) {
            const seen = new Map()

            for(let j=0; j<board[0].length; j++) {
                const val = board[i][j]

                if(val === '.') continue;
                
                if(seen.has(val)) return false;

                seen.set(val, true)
            }
        }

        for(let i=0; i<board[0].length; i++) {
            const seen = new Map()

            for(let j=0; j<board.length; j++) {
                const val = board[j][i]

                if(val === '.') continue;

                if(seen.has(val)) return false;

                seen.set(val, true)
            }
        }

        for(let i=0; i<board.length;) {
            for(let j=0; j<board[0].length; j+3) {
                const slice = board.slice(i, i+3).map(row => row.slice(j, j+3))
                
                const result = this.isValid3By3(slice)

                if(!result) return false

                j = j+3
            }

            i = i+3
        }


        return true
    }

    isValid3By3(board) {
        const seen = new Map()

        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board.length; j++) {
                const val = board[i][j]

                if(val === '.') continue;

                if(seen.has(val)) return false;

                seen.set(val, true)
            }
        }

        return true
    }
}
