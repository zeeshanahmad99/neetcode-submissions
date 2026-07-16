class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function dfs(r, c, ocean) {
            ocean[r][c] = true;

            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < ROWS &&
                    nc >= 0 &&
                    nc < COLS &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean);
                }
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }

        for (let c = 0; c < ROWS; c++) {
            dfs(c, 0, pac);
            dfs(c, COLS - 1, atl);
        }

        console.log(pac)
        console.log(atl)

        const result = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
