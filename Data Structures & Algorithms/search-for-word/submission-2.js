class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length,
            m = board[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function dfs(row, col, wIndex, cache) {
            if (wIndex >= word.length) return true;

            const key = `${row},${col}`;

            if (
                row < 0 ||
                row >= n ||
                col < 0 ||
                col >= m ||
                board[row][col] !== word[wIndex] ||
                cache[key]
            )
                return false;

            cache[key] = true;

            for (let [rd, cd] of directions) {
                const result = dfs(row + rd, col + cd, wIndex + 1, cache);

                if(result) return true
            }

            delete cache[key]

            return false
        }

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < m; col++) {
                const cell = board[row][col];

                if (word[0] === cell) {
                    if (dfs(row, col, 0, {})) return true;
                }
            }
        }

        return false;
    }
}
