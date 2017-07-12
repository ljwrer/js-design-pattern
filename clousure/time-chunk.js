/**
 * Created by Ray on 2017/7/11.
 */
const timeChunk = function( ary, fn, count, time){
    const start = function () {
        const len = Math.min(count||1,ary.length)
        for(let i=0;i<len;i++){
            fn(ary.shift())
        }
    }
    const loop = function () {
        start();
        setTimeout(function () {
            if(ary.length){
                loop()
            }
        },time)
    }
    return loop
}
module.exports = timeChunk
