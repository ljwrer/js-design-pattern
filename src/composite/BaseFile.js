class BaseFile{
    constructor(name){
        this.name = name
        this.parent = null
    }
    /* istanbul ignore next */
    execute(){
       throw new Error('execute must be implement')
    }
    remove(){
        if(!this.parent) return
        const len = this.parent.files.length
        for (let i = len - 1; i >= 0; i--) {
            const file = this.parent.files[i]
            if(file === this){
                this.parent.files.splice(i,1)
            }
        }
    }
}
module.exports = BaseFile