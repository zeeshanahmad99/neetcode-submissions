class TreeNode {
    constructor(val = null) {
        this.val = val
        this.children = new Map()
        this.end = false
    }
}


class WordDictionary {
    constructor() {
        this.trie = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let prev = this.trie

        for(let i = 0; i<word.length; i++) {
            const char = word[i]

            if(prev.children.has(char)) {
                prev = prev.children.get(char)
            } else {
                const node = new TreeNode(char)
                prev.children.set(char, node)
                prev = node
            }

            if(i === word.length - 1) {
                prev.end = true
            }
        }
    }

    dfs(prev, word, index) {
        if(!prev) return false
        if(index >= word.length && prev.end) return true

        const char = word[index]

        if(char !== '.') {
            return this.dfs(prev.children.get(word[index]), word, index + 1)
        } else {
            for(let cNode of prev.children.values()) {
                if(this.dfs(cNode, word, index + 1)) return true
            }
        }

        return false
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // if(word[0] !== '.') {
            return this.dfs(this.trie, word, 0)
        // } 
        // return false
        /* else {
            for(let cNode of this.trie.values()) {
                if(this.dfs(cNode, word, 0)) return true
            }
        }


        return false */
    }
}