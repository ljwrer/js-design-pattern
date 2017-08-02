class MacroCommand{
    constructor(){
        this.commandsList = []
    }
    execute(){
        this.commandsList.forEach(command=>command.execute())
    }
    add(command){
        this.commandsList.push(command)
        return this
    }
}
module.exports = MacroCommand