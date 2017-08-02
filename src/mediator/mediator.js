const pubsub = require('pubsub-js')
const mediator = {
    count:0,
    receive(type,...args){
        this[type](...args)
    },
    add(){
        this.count++
        pubsub.publishSync('add',this.count)
    }
}
module.exports = mediator