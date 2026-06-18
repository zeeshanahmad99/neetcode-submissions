// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return head

        const cache = new Map()

        let current = head

        while(current) {
            cache.set(current, new Node(current.val))

            current = current.next
        }

        current = head

        while(current) {
            const copyNode = cache.get(current)

            copyNode.next = cache.get(current.next) ?? null

            copyNode.random = cache.get(current.random) ?? null

            current = current.next
        }

        return cache.get(head)
    }
}

