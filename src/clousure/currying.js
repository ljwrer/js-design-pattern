/**
 * Created by Ray on 2017/7/11.
 */
const currying = function (fn) {
    const args = [].slice.call(arguments,1)
    return function () {
        if(arguments.length===0){
            return fn.apply(this,args)
        }else {
            [].push.apply(args,arguments)
        }
    }
}
module.exports = currying