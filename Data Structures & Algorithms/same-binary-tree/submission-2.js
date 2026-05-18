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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if((!p && q) || (p && !q)) return false

        const pStack = [p]
        const qStack = [q]

        while(pStack.length && qStack.length) {
            const size = pStack.length

            for(let i=0; i < size; i++) {
                const pNode = pStack.pop()
                const qNode = qStack.pop()

                if(!pNode && !qNode) continue
                if(pNode?.val !== qNode?.val) return false;

                if(pNode.left || pNode.right){
                    pStack.push(pNode.left)
                    pStack.push(pNode.right)
                } 
                
                if(qNode.left || qNode.right) {
                    qStack.push(qNode.left)
                    qStack.push(qNode.right)
                } 
            }
        }

        return !pStack.length && !qStack.length
    }
}
