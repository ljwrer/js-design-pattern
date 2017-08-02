const pubSub = require('../src/pubsub/pubsub')
const assert = require('chai').assert
const sinon = require('sinon')
describe('pubsub',function () {
    describe('#install', function () {
        it('should add all prop', function () {
            const event = {}
            pubSub.install(event)
            assert.containsAllKeys(event, ['clientList', 'listen', 'trigger', 'remove', 'once', 'clear'])
        })
    })
    describe('#quickInstall', function () {
        it('should add only clientList prop', function () {
            const event = {}
            pubSub.quickInstall(event)
            assert.containsAllKeys(event, ['clientList'])
            assert.doesNotHaveAnyKeys(event, ['listen', 'trigger', 'remove', 'once', 'clear'])
            assert.containsAllKeys(Object.getPrototypeOf(event), ['listen', 'trigger', 'remove', 'once', 'clear'])
        })
    })
    describe('#listen', function () {
        it('should add cb to client list', function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.listen('one', spy)
            quickEvent.listen('one', spy)
            assert.oneOf(spy, event.clientList.one)
            assert.oneOf(spy, quickEvent.clientList.one)
        })
    })
    describe('#trigger', function () {
        it('should trigger cb with provide args', function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            const quickSpy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.listen('one', spy)
            quickEvent.listen('one', quickSpy)
            event.trigger('one', 'hello', 'world')
            sinon.assert.calledOnce(spy)
            sinon.assert.calledOn(spy, event)
            sinon.assert.calledWith(spy, 'hello', 'world')
            event.trigger('one', 'hello', 'world')
            sinon.assert.calledTwice(spy)
            quickEvent.trigger('one', 'hello', 'world')
            sinon.assert.calledOnce(quickSpy)
            sinon.assert.calledOn(quickSpy, quickEvent)
            sinon.assert.calledWith(quickSpy, 'hello', 'world')
        })
    })
    describe('#remove', function () {
        it('should not trigger cb after remove', function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            const quickSpy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.listen('one', spy)
            quickEvent.listen('one', quickSpy)
            event.remove('one', spy)
            event.remove('one', spy)
            event.remove('one', spy)
            quickEvent.remove('one', quickSpy)
            event.trigger('one', 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            sinon.assert.notCalled(spy)
            sinon.assert.notCalled(quickSpy)
        })
        it('should pass when not listener',function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            const quickSpy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.remove('one', spy)
            event.remove('one', spy)
            quickEvent.remove('one', quickSpy)
            quickEvent.remove('one', quickSpy)
            sinon.assert.notCalled(spy)
            sinon.assert.notCalled(quickSpy)
        })
    })
    describe('#once', function () {
        it('should be called only once with args', function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            const quickSpy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.once('one', spy)
            quickEvent.once('one', quickSpy)
            event.trigger('one', 'hello', 'world')
            event.trigger('one', 'hello', 'world')
            event.trigger('one', 'hello', 'world')
            event.trigger('one', 'hello', 'world')
            sinon.assert.calledOnce(spy)
            sinon.assert.calledOn(spy, event)
            sinon.assert.calledWith(spy, 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            sinon.assert.calledOnce(quickSpy)
            sinon.assert.calledOn(quickSpy, quickEvent)
            sinon.assert.calledWith(quickSpy, 'hello', 'world')
        })
    })
    describe('#clear', function () {
        it('should remove all event', function () {
            const event = {}
            const quickEvent = {}
            const spy = sinon.spy()
            const quickSpy = sinon.spy()
            pubSub.install(event)
            pubSub.quickInstall(quickEvent)
            event.listen('one', spy)
            quickEvent.listen('one', quickSpy)
            event.clear()
            quickEvent.clear()
            event.trigger('one', 'hello', 'world')
            quickEvent.trigger('one', 'hello', 'world')
            sinon.assert.notCalled(spy)
            sinon.assert.notCalled(quickSpy)
            assert.lengthOf(Object.keys(event.clientList),0)
            assert.lengthOf(Object.keys(quickEvent.clientList),0)
        })
    })
})