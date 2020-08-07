//console.log('hello js!');
//处理方式，采用栈结构匹配数据
//遇到左括号则压入栈，遇到右括号则出栈

const logger = require('../log');

/**
 * @param {string} s
 * @return {boolean}
 */
var IsValid = function (s) {
    let arr = []
    let len = s.length
    if (len%2) return false
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch(letter) {
            case "(": {
                arr.push(letter)
                break;
            } 
            case "{": {
                arr.push(letter)
                break;
            }
            case "[": {
                arr.push(letter)
                break;
            }
            case ")": {
                if (arr.pop() !== "(") return false
                break;
            } 
            case "}": {
                if (arr.pop() !== "{") return false
                break;
            }
            case "]": {
                if (arr.pop() !== "[") return false
               break;
           }
        }
    }
    return !arr.length;
}

logger.info('=== test ===');

logger.info(IsValid("{}"));

logger.info(IsValid("()[]{}"));


logger.info(IsValid( "([)]"));
