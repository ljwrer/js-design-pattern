const factory = function () {
    const constructor = [].shift.call(arguments)
    const obj = Object.create(constructor.prototype)
    const ret = constructor.apply(obj,arguments)
    return typeof ret === "object"?ret:obj
}
module.exports = factory
