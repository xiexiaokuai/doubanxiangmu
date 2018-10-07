<template>
<div id="tabbar">

<item txt="首页" mark=1 @change="getall" :sele="num" router="/home">
<img src="../assets/img/1.png" slot="nomal" >
<img src="../assets/img/6.png" slot="active">
</item>
<item txt="书影音" mark=2 @change="getall" :sele="num" router="audio">
<img src="../assets/img/2.png" slot="nomal">
<img src="../assets/img/7.png" slot="active">
</item>
<item txt="小组" mark=3 @change="getall" :sele="num" router="group">
<img src="../assets/img/3.png" slot="nomal">
<img src="../assets/img/8.png" slot="active">
</item>
<item txt="市集" mark=4 @change="getall" :sele="num" router="news">
<img src="../assets/img/4.png" slot="nomal">
<img src="../assets/img/9.png" slot="active">
</item>
<item txt="我的" mark=5 @change="getall" :sele="num" router="mine">
<img src="../assets/img/5.png" slot="nomal">
<img src="../assets/img/10.png" slot="active">
</item>
</div>
</template>


<script>
import Item from "./item.vue"
  export default{
  name:"Tabbar",
    components:{
      Item
    },
    data:function(){
       return{
          num:"1"
       }
    },methods:{
       getall:function(val){
          this.num=val;
       }
    }
  }
</script>


<style>
#tabbar{
	width:100%;
	height:100px;
	border-top:solid 1px #ccc;
	position:fixed;
	bottom:-30px;
  left:0;
  z-index:9999;
  overflow:hiddle;
  background:#F7F7F7;
}
.active{
	margin-top:50px;
}
</style>