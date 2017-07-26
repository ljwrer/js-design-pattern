const ListCommand = require('../command/undo-redo')
const MacroCommand = require('../command/MacroCommand')
const assert = require('chai').assert
describe('undo redo list', function () {
    let listCommand
    beforeEach(function () {
        listCommand = new ListCommand({
            use(item) {
                this.item = item
            }
        })
        listCommand.show = function () {
            return this.receiver.item
        }
    })
    describe('#execute()',function () {
        it('should execute when called',function () {
            listCommand.execute(1)
            assert.equal(listCommand.show(),1)
            listCommand.execute(2)
            assert.equal(listCommand.show(),2)
        })
    })
    describe('#undo()', function () {
        it('should undo', function () {
            listCommand.execute(1)
            listCommand.execute(2)
            listCommand.execute(3)
            listCommand.undo()
            assert.equal(listCommand.show(),2)
            listCommand.undo()
            assert.equal(listCommand.show(),1)
            listCommand.undo()
            assert.equal(listCommand.show(),1)
        })
    })
    describe('#redo()',function () {
        it('should redo', function () {
            listCommand.execute(1)
            listCommand.execute(2)
            listCommand.execute(3)
            listCommand.undo()
            listCommand.undo()
            listCommand.redo()
            assert.equal(listCommand.show(),2)
            listCommand.redo()
            assert.equal(listCommand.show(),3)
        })
        it('should clear redo list if direct execute', function () {
            listCommand.execute(1)
            listCommand.execute(2)
            listCommand.execute(3)
            listCommand.undo()
            listCommand.undo()
            listCommand.execute(4)
            listCommand.redo()
            assert.equal(listCommand.show(),4)
            listCommand.redo()
            assert.equal(listCommand.show(),4)
        })
    })
})
describe('macro command',function () {
    it('should run macro when call',function () {
        let index = 1;
        const addCommand = {
            execute(){
                index++
            }
        }
        new MacroCommand().add(addCommand).add(addCommand).add(addCommand).add(addCommand).execute()
        assert.equal(index,5)
    })
})