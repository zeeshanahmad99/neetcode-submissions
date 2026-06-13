class Solution {
    binarySearch(values, target) {
        if(!values.length) return false

        const midIndex = Math.floor(values.length / 2)
        const mid = values[midIndex]

        if(mid === target) return true
        
        if(target > mid) {
            return this.binarySearch(values.slice(midIndex + 1), target)
        } else {
            return this.binarySearch(values.slice(0, midIndex), target)
        }
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0
        let j = 0

        while(i < matrix.length) {
            const current = matrix[i][j]

            if(current === target) return true

            const lastItemOfRow = matrix[i][matrix[0].length - 1]
            
            if(target > lastItemOfRow) {
                i++
            } else {
                return this.binarySearch(matrix[i], target)
            }
        }

        return false
    }
}