/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    //开始思考是直接转化字符串反转或者栈结构处理
    //后面发现只要每次都能取到末尾数字就可以取反了,方法就是取模
    //加上题目对32位整数的限制，所以开始加上判断即可。
    //  判断> 2的31次方-1的边界值为21474843647 || 判断<-2的31次方

    //偷懒做法，用js的位运算
    let r = 0;
    while (x != 0) {
        r = r * 10 + x % 10;
        x = (x / 10) | 0;
    }

    return (r | 0) === r ? r : 0;
};
// @lc code=end

