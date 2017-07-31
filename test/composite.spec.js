const Folder = require('../composite/Folder')
const File = require('../composite/File')
const assert = require('chai').assert
describe('composite', function () {
    describe('#execute()',function () {
        it('should execute when called',function () {
            const file1 = new File(1)
            const file2 = new File(2)
            const file3 = new File(3)
            const folder = new Folder(4)
            folder.add(file1)
            folder.add(file2)
            folder.add(file3)
            const logs = []
            folder.execute(logs)
            assert.deepEqual(logs,[4,1,2,3])
        })
    })
    describe('#remove()',function () {
        it('should execute when called',function () {
            const file1 = new File(1)
            const file2 = new File(2)
            const file3 = new File(3)
            const folder = new Folder(4)
            folder.add(file1)
            folder.add(file2)
            folder.add(file3)
            const logs = []
            file1.remove()
            folder.remove()
            folder.execute(logs)
            assert.deepEqual(logs,[4,2,3])
        })
    })
})
