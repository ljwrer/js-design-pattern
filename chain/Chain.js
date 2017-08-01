const NextSuccessorSymbol = Symbol('nextSuccessorSymbol')
class Chain{
    static get nextSuccessor(){
        return NextSuccessorSymbol
    }
    constructor(fn){
        this.fn = fn;
        this.successor = null
    }
    setNextSuccessor(successor){
        this.successor = successor
        return successor
    }
    passRequest(...args){
        const ret = this.fn.apply(this,args)
        if(ret === NextSuccessorSymbol){
            return this.successor&&this.successor.passRequest(...args)
        }else {
            return ret
        }
    }
    next(...args){
        return this.successor&&this.successor.passRequest(...args)
    }
}
module.exports = Chain