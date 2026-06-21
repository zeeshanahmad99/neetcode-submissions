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
    dfs(root, values, k) {
        if(!root) return values
        if(values.length === k) return values

        this.dfs(root.left, values, k)
        values.push(root.val)
        this.dfs(root.right, values, k)

        return values
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = this.dfs(root, [], k)

        return result[k - 1]
    }
}
