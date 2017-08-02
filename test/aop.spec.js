const {before,after}  = require('../src/decorator/aop')
const sinon = require('sinon')
describe('before',function () {
    it('should invoke before target',function () {
        const beforeSpy = sinon.spy()
        const spy = sinon.spy()
        before(spy,beforeSpy)()
        sinon.assert.callOrder(beforeSpy,spy)
    })
})
describe('after',function () {
    it('should invoke after target',function () {
        const afterSpy = sinon.spy()
        const spy = sinon.spy()
        after(spy,afterSpy)()
        sinon.assert.callOrder(spy,afterSpy)
    })
})