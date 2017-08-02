class Command{
    constructor(receiver){
        this.receiver = receiver
    }
}
class RefreshCommand extends Command{
    execute(){
        this.receiver.refresh()
    }
}
class AddCommand extends Command{
    execute(){
        this.receiver.add()
    }
}
const setCommand = function (btn,command) {
    btn.onclick = function () {
        command.execute()
    }
}
const refresh = {refresh(){
    console.log('refresh')
}}
const refreshCommand = new RefreshCommand(refresh)
const add = {add(){
    console.log('add')
}}
const addCommand = new AddCommand(add)
const btn = document.querySelector('#btn')
setCommand(btn,refreshCommand)
setCommand(btn,addCommand)
const createRefreshCommand = function (receiver) {
    return {
        execute () {
            receiver.refresh()
        }
    }
}
const createAddCommand = function (receiver) {
    return {
        execute () {
            receiver.add()
        }
    }
}
const refreshCommand2 = createRefreshCommand(refresh)
const addCommand2 = createAddCommand(add)
const setCommand2 = function (btn,command) {
    btn.onclick = function () {
        command.execute()
    }
}
setCommand2(btn,refreshCommand2)
setCommand2(btn,addCommand2)