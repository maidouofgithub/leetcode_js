/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length=== 0) 
        return "";
    //取第一个为参照
    let tmp = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j <= tmp.length && j < strs[i].length; j++) {
            if (tmp[j] != strs[i][j])
                break;
        }
        tmp = tmp.substr(0, j);

        if (tmp === "")
            return tmp;
    }

    return tmp;
};
// @lc code=end

