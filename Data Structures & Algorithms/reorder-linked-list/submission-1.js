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
     * @return {void}
     */
    reorderList(head) {
        let mid = head
        let tail = head

        while(tail.next !== null) {
            tail = tail.next
            if(tail.next) tail = tail.next

            mid = mid.next
        }

        const midNode = mid

        const stack = []

        while(mid) {
            const cur = mid
            mid = mid.next
            cur.next = null
            stack.push(cur)
        }

        let insertN = true

        let newHead = head


        while(newHead.next && newHead !== midNode) {
            if(insertN) {
                const lastNode = stack.pop()
                const temp = newHead.next
                newHead.next = lastNode
                newHead = newHead.next
                newHead.next = temp

                insertN = false
            } else {
                newHead = newHead.next
                insertN = true
            }
        }

        if(stack.length) {
            newHead.next = stack.pop()
            newHead = newHead.next
        }
        
        newHead.next = null

        return head
    }
}

// 0, 1, 2, 3, 4, 5, 6
            // |        |
