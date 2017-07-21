const createProxyFactory = function (fn) {
    const cache = {}
    return function (...args) {
        const storeKey = args.join(',')
        if(storeKey in cache){
            return cache[storeKey]
        }else {
            const result = fn.apply(this,args)
            cache[storeKey] = result
            return result
        }
    }
}
module.exports = createProxyFactory