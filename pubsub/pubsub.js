const event = {
    clientList:{},
    listen(key,fn){
        if(!this.clientList.hasOwnProperty(key)){
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger(key,...args){
        const fns = this.clientList[key]
        if(!fns||!fns.length){
            return
        }else {
            fns.forEach(fn=>{
                fn.apply(this,args)
            })
        }
    },
    remove(key,fn){
        const fns = this.clientList[key]
        if(!fns) return
        const len = fns.length
        /* istanbul ignore if */
        if(!len) return
        for (let i = len; i >0; i--) {
            const _fn = fns[i-1];
            if(fn===_fn){
                fns.splice(i-1,1)
            }
        }
    },
    once(key,fn){
        const _fn = function () {
            this.remove(key,_fn)
            return fn.apply(this,arguments)
        }
        this.listen(key,_fn)
    },
    clear(){
        this.clientList = {}
    }
}
module.exports = {
    install(obj){
        Object.assign(obj,event)
    },
    quickInstall(obj){
        obj.clientList = {}
        Object.setPrototypeOf(obj,event)
    }
}
