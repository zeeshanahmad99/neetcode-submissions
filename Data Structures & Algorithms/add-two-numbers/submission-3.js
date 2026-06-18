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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummyNode = new ListNode(null)
        
        let current = dummyNode
        let l1Current = l1
        let l2Current = l2
        let remaining = 0

        while(l1Current || l2Current || remaining) {
            let sum = (l1Current?.val ?? 0) + (l2Current?.val ?? 0) + remaining

            if(sum > 9) {
                remaining = Math.floor(sum / 10)
                sum = sum % 10
            } else {
                remaining = 0
            }

            const newNode = new ListNode(sum)

            current.next = newNode
            current = current.next
            l1Current = l1Current?.next
            l2Current = l2Current?.next
        }

        return dummyNode.next
    }
}
