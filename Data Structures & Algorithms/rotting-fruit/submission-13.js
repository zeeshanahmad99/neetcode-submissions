const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

class Solution {
    bfs(grid, rottenIndices) {
        let count = 0;
        let queue = rottenIndices;

        while (queue.length) {
            let newQueue = [];
            const cache = new Set()

            for (let [r, c] of queue) {
                if(grid[r][c] === 0) continue

                grid[r][c] = 0;

                for (let [rd, cd] of directions) {
                    const newRow = r + rd;
                    const newCol = c + cd;

                    const key = `${newRow},${newCol}`

                    if (
                        newRow < 0 ||
                        newRow >= grid.length ||
                        newCol < 0 ||
                        newCol >= grid[0].length ||
                        grid[newRow][newCol] !== 1 ||
                        cache.has(key)
                    ) {
                        continue;
                    }

                    const hasAlready = queue.some(([r, c]) => r===newRow && c === newCol)

                    console.log(hasAlready, 'hasAlread')

                    if(!hasAlready) {
                    newQueue.push([newRow, newCol]);

                    }
                    cache.add(key)
                }
            }

            if(newQueue.length) count++

            queue = newQueue;
        }

        return count
    }

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rottenIndices = []

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                   rottenIndices.push([i, j])
                }
            }
        }

        const count = this.bfs(grid, rottenIndices);

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) return -1
            }
        }

        return count
    }
}

// [1,0,1]
// [0,2,0]
// [1,0,1]

// [2,1,1]
// [1,1,1]
// [0,1,2]


// [2,1,1,1,1,1,1,1,1,2]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1,1,1,1]
// [2,1,1,1,1,1,1,1,1,2]