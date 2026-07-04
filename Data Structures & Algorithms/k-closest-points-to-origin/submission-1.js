class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pointsWithDistance = [];

        for (let [x, y] of points) {
            const distance = Math.sqrt(x ** 2 + y ** 2);
            pointsWithDistance.push([distance, [x,y]]);
        }

        pointsWithDistance.sort((a, b) => a[0] - b[0])

        return pointsWithDistance.map(([_, point]) => point).slice(0, k)
    }
}
