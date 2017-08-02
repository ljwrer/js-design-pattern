/**
 * Created by Ray on 2017/7/11.
 */
const toString = Object.prototype.toString
const typeList = ['Undefined','Null','String','Number','Date','Array','Function','Object','Map','Set']
const type = typeList.reduce(function (prev,type) {
    prev[`is${type}`] = function (obj) {
        return toString.call(obj) === `[object ${type}]`
    }
    return prev
},{})
module.exports = type