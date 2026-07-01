class Solution {
    dfs(image, sr, sc, color, originalColor) {
        if (
            sr < 0 ||
            sr >= image.length ||
            sc < 0 ||
            sc >= image[0].length ||
            image[sr][sc] !== originalColor ||
            image[sr][sc] === color
        )
            return image;

        image[sr][sc] = color;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let [dsr, dsc] of directions) {
            this.dfs(image, sr + dsr, sc + dsc, color, originalColor);
        }

        return image;
    }

    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        return this.dfs(image, sr, sc, color, image[sr][sc])
    }
}