const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

class Solution {
    dfs(grid, row, col, area) {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] !== 1
        )
            return area;

        area[0] += 1
        grid[row][col] = 0

        for(let [r, c] of directions) {
            this.dfs(grid, row + r, col + c, area)    
        }

        return area
    }

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                const cell = grid[row][col];

                if (cell === 1) {
                    max = Math.max(max, this.dfs(grid, row, col, [0])[0]);
                }
            }
        }

        return max;
    }
}
