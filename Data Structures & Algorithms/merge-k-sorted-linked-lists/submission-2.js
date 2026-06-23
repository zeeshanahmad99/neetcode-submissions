/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode();
        let current = dummy;

        let isNonEmpty = true;

        while (isNonEmpty) {
            let minIndex = -1;

            isNonEmpty = false

            for (let i = 0; i < lists.length; i++) {
                const node = lists[i];

                if (!node) continue;

                isNonEmpty = true

                if (minIndex === -1 || node.val < lists[minIndex].val) minIndex = i;
            }

            if(minIndex === -1) continue
            
            const nextMinNode = lists[minIndex];
            lists[minIndex] = lists[minIndex].next;

            current.next = nextMinNode;
            current = current.next;
        }

        return dummy.next;
    }
}
