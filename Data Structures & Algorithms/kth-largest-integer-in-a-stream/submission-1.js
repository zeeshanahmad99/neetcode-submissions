class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums
        this.kArray = []

        for(let num of nums) {
            if(!(this.kArray.length < this.k || this.kArray.at(-1) < num)) continue;
            this.kArray.push(num)
            this.kArray.sort((a, b) => b - a)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val)

        if(this.kArray.length < this.k || this.kArray.at(-1) < val) {
            this.kArray.push(val)
            this.kArray.sort((a, b) => b - a)
        }

        return this.kArray.at(this.k - 1)
    }
}
