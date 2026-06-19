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
    dfs(root, cache, result, depth) {
        if(!root) return result
        
        if(!cache[depth]) {
            result.push(root.val)
            cache[depth] = true
        }

        this.dfs(root.right, cache, result, depth + 1)
        this.dfs(root.left, cache, result, depth + 1)
        return result
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        return this.dfs(root, {}, [], 0)
    }
}
