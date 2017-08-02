/**
 * Created by Ray on 2017/7/11.
 */
const Animate = require('../../src/strategy/Animate')
const sinon = require("sinon");
const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;
describe('Animate', function () {
    describe('#static',function () {
        it('should have static tween',function () {
            assert.isObject(Animate.tween)
        })
    })
    describe('#constructor',function () {
        const div = document.querySelector('#strategy-animate')
        const animate = new Animate(div)
        it('should have dom',function () {
            assert.instanceOf(animate,Animate)
            assert.property(animate.dom,'tagName')
        })
        it('should have default prop',function () {
            const defaultProp = {
                startPos:0,
                endPos:0,
                duration:0,
                propName:null,
                easing:null,
                startTime:0
            }
            assert.include(animate,defaultProp)
        })
    })
    describe('#start',function () {
        let div,animate;
        beforeEach(function () {
            div = document.querySelector('#strategy-animate')
            animate = new Animate(div)
            div.style.transform = ''
        })
        afterEach(function () {
            div.style.transform = ''
            div = null
            animate = null
        })
        it('should animate to destination x',function (done) {
            animate.start('x',200,500,'sineaseIn',function () {
                assert.propertyVal(animate.dom.style,'transform','translateX(200px)')
                done()
            })
        })
        it('should animate to destination y',function (done) {
            animate.start('y',200,500,'sineaseIn',function () {
                assert.propertyVal(animate.dom.style,'transform','translateY(200px)')
                done()
            })
        })
        it('should animate to destination with default',function (done) {
            animate.dom.style.transform = 'translateY(100px)'
            animate.start('y',200,500,'sineaseIn',function () {
                assert.propertyVal(animate.dom.style,'transform','translateY(200px)')
                done()
            })
        })
        it('should throw a TypeError if propName wrong',function () {
            return assert.isRejected(new Promise(function () {
                animate.start('a',200,1000,'sineaseIn')
            }), TypeError);
        })
    })
    describe('#update',function () {
        const div = document.querySelector('#strategy-animate')
        const animate = new Animate(div)
        animate.propName = 'x'
        it('should update prop value',function () {
            animate.update(100)
            assert.propertyVal(animate.dom.style,'transform','translateX(100px)')
        })
        after(function () {
            div.style.transform = ''
        })
    })
})
