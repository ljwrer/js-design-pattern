/**
 * Created by Ray on 2017/7/12.
 */
const ProxySingleton = function (fn) {
    let instance
    return function () {
        return instance || (instance = new fn(arguments))
    }
}
const getSingle = function (fn) {
    let instance
    return function () {
        return instance || (instance = fn.apply(this,arguments))
    }
}
module.exports = getSingle