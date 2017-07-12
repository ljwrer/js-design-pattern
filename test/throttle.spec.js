/**
 * Created by Ray on 2017/7/11.
 */
const throttle = require('../clousure/throttle')
const assert = require('chai').assert;
describe('throttle', function () {
    it('should be throttle', function (done) {
        const arr = []
        const add = function () {
            arr.push(arr.length)
        }
        const throttleAdd = throttle(add,10)
        for (let i=0;i<10;i++){
            setTimeout(function () {
                throttleAdd()
                if(i===9){
                    assert.lengthOf(arr,3)
                    done()
                }
            },3*i)
        }
    })
})
