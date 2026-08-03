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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // console.log(preorder, inorder);
        if (!preorder.length || !inorder.length) return null;

        const rootVal = preorder[0];
        const root = new TreeNode(rootVal);

        if (preorder.length === 1) return root;

        const inorderIndex = inorder.findIndex((val) => val === rootVal);

        const hasLeft = inorderIndex !== 0;
        const hasRight = inorderIndex !== inorder.length - 1;

        const preorderIndex1 = preorder.findIndex((val) => val === inorder[inorderIndex - 1]);
        const preorderIndex2 = preorder.findIndex((val) => val === inorder[0]);

        const preorderIndex = Math.max(preorderIndex1, preorderIndex2)

        root.left = hasLeft
            ? this.buildTree(preorder.slice(1, preorderIndex + 1), inorder.slice(0, inorderIndex))
            : null;

        root.right = hasRight
            ? this.buildTree(
                  inorderIndex === 0 ? preorder.slice(1) : preorder.slice(preorderIndex + 1),
                  inorder.slice(inorderIndex + 1),
              )
            : null;

        return root;
    }
}
