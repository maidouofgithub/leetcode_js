/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * 考察二分法查找
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length;
    let left = 0, right = len - 1;

    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            len = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return len;
};

//直觉写法，数据量大不适用，考察二分法
// var searchInsert = function (nums, target) {
//     let index = 0;

//     if (nums[0] > target) return index;

//     for (let i = 1; i < nums.length - 1; i++) {
//         if (nums[i] >= target) {
//             index = i - 1;
//             return index;
//         }
//     }

//     return index;
// };
// @lc code=end

