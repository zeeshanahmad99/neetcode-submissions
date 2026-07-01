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
        for(let i=0; i<intervals.length; i++) {
            const {start: start1, end: end1} = intervals[i]

            for(let j=i+1; j<intervals.length; j++) {
                const {start: start2, end: end2} = intervals[j]

                if(start2 >= end1 || end2 < start1) {
                    continue
                } else {
                    return false
                }
            }
        }

        return true
    }
}
