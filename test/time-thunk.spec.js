/**
 * Created by Ray on 2017/7/11.
 */
const timeThunk = require('../clousure/time-chunk')
const assert = require('chai').assert;
describe('timeThunk', function () {
    it('should be timeThunk', function (done) {
        const source = Array(100).fill(null)
        const dist = []
        const add = function (item) {
            dist.push(item)
        }
        const timeThunkAdd = timeThunk(source,add,20,10)
        timeThunkAdd()
        setTimeout(function () {
            assert.lengthOf(dist,60)
        },25)
        setTimeout(function () {
            assert.lengthOf(dist,80)
        },35)
        setTimeout(function () {
            assert.lengthOf(dist,100)
            done()
        },55)
    })
})
