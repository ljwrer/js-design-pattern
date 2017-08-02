const iterator = require('../src/iterator/iterator')
const assert = require('chai').assert;
describe('iterator', function () {
    it('should return iterator object', function () {
        const o = {foo:1}
        const obj = Object.create(o)
        Object.assign(obj,{
            bar:2,
            baz:3
        })
        for (let [key,value] of iterator(obj)) {
            assert.notEqual(key,'foo')
            if(key === 'bar'){
                assert.equal(value,2)
            }
            if(key === 'baz'){
                assert.equal(value,3)
            }
        }
    })
})
