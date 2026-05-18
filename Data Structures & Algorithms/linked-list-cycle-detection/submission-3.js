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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;
        
        let tail1 = head
        let tail2 = head.next

        while(tail1 && tail2) {
            if(tail1 === tail2) return true

            tail1 = tail1.next
            tail2 = tail2.next

            if(tail2) tail2 = tail2.next
        }

        return false
    }
}
