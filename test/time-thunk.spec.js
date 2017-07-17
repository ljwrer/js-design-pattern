/**
 * Created by Ray on 2017/7/11.
 */
const timeThunk = require('../clousure/time-chunk')
const sinon = require('sinon')
const assert = require('chai').assert;
describe('timeThunk', function () {
    it('should be timeThunk', function () {
        const clock = sinon.useFakeTimers();
        const spy = sinon.spy()
        const timeThunkAdd = timeThunk(Array(100).fill(null),spy,20,1000)
        timeThunkAdd()
        clock.tick(2500)
        sinon.assert.callCount(spy,60)
        clock.tick(1000)
        sinon.assert.callCount(spy,80)
        clock.tick(2000)
        sinon.assert.callCount(spy,100)
        clock.restore()
    })
    it('should be have default count to 1', function () {
        const clock = sinon.useFakeTimers();
        const spy = sinon.spy()
        const timeThunkAdd = timeThunk(Array(10).fill(null),spy,undefined,1000)
        timeThunkAdd()
        clock.tick(2500)
        sinon.assert.callCount(spy,3)
        clock.tick(1000)
        sinon.assert.callCount(spy,4)
        clock.tick(2000)
        sinon.assert.callCount(spy,6)
        clock.restore()
    })
})
