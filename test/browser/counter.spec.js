/**
 * Created by Ray on 2017/7/17.
 */
const Counter = require('../../vue/counter.vue')
import Vue from 'vue'
const sinon = require("sinon");
const assert = require('chai').assert;
function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}
describe('Counter', function () {
    it('has a default value 0', function () {
        const vm = getRenderedVm(Counter)
        assert.equal(vm.$props.value,0)
        assert.equal(vm.$data.currentValue,0)
    })
    it('#add', function (done) {
            const vm = getRenderedVm(Counter,{value:1})
            vm.$mount()
            vm.$on('add',function (value) {
                assert.equal(value,2)
                done()
            })
            vm.add()
            assert.equal(vm.$data.currentValue,2)
    })
    it('foo',function () {
        const vm = getRenderedVm(Counter,{value:1})
        vm.$mount()
        assert.isFunction(vm.foo)
    })
})
