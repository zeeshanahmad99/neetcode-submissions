class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                const cell = board[row][col];

                if (cell === ".") continue;

                const squareKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;

                if (
                    (rows.has(row) && rows.get(row).has(cell)) ||
                    (cols.has(col) && cols.get(col).has(cell)) ||
                    (squares.has(squareKey) && squares.get(squareKey).has(cell))
                ) {
                    return false;
                }

                if (!rows.has(row)) rows.set(row, new Set());
                if (!cols.has(col)) cols.set(col, new Set());
                if (!squares.has(squareKey)) squares.set(squareKey, new Set());

                rows.get(row).add(cell)
                cols.get(col).add(cell)
                squares.get(squareKey).add(cell)
            }
        }

        return true;
    }
}
