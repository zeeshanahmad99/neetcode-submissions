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
    dfs(root, depth) {
        if(!root) return [true, depth - 1]

        const left = this.dfs(root.left, depth + 1)
        const right = this.dfs(root.right, depth + 1)

        const isBalanced = Math.abs(left[1] - right[1]) <= 1 && left[0] && right[0]

        return [isBalanced, Math.max(left[1], right[1])]
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root, 0)[0]
    }
}