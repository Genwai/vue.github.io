<template>
  <div>
      <this-dialog :is-show="isShowCheckOrder">
          请检查你的支付状态
          <div class="button" @click="checkStatus">
              支付成功
          </div>

          <div class="button"  @click="checkStatus">
              支付失败
          </div>    
      </this-dialog>
         <this-dialog :is-show ="isShowSuccessDialog" @on-close="toOrderList">
       
              购买成功
   
          </this-dialog>
          <this-dialog :is ="isShowFailDialog" @on-close="toOrderList">
           
              购买失败
      
          </this-dialog>
  </div>
</template>
<script>
import Dialog from './base/dialog'
export default {

    props: {
        isShowCheckOrder:{
          type:Boolean,
          default:false  
        },
        orderId:{
            type:String,
            default:null
        }
    },
     components:{
         thisDialog:Dialog,
      },
    data () {
      return {
            
            isShowSuccessDialog:false,
            isShowFailDialog:false
      }
  },
  methods:{
    checkStatus(){
        console.log('1');
        console.log('id',this.orderId)
        this.$http.post('/api/checkOrder',{
            orderId:this.orderId
        }).then((res)=>{
            this.isShowSuccessDialog =true;
            this.isShowFailDialog =false;
            this.$emit('on-close-check-dialog')
        },(err)=>{
             this.isShowSuccessDialog =true;
            this.isShowFailDialog =false;
            this.$emit('on-close-check-dialog')
            console.log(err)
        })
    },
    toOrderList(){
         this.isShowFailDialog=false
         this.isShowSuccessDialog=false
    }
  }
}
</script>
<style>
    
</style>
