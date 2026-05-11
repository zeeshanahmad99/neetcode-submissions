class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return "";

        const sizes = [];

        for (let i = 0; i < strs.length; i++) {
            sizes[i] = strs[i].length;
        }

        return sizes.join(",") + "#" + strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];

    const hashIndex = str.indexOf("#");

    const sizes = str.slice(0, hashIndex).split(",");

    let i = hashIndex + 1,
      sizeIndex = 0;

    const decodedStrs = [];

    do {
      const size = Number(sizes[sizeIndex++]);
      const originalStr = str.slice(i, i + size);

      decodedStrs.push(originalStr);
      i += size;
    } while (i < str.length && sizeIndex < sizes.length);

    return decodedStrs;
    }
}
