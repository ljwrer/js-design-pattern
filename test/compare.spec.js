const compare = require('../src/iterator/compare')
const assert = require('chai').assert;
describe('compare', function () {
    it('should return true if equal', function () {
        assert.isOk(compare([],[]))
        assert.isOk(compare([1],[1]))
        assert.isOk(compare([1,2,3],[1,2,3]))
    })
    it('should return false if not equal', function () {
        assert.isNotOk(compare([],[1]))
        assert.isNotOk(compare([1,2],[1,2,3,4]))
        assert.isNotOk(compare([1,2,3],[1,2,4]))
    })
})
