/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start)

        for(let i=1; i<intervals.length; i++) {
            const {start: start1, end: end1} = intervals[i - 1]
            const {start: start2, end: end2} = intervals[i]

            if(start2 < end1) return false
        }

        return true
    }
}
