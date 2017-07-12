/**
 * Created by Ray on 2017/7/11.
 */
const namespace = require('../singleton/namespace')
const assert = require('chai').assert;
describe('namespace', function () {
    let root = {}
    beforeEach(function () {
        root = {}
    })
    it('one space', function () {
        namespace(root,'aa')
        assert.isOk(root.hasOwnProperty('aa'))
    })
    it('three space', function () {
        namespace(root,'aa.bb.cc')
        assert.isOk(root.aa.bb.hasOwnProperty('cc'))
    })
    it('five space', function () {
        namespace(root,'aa.bb.cc.dd.ee')
        assert.isOk(root.aa.bb.cc.dd.hasOwnProperty('ee'))
    })
})
