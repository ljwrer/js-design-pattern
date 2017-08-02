const NextSuccessorSymbol = Symbol('nextSuccessorSymbol')
const chain = function (fn,nextFn) {
    return function (...args) {
        const ret = fn(...args)
        if(ret===NextSuccessorSymbol){
            return nextFn(...args)
        }else {
            return ret
        }
    }
}
chain.nextSuccessor = NextSuccessorSymbol
module.exports = chain