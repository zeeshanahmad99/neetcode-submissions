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
        let count = 1

        while(right.next) {
            right = right.next
            count++
        }

        let prev = null

        while(count !== n) {
            count--
            prev = left
            left = left.next
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


