const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

class TrieNode {
    constructor(val) {
        this.val = val;
        this.children = new Map();
        this.end = false;
    }
}

class Solution {
    constructor() {
        this.trie = new TrieNode();
    }

    buildTrie(word) {
        let prev = this.trie;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (prev.children.has(char)) {
                prev = prev.children.get(char);
            } else {
                const newTrie = new TrieNode(char);
                prev.children.set(char, newTrie);
                prev = newTrie;
            }

            if (i === word.length - 1) {
                prev.end = true;
            }
        }
    }

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        for (let word of words) {
            this.buildTrie(word);
        }

        const ROW = board.length;
        const COL = board[0].length;

        const result = new Set();
        const cache = new Set();

        function dfs(row, col, trie, word) {
            if (trie.end) {
                result.add(word.join(""));
            }

            const cacheKey = `${row},${col}`;

            if (
                row < 0 ||
                row >= ROW ||
                col < 0 ||
                col >= COL ||
                !trie.children.has(board[row][col]) ||
                cache.has(cacheKey)
            )
                return false;

            const cell = board[row][col];
            word.push(cell);
            cache.add(cacheKey);

            const nextTrie = trie.children.get(cell);

            for (let [rd, cd] of directions) {
                dfs(row + rd, col + cd, nextTrie, word);
            }

            word.pop();
            cache.delete(cacheKey);
        }

        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                dfs(row, col, this.trie, []);
            }
        }

        return Array.from(result.values());
    }
}

// ["o","a","a","n"]
// ["e","t","a","e"]
// ["i","h","k","r"]
// ["i","f","l","v"]
