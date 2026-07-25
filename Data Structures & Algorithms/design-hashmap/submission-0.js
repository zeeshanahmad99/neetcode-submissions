class MyHashMap {
    constructor() {
        this.map = []
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.map[key] = value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map[key] !== null && this.map[key] !== undefined) {
            return this.map[key]
        } else {
            return -1
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.map[key] = null
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
