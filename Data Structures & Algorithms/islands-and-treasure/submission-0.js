class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];

        const cache = new Set();

        function dfs(row, col, count) {
            const cacheKey = `${row},${col}`;

            if (
                row < 0 ||
                row >= ROW ||
                col < 0 ||
                col >= COL ||
                grid[row][col] === -1 ||
                (count > 0 && grid[row][col] === 0) ||
                cache.has(cacheKey)
            )
                return;

            const cell = grid[row][col];

            if (cell !== 2147483647 && count > cell) return;

            grid[row][col] = count;

            cache.add(cacheKey);

            for (let [rd, cd] of directions) {
                dfs(row + rd, col + cd, count + 1);
            }

            cache.delete(cacheKey);
        }

        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                const cell = grid[row][col];

                if (cell === 0) dfs(row, col, 0);
            }
        }
    }
}

// [
//   [4,1,0,1],
//   [3,2,i,2],
//   [2,1,2,1],
//   [0,1,2,2]
// ]
