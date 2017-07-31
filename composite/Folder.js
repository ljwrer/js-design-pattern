const BaseFile = require('./BaseFile')
class Folder extends BaseFile{
    constructor(name){
        super(name)
        this.files = []
    }
    add(file){
        this.files.push(file)
        file.parent = this
    }
    execute(logs){
        logs.push(this.name)
        this.files.forEach(file=>file.execute(logs))
    }
}
module.exports = Folder