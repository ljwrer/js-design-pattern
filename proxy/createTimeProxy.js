const createTimeProxy = function (fn,cb) {
    const argsQueue = []
    let timer
    return function (...args) {
        argsQueue.push(args)
        if(timer){
            return
        }else {
            timer = setTimeout(function () {
                const result = []
                while (argsQueue.length){
                    const args = argsQueue.shift()
                    const ret = fn.apply(this,args)
                    result.push(ret)
                }
                cb&&cb(result)
                clearTimeout(timer)
                timer = null
            },2000)
        }
    }
}
module.exports = createTimeProxy