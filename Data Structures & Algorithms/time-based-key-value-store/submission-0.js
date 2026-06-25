class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) this.keyStore.set(key, [])
        
        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return ""

        const values = this.keyStore.get(key)

        values.sort((a, b) => b[0] - a[0])

        for(let [time, value] of values) {
            if(time <= timestamp) return value
        }

        return ""
    }
}
