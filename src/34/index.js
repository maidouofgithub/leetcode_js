//考察二分法的使用
//计算时间复杂度为O(log n)

// 算法逻辑是，先确定中间索引mid，然后确定左边界索引，最后确定右边界索引

//注意开闭区间差异
//若索引最大长度为len-1,则判断的时候要注意左右判断

const logger = require('../log');

var searchRange2 = function(nums, target) {
    function findLeft () {
        let l = 0, r = nums.length - 1
        while (l < r) {
            const mid = (l + r) >>> 1
            nums[mid] < target ? l = mid + 1 : r = mid
        }
        return nums[l] === target ? l : -1
    }
    function findRight() {
        let l = 0, r = nums.length - 1
        while (l < r) {
            const mid = (l + r + 1) >>> 1
            nums[mid] > target ? r = mid - 1 : l = mid
        }
        return nums[r] === target ? r : -1
    }
    return [findLeft(), findRight()];
}; 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {   
    function findLeft () {
        let l = 0, r = nums.length - 1
        while (l < r) {
            const mid = (l + r) >>> 1
            nums[mid] < target ? l = mid + 1 : r = mid
        }
        return nums[l] === target ? l : -1
    }
    function findRight() {
        let l = 0, r = nums.length - 1
        while (l < r) {
            const mid = (l + r + 1) >>> 1
            nums[mid] > target ? r = mid - 1 : l = mid
        }
        return nums[r] === target ? r : -1
    }
    return [findLeft(), findRight()];
};
 
//test 
let nums = [1, 2, 2, 3, 6];
let target = 6;

logger.info(nums, target);
logger.info(searchRange2(nums, target));

logger.info(searchRange(nums, target));
