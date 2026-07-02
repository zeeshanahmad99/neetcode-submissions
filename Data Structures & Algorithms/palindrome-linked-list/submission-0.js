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
    isPalindrome(head) {
        let fast = head
        let slow = head

        while(fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let isHalfPassed = false

        let current = head
        let count = 0

        while(current) {
            if(!isHalfPassed) {
                count += current.val
            } else {
                count -= current.val
            }

            if(current === slow) {
                isHalfPassed = true

                if(!fast.next) {
                    count -= current.val
                }
            }

            current = current.next
        }

        return count === 0
    }
}
