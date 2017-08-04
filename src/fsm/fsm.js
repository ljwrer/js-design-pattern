const FSM = require('javascript-state-machine')
const fsm = new FSM({
    init: 'a',
    transitions: [
        {
            name: 'toButton',
            from: 'a',
            to: 'button'
        },
        {
            name: 'toDiv',
            from: 'button',
            to: 'div'
        },
        {
            name: 'toA',
            from: 'div',
            to: 'button'
        }
    ],
    methods: {
        ontoButton(){},
        ontoDiv(){},
        ontoA(){},
    }
})