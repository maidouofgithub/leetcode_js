
const log = require('../log');
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0;
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]< nums[i+1])count++; 
    } 
    return count>1?false:true;
};

log.info( checkPossibility([4,2,3]));