/**
 * Created by Ray on 2017/7/11.
 */
const uncurrying = function (fn) {
    return function () {
        const obj = [].shift.call(arguments)
        return fn.apply(obj,arguments)
    }
}
/* istanbul ignore next */
Function.prototype.uncurrying1 = function () {
    const self = this
    return function () {
        const obj = [].shift.call(arguments)
        return self.apply(obj,arguments)
    }
}
/* istanbul ignore next */
Function.prototype.uncurrying2 = function () {
    const self = this
    return function () {
        return Function.prototype.call.apply(self,arguments)
    }
}
/* istanbul ignore next */
Function.prototype.uncurrying3 = function () {
    return (...args)=>this.apply(...args)
}
module.exports = uncurrying
