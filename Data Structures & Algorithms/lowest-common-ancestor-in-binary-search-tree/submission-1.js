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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(!root) return null

        const result = []

        const node1 = this.lowestCommonAncestor(root.left, p, q)
        if(node1) result.push(node1)

        const node2 = this.lowestCommonAncestor(root.right, p, q)
        if(node2) result.push(node2)

        if(root.val === p.val || root.val === q.val) {
            if(result.length) result.push(root)
            else return root
        }

        console.log(root.val, result.length)

        if(result.length === 2) return root

        return node1 || node2
    }
}
