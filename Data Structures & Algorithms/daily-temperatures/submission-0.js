class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)

        for(let i=0; i<temperatures.length; i++) {
            let count = 0;

            for(let j=i+1; j<temperatures.length; j++) {
                count++

                if(temperatures[j] > temperatures[i]) {
                    result[i] = count;
                    break;
                }
            }
        }

        return result
    }
}
