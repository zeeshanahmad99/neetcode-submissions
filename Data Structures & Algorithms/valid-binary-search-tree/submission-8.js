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
    dfs(root, min, max) {
        if (!root) return true;

        if (root.left && root.left.val >= root.val) return false;
        if (root.right && root.right.val <= root.val) return false;

        if (min !== null && root.val <= min) return false;
        if (max !== null && root.val >= max) return false;

        return (
            this.dfs(root.left, min, Math.min(max, root.val)) &&
            this.dfs(root.right, Math.max(root.val, min), max)
        );
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.dfs(root, -Infinity, Infinity);
    }
}

//   8
// 3   9
//    7  10

//     5
//   4    6
//       3  7
