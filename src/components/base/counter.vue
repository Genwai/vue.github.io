<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minux"> - </div>
    <div class="counter-show"><input type="text" v-model="value" ></div>
   <div class="counter-btn" @click="maxux"> + </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
      max:{
          type:Number,
          default:5
      },
      min:{
          type:Number,
          default:1
      }
  },
  data () {
    return {
        value:this.min
    }
  },
  watch: {
    value(){
        this.$emit('on-change',this.value)
        // console.log(this.value)
    }  
  },
  methods: {
      minux(){
          if (this.value <= this.min) {
              return false;
          }
          this.value --;
      },
    maxux(){
        if (this.value >= this.max ) {
            return false;
        }
        this.value ++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
