class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const newIntervals = []
        let indexToStart = -1

        for (let i = 0; i < intervals.length; i++) {
            const currentInterval = intervals[i];

            if (currentInterval[0] > newInterval[0]) {
                indexToStart = i
                break
            }

            newIntervals.push(currentInterval)
        }

        newIntervals.push(newInterval)

        while(newIntervals.length > 1 && newIntervals.at(-1)[0] <= newIntervals.at(-2)[1]) {
            newIntervals[newIntervals.length - 2] = [
                newIntervals.at(-2)[0],
                Math.max(newIntervals.at(-2)[1], newIntervals.at(-1)[1])
            ]

            newIntervals.pop()
        }

        if(indexToStart !== -1) {
            for (let i = indexToStart; i < intervals.length; i++) {
                const currentInterval = intervals[i];

                if(newIntervals.length && newIntervals.at(-1)[1] >= currentInterval[0]) {
                    newIntervals[newIntervals.length - 1] = [
                        newIntervals.at(-1)[0],
                        Math.max(newIntervals.at(-1)[1], currentInterval[1])
                    ]
                } else {
                    newIntervals.push(currentInterval)
                }

            }
        }

        return newIntervals;
    }
}
