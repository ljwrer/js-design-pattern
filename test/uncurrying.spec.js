/**
 * Created by Ray on 2017/7/11.
 */
const uncurrying = require('../clousure/uncurrying')
const assert = require('chai').assert;
describe('uncurring', function () {
    it('should return a uncurring function', function () {
        const push = uncurrying(Array.prototype.push)
        const obj = {
            '0':0,
            length:1
        }
        push(obj,1,2,3)
        assert.strictEqual(obj[1],1)
        assert.strictEqual(obj[2],2)
        assert.strictEqual(obj[3],3)
        assert.strictEqual(obj.length,4)
    })
})