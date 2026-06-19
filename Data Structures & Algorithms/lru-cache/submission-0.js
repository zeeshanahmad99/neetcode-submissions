class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1

        const value = this.cache.get(key)

        this.cache.delete(key)
        this.cache.set(key, value)

        return value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) this.cache.delete(key)

        this.cache.set(key, value)

        console.log(this.cache.size, this.capacity)
        
        if(this.cache.size > this.capacity) {
            const {value} = this.cache.keys().next()
            this.cache.delete(value) 
        }
    }
}
