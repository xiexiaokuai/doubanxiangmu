<template>
<div id="group">
<!--标题-->
<div class="group-header">
<span class="header-info">书影音</span>
 <img class="header-search" src="../../assets/img/ic_group_search.png" alt="">
       
 <img class="header-msg" src="../../assets/img/ic_create_group_chat_blue.png">

</div>
<!--导航-->
<ul class="header-nav">
	<li> <router-link to="/audio/fime" class="header-item ">电影</router-link></li>
	<li> <router-link to="/audio/read"  class="header-item ">读书</router-link></li>
	<li> <router-link to="/audio/music"  class="header-item ">音乐</router-link></li>
	<li> <router-link to="/audio/tv"  class="header-item ">tv</router-link></li>
	<router-view></router-view>
</ul>

</div>
</template>



<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
export default{
	 components:{

	 },
	 data:function(){
	    return{
	      arr:[]
	    }
	 },
	 created:function(){
	 	//http://localhost:8080/doubandemo/servlet/AudioServlet
	 	//https://api.douban.com/v2/movie/top250?count=10
       this.$axios({
          		method: "post",//192.168.1.10
          		url: "http://localhost:8080/doubandemo/servlet/AudioServlet",
        	}).then(res => {
        	   this.arr=res.data.subjects;
        		console.log(res.data)
        	}, err => {
          		alert("网络不好，请重新登录！")
        	})
	    
	 },
	 mounted(){
        var mySwiper = new Swiper('.swiper-container',{
			  slidesPerView : 3,
              slidesPerGroup : 3,
})
      },
}
</script>


<style>
*{
	list-style:none;
	text-decoration:none;

}
.group-header{
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:70px;
	line-height:70px;
    text-align:center;
    background:#F7F7F7;
    border-bottom:solid 1px gray;
}

.group-header img{
	width:20px;
	height:20px;


}

.header-info{
	font-size:18px;
	font-weight:500;
}
.header-search{
	position:absolute;
	clear:both;
	right:70px;
	top:26px;
}
.header-msg{
	position:absolute;
	clear:both;
	right:30px;
	top:26px;
}

.header-nav{
position:absolute;
left:0;
top:70px;
width:100%;
height:10px;
}
.header-nav li{

width:25%;
height:35px;
font-size:14px;
line-height:35px;
text-align:center;
float:left;
border-bottom:1px solid gray;

}
.header-item{
display:block;
      color:#D5D5D5;	
}
.header-nav li:active{
	color:#3EC359;
	border-bottom:2px solid #3EC359;
}
.header-nav li:nth-child(1){
	color:#3EC359;
	border-bottom:2px solid #3EC359;
}
.header-nav li:nth-child(1) a{
	color:#3EC359;
	border-bottom:2px solid #3EC359;
}


</style>