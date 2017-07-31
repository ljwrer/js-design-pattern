const BaseFile = require('./BaseFile')
class File extends BaseFile{
    constructor(name){
        super(name)
    }
    /* istanbul ignore next */
    add(file){
        throw new Error('file only allowed to add to folder')
    }
    execute(logs){
        logs.push(this.name)
    }
}
module.exports = File