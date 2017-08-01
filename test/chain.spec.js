const Chain =  require('../chain/Chain')
const snion = require('sinon')
const assert = require('chai').assert
describe('chain',function () {
    describe('#passRequest()',function () {
        it('should call with chain',function () {
            const stub1 = snion.stub().returns(Chain.nextSuccessor)
            const stub2 = snion.stub().returns(Chain.nextSuccessor)
            const stub3 = snion.stub().returnsArg(1)
            const chain1 = new Chain(stub1)
            const chain2 = new Chain(stub2)
            const chain3 = new Chain(stub3)
            chain1.setNextSuccessor(chain2).setNextSuccessor(chain3)
            assert.equal(chain1.passRequest(1,3),3)
        })
    })
    describe('#next()',function () {
        it('should call with next when async',function (done) {
            const stub1 = snion.stub().returns(Chain.nextSuccessor)
            const stub2 = function (...args) {
                const self = this
                setTimeout(function () {
                    self.next(...args)
                },1)
            }
            const stub3 = snion.stub().returns(Chain.nextSuccessor)
            const chain1 = new Chain(stub1)
            const chain2 = new Chain(stub2)
            const chain3 = new Chain(stub3)
            chain1.setNextSuccessor(chain2).setNextSuccessor(chain3).setNextSuccessor(new Chain(function (...args) {
                assert.deepEqual(args,[1,3])
                done()
            }))
            chain1.passRequest(1,3)
        })
    })
})