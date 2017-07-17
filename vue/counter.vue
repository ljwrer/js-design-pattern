<template>
    <div>
        <span>{{currentValue}}</span>
        <br/>
        <button @click="add">add</button>
    </div>
</template>
<script>
    export default {
        name:'counter',
        props:{
            value:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                currentValue:this.value
            }
        },
        methods:{
            add(){
                this.currentValue++;
                this.$emit('add',this.currentValue)
            }
        }

    }
</script>