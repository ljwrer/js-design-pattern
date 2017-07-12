/**
 * Created by Ray on 2017/7/11.
 */
const getSingle = require('../singleton/getSingle')
const assert = require('chai').assert;
class Person{
    constructor(name){
        this.name = name;
    }
}
describe('getSingle', function () {
    it('should return a singleton object', function () {
        const getSinglePerson = getSingle(function (...args) {
            return new Person(...args)
        });
        const Amy = getSinglePerson('Amy')
        const Ben = getSinglePerson('Ben')
        const Carol = getSinglePerson('Carol')
        assert.propertyVal(Amy,'name','Amy')
        assert.strictEqual(Ben,Amy)
        assert.strictEqual(Carol,Amy)
    })
    it('should involve only once', function () {
        const list = []
        const push = getSingle(function () {
            list.push(list.length)
            return true
        });
        push()
        push()
        push()
        push()
        push()
        assert.lengthOf(list,1)
    })
})
