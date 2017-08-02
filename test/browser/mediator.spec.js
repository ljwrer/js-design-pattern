const mediator = require('../../src/mediator/mediator')
const assert = require('chai').assert;
const pubsub = require('pubsub-js')
describe('mediator',function () {
    const root = document.querySelector('#mediator');
    const btns = root.querySelectorAll('button')
    const count = root.querySelector('.count')
    it('should be publish via mediator',function () {
        btns.forEach(btn=>{
            btn.click = ()=>{
                mediator.receive('add',btn)
            }
        })
        pubsub.subscribe('add',function (msg,data) {
            console.log(data)
            count.innerHTML = data
        })
        btns.forEach(btn=>btn.click())
        assert.equal(count.innerHTML,5)
    })
})