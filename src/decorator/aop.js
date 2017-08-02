const before = function (fn,beforeFn) {
    return new Proxy(fn,{
        apply(){
            beforeFn.apply(this,arguments)
            fn.apply(this,arguments)
        }
    })
}
const after = function (fn,afterFn) {
    return new Proxy(fn,{
        apply(){
            fn.apply(this,arguments)
            afterFn.apply(this,arguments)
        }
    })
}
module.exports = {
    before,
    after
}