const objectPoolFactory = function (createFn) {
    const pool = []
    return {
        create(){
            if(pool.length===0){
                return createFn.apply(this,arguments)
            }else {
                return pool.shift()
            }
        },
        recover(obj){
            pool.push(obj)
        }
    }
}
module.exports = objectPoolFactory