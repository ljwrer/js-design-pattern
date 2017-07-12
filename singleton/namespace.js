/**
 * Created by Ray on 2017/7/12.
 */
const uncurrying = require('../clousure/uncurrying')
const has = uncurrying(Object.prototype.hasOwnProperty)
const _namespace = function (root,propList) {
    if(propList.length){
        const prop = propList.shift();
        if(!has(root,prop)){
            root[prop] = {}
        }
        _namespace(root[prop],propList)
    }
}
const namespace = (root,name)=>{
    const propList = name.split('.')
    let current = root
    while (propList.length){
        const prop = propList.shift()
        if(!has(current,prop)){
            current[prop] = {}
        }
        current = current[prop]
    }
}
module.exports = namespace
