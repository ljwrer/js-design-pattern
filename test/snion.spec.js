/**
 * Created by Ray on 2017/7/11.
 */
const sinon = require('sinon')
const assert = require('chai').assert
const PubSub = require('pubsub-js')
const axios = require('axios')
const obj = {
    foo(){
        console.log(1)
    }
}
describe('sinon', function () {
    it('spy should be equal origin function', function () {
        const spy = sinon.spy(obj,'foo')
        assert.deepEqual(spy,obj.foo)
    })
    it('test should call subscribers with message as first argument',function () {
        const message = 'an example message';
        const spy = sinon.spy();
        const s = "some payload";
        PubSub.subscribe(message, spy);
        PubSub.publishSync(message, s);
        assert.isOk(spy.calledWith(message));
        assert.isOk(spy.calledWith(message,s));
        assert.equal(spy.args[0][0],message);
        assert.equal(spy.args[0][1],s);
    })
    it('test stub',function () {
        const foo = sinon.spy()
        const stub = sinon.stub().callsArg(1)
        stub(0,foo)
        sinon.assert.calledOnce(foo)
        const stub1 = sinon.stub().yields(1)
        stub1(foo)
        sinon.assert.calledWith(foo,1)
    })
    it('ajax',function () {
        var post = sinon.stub(axios, 'post');
        post.yields(10);
        function saveUser(user, callback) {
            axios.post('/users', {
                first: user.firstname,
                last: user.lastname
            },callback);
        }

        // 针对回调函数使用一个spy
        var callback = sinon.spy();

        saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

        // post.restore();
        sinon.assert.calledOnce(callback);
        sinon.assert.calledWith(callback,10);
    })
})
