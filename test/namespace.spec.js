/**
 * Created by Ray on 2017/7/11.
 */
const namespace = require('../src/singleton/namespace')
const assert = require('chai').assert;
describe('namespace', function () {
    let root = {}
    beforeEach(function () {
        root = {}
    })
    it('should create space', function () {
        namespace(root,'aa')
        assert.isOk(root.hasOwnProperty('aa'))
    })
    it('should use exist name space', function () {
        namespace(root,'aa.bb.cc')
        assert.isOk(root.aa.bb.hasOwnProperty('cc'))
        namespace(root,'aa.bb.cc.dd.ee')
        assert.isOk(root.aa.bb.cc.dd.hasOwnProperty('ee'))
    })
})
