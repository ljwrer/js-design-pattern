const objectPoolFactory = require('../pool/objectPoolFactory')
const assert = require('chai').assert
class Foo{

}
const createFoo = function () {
    return new Foo(arguments)
}
describe('pool',function () {
    it('should user recover obj if exist',function (done) {
        const createFooInPool = objectPoolFactory(createFoo)
        const foo1 = createFooInPool.create()
        const foo2 = createFooInPool.create()
        let foo3
        createFooInPool.recover(foo1)
        setTimeout(function () {
            foo3 = createFooInPool.create()
            assert.equal(foo1,foo3)
            done()
        },0)
    })
})