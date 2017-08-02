class ListCommand{
    constructor(receiver){
        this.receiver = receiver
        this.logs = []
        this.redoLogs = []
    }
    _execute(item){
        this.receiver.use(item)
        this.logs.push(item)
    }
    execute(item){
        this._execute(item)
        this.redoLogs = []
    }
    undo(){
        if(this.logs.length>1){
            this.redoLogs.push(this.logs.pop());
            this._execute(this.logs.pop())
        }
    }
    redo(){
        if(this.redoLogs.length>0){
            this._execute(this.redoLogs.pop())
        }
    }
}
module.exports = ListCommand

