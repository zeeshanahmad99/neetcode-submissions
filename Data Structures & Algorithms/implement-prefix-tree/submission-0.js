class TreeNode {
    constructor(val) {
        this.val = val;
        this.mark = false
        this.children = new Map();
    }
}

class PrefixTree {
    constructor() {
        this.root = new TreeNode(null);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;

        for (let i=0; i<word.length; i++) {
            let char = word[i]

            if (!current.children.has(char)) {
                const newNode = new TreeNode(char);
                current.children.set(char, newNode);
                current = newNode;
            } else {
                current = current.children.get(char);
            }

            if(i === word.length - 1) {
                current.mark = true
            }
        }
    }

    find(word, partial = false) {
        let current = this.root;

        for (let i=0; i<word.length; i++) {
            let char = word[i]

            if (!current.children.has(char)) {
                return false;
            } else {
                current = current.children.get(char);
            }

            if((i === word.length - 1 && !current.mark) && !partial) {
                return false
            }
        }

        return true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.find(word)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.find(prefix, true);
    }
}
