/**
 * Created by Ray on 2017/7/11.
 */
const throttle = function (fn,time) {
    let timeID
    let first = true
    return function () {
        const self = this
        const args = arguments
        if(first) {
            fn.apply(this, arguments)
            first = false
        }else {
            if (!timeID) {
                timeID = setTimeout(function () {
                    clearTimeout(timeID)
                    timeID = null
                    fn.apply(self, args)
                }, time)
            }
        }
    }
}
module.exports = throttle
