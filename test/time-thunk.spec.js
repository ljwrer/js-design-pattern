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
        const timeThunkAdd = timeThunk(source,add,20,20)
        timeThunkAdd()
        setTimeout(function () {
            assert.lengthOf(dist,60)
        },45)
        setTimeout(function () {
            assert.lengthOf(dist,80)
        },65)
        setTimeout(function () {
            assert.lengthOf(dist,100)
            done()
        },105)
    })
})
