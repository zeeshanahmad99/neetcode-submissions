class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        const cache = new Set();
        const result = [];

        let row = 0;
        let col = 0;
        let dIndex = 0;

        while (true) {
            if (
                row >= matrix.length ||
                col < 0 ||
                col >= matrix[0].length ||
                cache.has(`${row},${col}`)
            )
                break;

            const cell = matrix[row][col];
            result.push(cell);
            cache.add(`${row},${col}`);

            const [rd, cd] = directions[dIndex];
            row += rd;
            col += cd;

            if (
                row >= matrix.length ||
                col < 0 ||
                col >= matrix[0].length ||
                cache.has(`${row},${col}`)
            ) {
                row -= rd;
                col -= cd;

                dIndex = (dIndex + 1) % 4;

                const [ird, icd] = directions[dIndex];
                row += ird;
                col += icd;
            }
        }

        return result;
    }
}
