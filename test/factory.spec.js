/**
 * Created by Ray on 2017/7/11.
 */
const factory = require('../object/factory')
const assert = require('chai').assert;
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function () {
    return `${this.name} ${this.age}`
}
describe('factory', function () {
    it('should return a new Object', function () {
        assert.strictEqual(factory(Person, 'ray', 18).say(),"ray 18")
    })
})