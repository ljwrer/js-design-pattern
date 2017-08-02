/**
 * Created by Ray on 2017/7/11.
 */
const currying = require('../src/clousure/currying')
const assert = require('chai').assert;
describe('curring', function () {
    it('should return a curring function', function () {
        const sum = function () {
            return [].reduce.call(arguments,function (prev,next) {
               return prev + next
            },0)
        }
        const curryingSum = currying(sum);
        curryingSum(1)
        curryingSum(2)
        curryingSum(3)
        assert.strictEqual(curryingSum(),6)
    })
})