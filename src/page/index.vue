<template>
  <div class="index-wrap">
      <div class="index-left">
          <div class="index-left-block">
              <h2>全部产品</h2>
              
            <template v-for="product in productList">
            <h3>{{product.title}}</h3>
              <ul>
                  <li v-for="list in product.list">{{list.name}}</li>
              </ul>
            </template>
          </div>
          <div class="index-left-block lasted-news">
              <h2>模拟json动态获取类似ajax</h2>
             <ul>
                  <li v-for="item in newsList">
                    <a :href="item.url" class="new-item">{{item.title}}</a>
              </li>
             </ul>
          </div>      
      </div>
      <div class="index-right">
          <slide-show :slides ="slides"></slide-show>
          <div class="index-board-list">
              <div class="index-border-item " v-for="(item,index) in boardList" :class="[{'line-last': index % 2 !==0}]" >
                  <img :src="item.img" alt="">
                  <div class="index-board-item-inner">
                      <h2>{{item.title}}</h2>
                      <p>{{item.description}}</p>
                      <router-link class="button" :to="{path:'detail'}">立即购买哦</router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'

export default {
  // name: 'index',
  components:{
      slideShow
  },
  data () {
    return {
        newsList:[],
          slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '第一张图片',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '第二张图片',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '第三张图片',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: '第四张图片',
          href: 'detail/forecast'
        }
      ],
        productList:{
            pc:{
                title:'PC产品',
                list:[
                   {
                       name:'数据统计',
                       url:'www.baidu.com'
                   },
                   {
                       name:'数据预测',
                       url:'wwww.baicu.con'
                   },
                   {
                       name:'流量分析',
                       url:''
                   },
                   {
                       name:'广告发布',
                       url:''
                   }
                ]
            },
            phone:{
                title:'手机应用类',
                list:[
                    {
                        name:'91助手',
                        url:'www.baidu.com'
                    },
                    {
                        name:'产品助手',
                        url:''
                    },
                    {
                        name:'智能地图',
                        url:''
                    },
                    {
                        name:'智能地图',
                        url:''
                    }

                ]
            }
        },
        
        boardList:[
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false,
          img:require('../assets/images/2.png')
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false,
          img:require('../assets/images/2.png')
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true,
          img:require('../assets/images/3.png')
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false,
          img:require('../assets/images/4.png')
        }
        ]
    }
  },
    created () {
    this.$http.get('api/seller')
     .then((res) => {
        //   var data = JSON.parse(res.data)
        //   this.newsList = data;
      console.log(res.data.data)
      this.newsList =res.data.data
    }, (err) => {
      console.log(err)
    })  
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-wrap .index-left {
  float: left;
  width: 300px;
  text-align: left;
  /* background: red */
}
.index-wrap .index-right {
  float: left;
  width: 900px;

}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
    margin-top: 20px;
}
.index-border-item  {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-border-item img {
    width: 60px;
}
.index-board-item-inner {
    display: inline-block;
    margin-left: 20px;
}

.index-board-list h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;

}
.index-border-item  {
    display: inline-block;
}
.button {
    margin-top: 15px;
}
.line-last {
  margin-right: 0;
}
</style>
