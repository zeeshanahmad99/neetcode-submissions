class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const result = []

        for(let i=0; i<points.length; i++) {
            const [x, y] = points[i]

            result[i] = [Math.sqrt(x**2 + y**2), [x, y]]
        }

        result.sort((a, b) => a[0] - b[0])

        return result.slice(0, k).map(([_, point]) => point)
    }
}
