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

class Codec {
    preOrder(root, depth, result) {
        if(depth === 0 && !root) return ''

        result[0] += result[0] ? "," : "";
        result[0] += root ? root.val : "N";

        if (!root) return;

        this.preOrder(root.left, depth + 1, result);
        this.preOrder(root.right, depth + 1, result);
    }

    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const result = [0];
        this.preOrder(root, 0, result);
        return result[0];
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let index = 0;

        function dfs() {
            let char = "";

            while (data[index] !== "," && index < data.length) {
                char += data[index];
                index++;
            }

            index++;

            if (!char || char === "N") return null;

            const node = new TreeNode(Number(char));

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
