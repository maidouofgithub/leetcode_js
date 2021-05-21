/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var arr = [...String(x)]
    for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; j--, i++) {
        if (arr[i] != arr[j]) {
            return false
        }
    }
    return true 
};
// @lc code=end

