class Solution {
    dfs(grid, row, col) {
        const shouldEarlyReturn = row < 0 || 
            row >= grid.length || 
            col < 0 || 
            col >= grid[0].length ||
            grid[row][col] !== '1'

        if (shouldEarlyReturn) return;

        grid[row][col] = 0;

        this.dfs(grid, row, col + 1);
        this.dfs(grid, row, col - 1);
        this.dfs(grid, row - 1, col);
        this.dfs(grid, row + 1, col);
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                const val = grid[row][col];

                if (val === "1") {
                    count++;
                    this.dfs(grid, row, col)
                }
            }
        }

        return count;
    }
}
