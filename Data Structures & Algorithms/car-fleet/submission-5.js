class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i) => [p, speed[i]])
        
        pairs.sort((a, b) => b[0] - a[0])
        
        const stack = []

        for(let [p, s] of pairs) {
            stack.push((target - p) / s)
            
            if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop()
            }
        }

        return stack.length
    }
}






