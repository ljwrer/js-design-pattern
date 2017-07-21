const type = require('../object/type')
const toArray = item => type.isArray(item) ? item : [item]
/* istanbul ignore next */
const validateStrategies = {
    isNotEmpty: function (value, errorMsg = '不能为空') { // 不为空
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function (value, length, errorMsg = '过短') { // 限制最小长度
        if (value.trim().length < length) {
            return errorMsg;
        }
    },
    isMobile: function (value, errorMsg = '非法的手机号码') { // 手机号码格式
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};

class Validator {
    constructor() {
        this.validateList = []
    }

    static addValidateStrategy(name, strategy) {
        if (validateStrategies.hasOwnProperty(name)) {
            console.warn(`validate strategy ${name} has override`)
        }
        validateStrategies[name] = strategy
    }

    static getValidateStrategies(){
        return validateStrategies
    }

    add(dom, rules) {
        rules = toArray(rules)
        this.validateList.push({dom, rules})
    }

    run() {
        for (let {dom,rules} of this.validateList) {
            const value = dom.value
            for(let {rule,errorMsg} of rules){
                const ruleArgs = rule.split(':')
                if(errorMsg){
                    ruleArgs.push(errorMsg)
                }
                const validateStrategy = ruleArgs.shift()
                ruleArgs.unshift(value)
                const validateErrorMsg = validateStrategies[validateStrategy].apply(this,ruleArgs)
                if(validateErrorMsg){
                    return {dom,errorMsg:validateErrorMsg}
                }
            }
        }
    }
}
module.exports = Validator