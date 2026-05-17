class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftIndex = 0
        let rightIndex = numbers.length - 1

        while(leftIndex < rightIndex) {
            const sum = numbers[leftIndex] + numbers[rightIndex]

            if(sum === target) {
                return [leftIndex + 1, rightIndex + 1]
            } else if(sum < target) {
                leftIndex++
            } else {
                rightIndex--
            }
        }

        return []
    }
}
