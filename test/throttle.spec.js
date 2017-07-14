/**
 * Created by Ray on 2017/7/11.
 */
const throttle = require('../clousure/throttle')
const sinon = require('sinon')
describe('throttle', function () {
    let clock;
    before(function () {
        clock = sinon.useFakeTimers();
    })
    after(function () {
        clock.restore()
    })
    it('should be throttle', function (done) {
        const spy = sinon.spy()
        const throttleSpy = throttle(spy,1000)
        const tid = setInterval(function () {
            throttleSpy()
        },600)
        clock.tick(10000)
        clearInterval(tid)
        sinon.assert.callCount(spy, 8)
        done()
    })
})
