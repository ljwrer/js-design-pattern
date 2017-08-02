const assert = require('chai').assert
const sinon = require('sinon')
const createProxyFactory = require('../src/proxy/createProxyFactory')
const createTimeProxy = require('../src/proxy/createTimeProxy')
describe('proxy factory',function () {
    it('should use cache when invoke with repeat args',function () {
        const stub = sinon.stub()
        stub.withArgs(1).returns(0)
        stub.withArgs(1,2).returns(1)
        stub.withArgs(2,3,4).returns(2)
        const proxyStub = createProxyFactory(stub)
        assert.equal(proxyStub(1),0)
        assert.equal(proxyStub(1,2),1)
        assert.equal(proxyStub(2,3,4),2)
        assert.equal(proxyStub(1),0)
        assert.equal(proxyStub(1,2),1)
        assert.equal(proxyStub(2,3,4),2)
        assert.equal(proxyStub(1),0)
        assert.equal(proxyStub(1,2),1)
        assert.equal(proxyStub(2,3,4),2)
        sinon.assert.calledThrice(stub)
    })
})
describe('proxy time',function () {
    let clock;
    before(function () {
        clock = sinon.useFakeTimers();
    })
    after(function () {
        clock.restore()
    })
    it('should invoke in batch',function () {
        const stub = sinon.stub().returnsArg(0)
        const spy = sinon.spy()
        const proxyStub = createTimeProxy(stub,spy)
        const args =[]
        for (let i=0;i<15;i++){
            setTimeout(function () {
                proxyStub(i,spy)
                args.push(i)
            },i*100)
        }
        clock.tick(1000)
        sinon.assert.notCalled(spy)
        sinon.assert.notCalled(stub)
        clock.tick(3000)
        sinon.assert.calledOnce(spy)
        sinon.assert.callCount(stub,15)
        sinon.assert.calledWith(spy,args)
    })
})