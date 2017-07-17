/**
 * Created by Ray on 2017/7/11.
 */
const Animate = require('../../singleton/Animate')
const sinon = require("sinon");
const assert = require('chai').assert;
describe('Animate', function () {
    let animate;
    beforeEach(function () {
        animate = new Animate()
    })
    afterEach(function () {
        animate = null
    })
    describe('#start',function () {
        it('should start',function () {
            assert.isFunction(animate.start)
        })
    })
    describe('#step',function () {
        it('should step',function () {
            assert.isFunction(animate.step)
        })
    })
    describe('#update',function () {
        it('should update',function () {
            assert.isFunction(animate.update)
        })
        it('should update a',function () {
            assert.equal(animate.update(1),1)
        })
        it('should update none',function () {
            assert.equal(animate.update(),'no args')
        })
    })
})
