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
    dfs(root, result, depth) {
        if(!root) return result

        if(!result[depth]) result[depth] = []

        result[depth].push(root.val)

        this.dfs(root.left, result, depth + 1)
        this.dfs(root.right, result, depth + 1)

        return result
    }

    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    zigzagLevelOrder(root) {
        const result = this.dfs(root, [], 0)

        for(let i=0; i<result.length; i++) {
            const vals = result[i]

            if(i%2 !== 0) {
                result[i] = vals.reverse()
            }
        }

        return result
    }
}




