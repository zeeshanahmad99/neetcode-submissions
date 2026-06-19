/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = []
        const queue = new Set()

        if(root) queue.add(root)

        while(queue.size) {
            let size = queue.size

            while(size) {
                const node = queue.values().next().value
                if(node.left) queue.add(node.left)
                if(node.right) queue.add(node.right)
                if(size === 1) result.push(node.val)
                
                queue.delete(node)
                size--
            }
        }

        return result
    }
}
