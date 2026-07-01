class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        const single = [];

        for (let [key, val] of Object.entries(count)) {
            if (val === 1) {
                single.push(key);
                delete count[key];
            } else if (val % 2 !== 0) {
                single.push(key);
                count[key]--;
            }
        }

        let str = single.pop() || '';

        while (true) {
            const found = Object.entries(count).find(([char, n]) => n >= 2);

            if (!found) {
                break;
            } else {
                str = `${found[0]}${str}${found[0]}`;
                count[found[0]] -= 2;
            }
        }

        return str.length;
    }
}
