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
    dfs(root, values) {
        if(!root) return values

        this.dfs(root.left, values)
        values.push(root.val)
        this.dfs(root.right, values)

        return values
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = this.dfs(root, [])

        return result[k - 1]
    }
}
