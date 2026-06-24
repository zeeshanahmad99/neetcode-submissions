class Twitter {
    constructor() {
        this.tweetMap = new Map();
        this.followMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, []);
        this.tweetMap.get(userId).push([this.time++, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const feed = [...(this.tweetMap.get(userId) ?? [])]

        if(this.followMap.has(userId)) {
            this.followMap.get(userId).forEach(followeeId => {
                feed.push(...(this.tweetMap.get(followeeId) ?? []))
            })
        }

        feed.sort((a, b) => b[0] - a[0])

        return feed.slice(0, 10).map(tweet => tweet[1])
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId === followeeId) return
        
        if (!this.followMap.has(followerId)) this.followMap.set(followerId, new Set());

        this.followMap.get(followerId).add(followeeId)

        // if (followerId !== followeeId) {
        //     if (!this.followMap.has(followerId))
        //         this.followMap.set(followerId, new Set());
        //     this.followMap.get(followerId).add(followeeId);
        // }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId)
        }
    }
}
