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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head) return head

        let left = head
        let right = head
        let distance = 1

        while(right.next && distance !== n) {
            distance++
            right = right.next
        }

        let prev = null

        while(right.next) {
            prev = left
            left = left.next
            right = right.next
        }

        if(prev === null) {
            const temp = head
            head = head.next
            temp.next = null    
        } else {
            prev.next = left.next
            left.next = null
        }

        return head
    }
}


