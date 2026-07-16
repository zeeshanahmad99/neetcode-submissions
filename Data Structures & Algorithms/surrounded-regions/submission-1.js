class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROW = board.length;
        const COL = board[0].length;

        const edges = new Set();

        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];

        function bfs(row, col) {
            let queue = [[row, col]];
            const visited = new Set();

            while (queue.length) {
                const newQueue = [];

                console.log(queue)

                for (let [r, c] of queue) {
                    if (
                        r < 0 ||
                        r >= ROW ||
                        c < 0 ||
                        c >= COL ||
                        board[r][c] === "X" ||
                        visited.has(`${r},${c}`)
                    ) {
                        continue;
                    }

                    const key = `${r},${c}`;

                    visited.add(key);
                    edges.add(key);

                    for (let [dr, dc] of directions) {
                        newQueue.push([r + dr, c + dc]);
                    }
                }

                queue = newQueue;
            }
        }

        for (let c = 0; c < COL; c++) {
            bfs(0, c);
            bfs(ROW - 1, c);
        }

        for (let r = 0; r < ROW; r++) {
            bfs(r, 0);
            bfs(r, COL - 1);
        }

        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                if (edges.has(`${r},${c}`)) continue;

                board[r][c] = "X";
            }
        }
    }
}
