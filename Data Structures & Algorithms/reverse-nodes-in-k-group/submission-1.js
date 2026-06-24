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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if(!head) return null

        let left = head
        let right = head
        let count = 1

        while(count !== k && right.next) {
            right = right.next
            count++
        }

        if(count < k) return head

        const nextReverse = this.reverseKGroup(right.next, k)

        let prev = null
        let current = left

        while(count !== 0) {
            count--
            const temp = current.next
            current.next = prev
            prev = current
            current = temp
        }

        left.next = nextReverse

        return right
    }
}
