class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length;
        const m = grid[0].length;

        let count = 0;

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < m; col++) {
                if (grid[row][col] !== "1") continue;

                dfs(row, col);
                count++;
            }
        }

        function dfs(row, col) {
            if (row < 0 || row >= n || col < 0 || col >= m || grid[row][col] !== "1") return;

            grid[row][col] = '0'

            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1]
            ]

            for(let [rd, cd] of directions) {
                dfs(row + rd, col + cd)
            }
        }

        return count;
    }
}
