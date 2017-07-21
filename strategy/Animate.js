/**
 * Created by Ray on 2017/7/14.
 */
/* istanbul ignore next */
const tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {
        return c * ( t /= d ) * t + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c * ( t /= d ) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
        return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
    },
    sineaseIn: function (t, b, c, d) {
        return c * ( t /= d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
        return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
    }
};

class Animate {
    static get tween() {
        return tween
    }

    constructor(dom) {
        this.dom = dom;
        Object.assign(this, {
            startPos: 0,
            endPos: 0,
            duration: 0,
            propName: null,
            easing: null,
            startTime: 0
        })
    }

    start(propName, endPos, duration, easing, cb) {
        Object.assign(this, {
            propName,
            endPos,
            duration,
            easing: tween[easing],
            startTime: Date.now()
        })
        this.startPos = this.propVal
        let animationId;
        const animate = () => {
            if (this.step() === false) {
                cb&&cb()
                cancelAnimationFrame(animationId)
            } else {
                animationId = requestAnimationFrame(animate)
            }
        }
        animationId = requestAnimationFrame(animate)
    }

    step() {
        const time = Date.now() - this.startTime
        if(time>=this.duration){
            this.update(this.endPos)
            return false
        }
        const dist = this.easing(time,this.startPos,this.endPos - this.startPos,this.duration)
        this.update(dist)
    }

    get propVal(){
        const transform = window.getComputedStyle(this.dom).transform
        return this.getMatrixValue(transform)
    }

    getMatrixValue(matrix){
        const pos = (function () {
            if(this.propName === 'x'){
                return 4
            }else if(this.propName === 'y'){
                return 5
            }else {
                throw TypeError(`prop name should be neither x or y but got ${this.propName}`)
            }
        }.bind(this))()
        const mat = matrix.match(/^matrix\((.+)\)$/)
        return mat?parseInt(mat[1].split(', ')[pos]):0
    }

    update(val) {
        this.dom.style.transform = `translate${this.propName.toUpperCase()}(${val}px)`
    }
}

module.exports = Animate