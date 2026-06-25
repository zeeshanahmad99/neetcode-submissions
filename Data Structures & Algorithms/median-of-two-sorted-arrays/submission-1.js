class Solution {
    getCombined(nums1, nums2) {
        const arranged = [];

        let first = 0;
        let second = 0;

        while (first < nums1.length && second < nums2.length) {
            if (nums1[first] < nums2[second]) {
                arranged.push(nums1[first++]);
            } else {
                arranged.push(nums2[second++]);
            }
        }

        while (first < nums1.length) {
            arranged.push(nums1[first++]);
        }

        while (second < nums2.length) {
            arranged.push(nums2[second++]);
        }

        return arranged;
    }

    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const combined = this.getCombined(nums1, nums2);
        console.log(combined, 'combined')

        if (!combined.length) return 0;

        const mid = Math.floor((combined.length - 1) / 2);

        if (combined.length % 2 === 0) {
            return (combined[mid] + combined[mid + 1]) / 2;
        } else {
            return combined[mid];
        }
    }
}
