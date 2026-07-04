class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let newIntervalIndex = 0;

        for (let i = 0; i < intervals.length; i++) {
            const [startDate] = intervals[i];

            if (startDate <= newInterval[0]) {
                newIntervalIndex = i + 1
            }
        }

        intervals.splice(newIntervalIndex, 0, newInterval);

        while (true) {
            if (
                newIntervalIndex !== intervals.length - 1 &&
                intervals[newIntervalIndex + 1][0] <= intervals[newIntervalIndex][1]
            ) {
                intervals[newIntervalIndex] = [
                    Math.min(intervals[newIntervalIndex][0], intervals[newIntervalIndex + 1][0]),
                    Math.max(intervals[newIntervalIndex][1], intervals[newIntervalIndex + 1][1]),
                ];
                intervals.splice(newIntervalIndex + 1, 1);
            } else if (
                newIntervalIndex !== 0 &&
                intervals[newIntervalIndex - 1][1] >= intervals[newIntervalIndex][0]
            ) {
                intervals[newIntervalIndex] = [
                    Math.min(intervals[newIntervalIndex - 1][0], intervals[newIntervalIndex][0]),
                    Math.max(intervals[newIntervalIndex - 1][1], intervals[newIntervalIndex][1]),
                ];
                intervals.splice(newIntervalIndex - 1, 1);
                newIntervalIndex--;
            } else {
                break;
            }
        }

        return intervals;
    }
}

[
    [1, 2],
    [3, 5],
    [4, 8],
    [6, 7],
    [8, 10],
    [12, 16],
][([1, 2], [3, 5], [4, 8], [6, 7], [8, 10], [12, 16])];
