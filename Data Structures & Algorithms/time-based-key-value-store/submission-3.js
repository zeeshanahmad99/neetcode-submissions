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

        const arr = this.keyStore.get(key)

        arr.push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = ''

        if(this.keyStore.has(key)) {
            const arr = this.keyStore.get(key)

            let left = 0
            let right = arr.length - 1

            while(left <= right) {
                const midIndex = Math.floor((left + right) / 2)
                const mid = arr[midIndex]

                if(mid[1] === timestamp) {
                    result = mid[0]
                    break
                } else if(timestamp < mid[1]) {
                    right = midIndex - 1
                } else {
                    left = midIndex + 1
                }
            }

            if(!result) {
                if(left < arr.length && arr[left][1] < timestamp) {
                    result = arr[left][0]
                } else if(right >= 0 && arr[right][1] < timestamp) {
                    result = arr[right][0]
                }
            }
        }

        return result
    }
}
