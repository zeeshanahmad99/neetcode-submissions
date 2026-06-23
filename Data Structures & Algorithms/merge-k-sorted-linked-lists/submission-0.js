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
        const nodes = []

        for(let head of lists) {
            let current = head

            while(current) {
                nodes.push(current)
                current = current.next
            }
        }

        nodes.sort((a, b) => a.val - b.val)

        const dummy = new ListNode()

        let current = dummy

        for(let node of nodes) {
            current.next = node
            current = current.next
        }

        current.next = null

        return dummy.next
    }
}
