class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let lastMax = -1

        for(let i=arr.length - 1; i>=0; i--) {
            const temp = arr[i]
            arr[i] = lastMax
            lastMax = Math.max(lastMax, temp)
        }

        return arr
    }
}
