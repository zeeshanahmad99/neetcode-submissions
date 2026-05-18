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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root
        
        const stack = [root]

        while(stack.length) {
            const current = stack.pop()
            const temp = current.left
            current.left = current.right
            current.right = temp

            if(current.left) stack.push(current.left)
            if(current.right) stack.push(current.right)
        }

        return root
    }
}
