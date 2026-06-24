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
        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId);

        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                const tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1;
                const [time, tweetId] = tweets[index];
                maxHeap.enqueue([time, tweetId, followeeId, index - 1]);
            }
        }

        const result = [];

        while (!maxHeap.isEmpty() && result.length < 10) {
            const [time, tweetId, followeeId, nextIndex] = maxHeap.dequeue();
            result.push(tweetId);

            if (nextIndex >= 0) {
                const [olderTime, olderTweetId] = this.tweetMap.get(followeeId)[nextIndex];
                maxHeap.enqueue([olderTime, olderTweetId, followeeId, nextIndex - 1]);
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        if (!this.followMap.has(followerId)) this.followMap.set(followerId, new Set());

        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
