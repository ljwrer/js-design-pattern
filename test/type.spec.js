/**
 * Created by Ray on 2017/7/11.
 */
const type = require('../object/type')
const assert = require('chai').assert;
describe('type', function () {
    // 'Undefined','Null','String','Number','Date','Array','Function','Object','Map','Set'
    const allType = [undefined,null,'',0,new Date(),[],()=>{},{},new Map(),new Set()]
    describe('undefined',function () {
        it('test undefined', function () {
            allType.forEach(function (item,index) {
                if(index === 0){
                    assert.isTrue(type.isUndefined(item))
                }else {
                    assert.isFalse(type.isUndefined(item))
                }
            })
        })
    })
    describe('null',function () {
        it('test null', function () {
            allType.forEach(function (item,index) {
                if(index === 1){
                    assert.isTrue(type.isNull(item))
                }else {
                    assert.isFalse(type.isNull(item))
                }
            })
        })
    })
    describe('string',function () {
        it('test string', function () {
            allType.forEach(function (item,index) {
                if(index === 2){
                    assert.isTrue(type.isString(item))
                }else {
                    assert.isFalse(type.isString(item))
                }
            })
        })
    })
    describe('number',function () {
        it('test number', function () {
            allType.forEach(function (item,index) {
                if(index === 3){
                    assert.isTrue(type.isNumber(item))
                }else {
                    assert.isFalse(type.isNumber(item))
                }
            })
        })
    })
    describe('date',function () {
        it('test date', function () {
            allType.forEach(function (item,index) {
                if(index === 4){
                    assert.isTrue(type.isDate(item))
                }else {
                    assert.isFalse(type.isDate(item))
                }
            })
        })
    })
    describe('array',function () {
        it('test array', function () {
            allType.forEach(function (item,index) {
                if(index === 5){
                    assert.isTrue(type.isArray(item))
                }else {
                    assert.isFalse(type.isArray(item))
                }
            })
        })
    })
    describe('function',function () {
        it('test function', function () {
            allType.forEach(function (item,index) {
                if(index === 6){
                    assert.isTrue(type.isFunction(item))
                }else {
                    assert.isFalse(type.isFunction(item))
                }
            })
        })
    })
    describe('plain object',function () {
        it('test plain object', function () {
            allType.forEach(function (item,index) {
                if(index === 7){
                    assert.isTrue(type.isObject(item))
                }else {
                    assert.isFalse(type.isObject(item))
                }
            })
        })
    })
    describe('map',function () {
        it('test map', function () {
            allType.forEach(function (item,index) {
                if(index === 8){
                    assert.isTrue(type.isMap(item))
                }else {
                    assert.isFalse(type.isMap(item))
                }
            })
        })
    })
    describe('set',function () {
        it('test set', function () {
            allType.forEach(function (item,index) {
                if(index === 9){
                    assert.isTrue(type.isSet(item))
                }else {
                    assert.isFalse(type.isSet(item))
                }
            })
        })
    })

})