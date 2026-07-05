class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if(!prerequisites.length) return true

        const courses = new Map()

        for(let i=0; i<numCourses; i++) {
            courses.set(i, [])
        }

        for(let [c, p] of prerequisites) {
            courses.get(c).push(p)
        }

        const cache = new Set()

        function dfs(crs) {
            if(cache.has(crs)) return false

            cache.add(crs)

            const pres = courses.get(crs)

            for(let c of pres) {
                if(!dfs(c)) return false
            }

            cache.delete(crs)

            return true
        }

        for(let i=0; i<numCourses; i++) {
            if(!dfs(i)) return false
        }        

        return true
    }
}
