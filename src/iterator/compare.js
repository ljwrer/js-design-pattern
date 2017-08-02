const compare = function (arr1,arr2) {
    const it1= arr1[Symbol.iterator]()
    const it2= arr2[Symbol.iterator]()
    let done1,done2
    do {
        const obj1 = it1.next()
        const obj2 = it2.next()
        if(obj1.value!==obj2.value){
            return false
        }
        done1 = obj1.done
        done2 = obj2.done
    }
    while (!done1&&!done2)
    return true
}
module.exports = compare