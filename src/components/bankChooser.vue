<template>
  <div class="chooser-components">
      <ul class="chooser-list">
          <li 
          v-for="(item,index) in banks"
          :class="[item.name,{active:nowIndex === index}]"
          @click="chooseSelection(index)"
          ></li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
      nowIndex: 0,
      banks: [
          {
              id: 201,
              label: '招商银行',
              name: 'zhaoshang'
          },
          {
              id: 301,
              label: '中国建设银行',
              name: 'jianshe'
          },
          {
              id: 601,
              label: '浦发银行',
              name: 'pufa'
          },
          {
              id: 1101,
              label: '交通银行',
              name: 'jiaotong'
          },
          {
              id: 101,
              label: '中国工商银行',
              name: 'gongshang'
          },
          {
              id: 401,
              label: '中国农业银行',
              name: 'nongye'
          },
          {
              id: 1201,
              label: '中国银行',
              name: 'zhongguo'
          },
          {
              id: 501,
              label: '中信银行',
              name: 'zhongxin'
          }
      ]
    }
  },
   methods:{
          chooseSelection(index){
              console.log(index)
              this.nowIndex =index;
              console.log('this.nowIndex', this.nowIndex)
          }
      }
     
}
</script>
<style>
    .chooser-components {
  position: relative;
  display: inline-block;
}
.chooser-components .chooser-list li.active {
  border: 1px solid #4fc08d !important;
}
    .chooser-components .chooser-list li { 
    display: inline-block;
    width: 117px;
    height: 32px;
    background-image: url('../assets/banks/banks.png');
    background-repeat: no-repeat;
    margin: 5px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
}
    .chooser-component .zhaoshang {
    background-position: -2160px 0;
}
.chooser-components .jianshe {
    background-position: -720px 0;
}
.chooser-components .pufa {
    background-position: -1800px 0;
}
.chooser-components .jiaotong {
    background-position: -3120px 0;
}
.chooser-components .minsheng {
    background-position: -2760px 0;
}
.chooser-components .pingan {
    background-position: -2400px 0;
}
.chooser-components .beijing {
    background-position: -960px 0;
}
.chooser-components .xingye {
    background-position: 0 0;
}
.chooser-components .shanghai {
    background-position: -1560px 0;
}
.chooser-components .guangfa {
    background-position: -840px 0;
}
.chooser-components .gongshang {
    background-position: -2640px 0;
}
.chooser-components .nongye {
    background-position: -1680px 0;
}
.chooser-components .guangda {
    background-position: -2280px 0;
}
.chooser-components .zhongguo {
    background-position: -2520px 0;
}
.chooser-components .zhongxin {
    background-position: -480px 0;
}
.chooser-components .chuxu {
    background-position: -120px 0;
}
.chooser-components .bnongshang {
    background-position: -1440px 0;
}
.chooser-components .huaxia {
    background-position: -2040px 0;
}
.chooser-components .snongshang {
    background-position: -2880px 0;
}

.chooser-components .baifubao {
    background-position: -1320px 0;
}
</style>



