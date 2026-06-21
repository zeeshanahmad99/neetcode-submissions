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
    dfs(root, res) {
        if(!root) return 0

        const left = this.dfs(root.left, res) 
        const right = this.dfs(root.right, res)

        const sum = left + right
        res[0] = Math.max(res[0], sum)

        return Math.max(left, right) + 1
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const res = [0]
        this.dfs(root, res)
        return res[0]
    }
}
