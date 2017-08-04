class A{
    constructor(component){
        this.component = component;
    }
    switch(){
        this.component.curState = this.component.btn
    }
}
class Button{
    constructor(component){
        this.component = component;
    }
    switch(){
        this.component.curState = this.component.div
    }
}
class Div{
    constructor(component){
        this.component = component;
    }
    switch(){
        //invoke component method

        //invoke state method

        //switch client state
        this.component.curState = this.component.a
    }
}
class Component{
    constructor(){
        this.btn = new Button(this)
        this.a = new A(this)
        this.div = new Div(this)
        this.curState = this.btn;
    }
    switch(){
        this.curState.switch()
    }
}

class HighComponet{
    constructor(){
        this.state = FSM.a
    }
    switch(){
        this.state.switch.apply(this,arguments)
    }
}
const FSM = {
    a:{
        switch(){
            this.state = FSM.button
        }
    },
    button:{
        switch(){
            this.state = FSM.div
        }
    },
    div:{
        switch(){
            this.state = FSM.a
        }
    }
}

const delegate = function (client,delegation) {
    return {
        switch(){
            delegation.switch.apply(client,arguments)
        }
    }
}
class DelegationComponet{
    constructor(){
        this.a = delegate(this,FSM.a)
        this.button = delegate(this,FSM.button)
        this.div = delegate(this,FSM.div)
        this.state = FSM.a
    }
    switch(){
        this.state.switch.apply(this,arguments)
    }
}