/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return node

        const map = new Map()

        let list = [node]
        const cache = new Set()

        while(list.length) {
            const newList = []

            for(let current of list) {
                if(cache.has(current)) continue

                const newNode = new Node(current.val)
                map.set(current, newNode)
                newList.push(...current.neighbors)
                cache.add(current)
            }

            list = newList
        }

        cache.clear()

        list = [node]

        while(list.length) {
            const newList = []

            for(let current of list) {
                if(cache.has(current)) continue

                const copy = map.get(current)

                for(let n of current.neighbors) {
                    newList.push(n)
                    copy.neighbors.push(map.get(n))
                }

                cache.add(current)
            }

            list = newList
        }

        return map.get(node)
    }
}
