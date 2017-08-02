/**
 * Created by Ray on 2017/7/11.
 */
const getSingle = require('../src/singleton/getSingle')
const sinon = require("sinon");
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
        const stub = sinon.stub().returns(true)
        const run = getSingle(stub);
        for(let i =0;i<100;i++){
            run()
        }
        sinon.assert.calledOnce(stub)
    })
})
