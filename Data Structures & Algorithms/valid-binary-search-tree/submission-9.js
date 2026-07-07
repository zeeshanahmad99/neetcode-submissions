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
    dfs(root, left, right) {
        if(!root) return true

        if(!(left < root.val && root.val < right)) return false

        return this.dfs(root.left, left, root.val) &&
            this.dfs(root.right, root.val, right)
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.dfs(root, -Infinity, Infinity)
    }
}
