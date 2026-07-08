class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const stack = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const last = stack.at(-1);
            const current = intervals[i];

            if (current[0] > last[1]) {
                stack.push(current);
            } else {
                stack[stack.length - 1] = [
                    Math.min(last[0], current[0]),
                    Math.max(last[1], current[1]),
                ];
            }
        }

        return stack
    }
}
