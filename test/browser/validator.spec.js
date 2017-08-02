const Validator = require('../../src/strategy/Validator')
const sinon = require("sinon");
const assert = require('chai').assert;
describe('validator',function () {
    it('#addValidateStrategy',function () {
        const maxLength = function (value,length,errorMsG = '过长') {
            if(value.length>length){
                return errorMsG
            }
        }
        Validator.addValidateStrategy('maxLength',maxLength)
        assert.equal(Validator.getValidateStrategies()['maxLength'],maxLength)
        Validator.addValidateStrategy('maxLength',maxLength)
        assert.equal(Validator.getValidateStrategies()['maxLength'],maxLength)
    })
    describe('#run',function () {
        let validator,form
        beforeEach(function () {
            validator = new Validator();
            form = document.querySelector('#strategy-validate form')
            validator.add(form.userName,{
                rule:'isNotEmpty',
                errorMsg:'用户名不能为空'
            })
            validator.add(form.password,{
                rule:'minLength:6',
                errorMsg:'密码最短为6位'
            })
            validator.add(form.phone,[
                {
                    rule:'isNotEmpty'
                },
                {
                    rule:'isMobile',
                    errorMsg:'请填写正确的手机号码'
                }
            ])
            validator.add(form.id,[
                {
                    rule:'minLength:6'
                },
                {
                    rule:'maxLength:10'
                }
            ])
        })
        afterEach(function () {
            validator = null
            form.querySelectorAll('input').forEach(input=>input.value = '')
        })
        it('should return empty msg if validate',function () {
            const values = {
                userName:'ljw',
                password:123456,
                phone:13500000000,
                id:12345678
            }
            Object.keys(values).forEach(key=>form[key].value=values[key])
            assert.notExists(validator.run())
        })
        it('should return error msg if not validate',function () {
            const values1 = {
                userName:'ljw',
                password:123456,
                phone:13500000000,
                id:'12345678910abcde'
            }
            Object.keys(values1).forEach(key=>form[key].value=values1[key])
            assert.equal('过长',validator.run().errorMsg)
            const values2 = {
                userName:'',
                password:12345,
                phone:50000000000,
                id:'12345678910abcde'
            }
            Object.keys(values2).forEach(key=>form[key].value=values2[key])
            assert.equal('用户名不能为空',validator.run().errorMsg)
        })
    })

})