<template>
<div>
	<!--头部-->
<div id="header">
    <div id="search">
        <img class="sear" src="../../assets/img/ic_search_gray.png" alt="">
        <img class="sao" src="../../assets/img/ic_scan_gray.png" alt="">
        <input type="text" placeholder="影视 图书 唱片 小组 舞台剧等">
        <img class="wx" src="../../assets/img/ic_chat_white.png">
    </div>
</div>
<!--轮播-->

<div id="lunbo">
	<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/img/01.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/02.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/03.jpg" alt="">
      </div>
    </div>
  </div>

</div>
<!--内容区-->
<div class="center">
	<p><span class="center-item">&nbsp;</span><span class="center-hot">热点</span></p>
	<ul>
		<li v-for="item in arr">
			<div class="center-info">
				<p class="center-title">{{item.title}}</p>
				<p class="center-pinglun">{{item.author}}</p>
				<p>-</p>
				<p class="center-auth">{{item.lun}}</p>
			</div>
			<div class="center-img">
				<img src="../../assets/img/media.jpg" alt="">
			</div>
		</li>
		
	</ul>
</div>

</div>
</template>


<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
   export default{
   	mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      },
   	 data:function(){
        return{
        	arr:
        	[
                
        	]
        }
   	 },
     created:function(){
         this.inof();
	 },methods:{
	  inof:function(){
	     this.axios.get("http://localhost:8080/doubandemo/servlet/HomeServlet").then(
	     val=>{
	     this.arr=val.data;
	     console.log(val.data);
	     });
	  }
	 }
   }
</script>


<style>
*{
	margin:0;
	padding: 0;
	list-style:none;
}
#header{
	position:fixed;
	top:0px;
	left: 0;
	width:100%;
	height:70px;
	background:#3DC153;
	z-index: 9999;
}
#search{
	width:100px;
	height:25px;
	position:relative;
}
input{
     position:absolute;
     left:10px;
     top:20px;
		width:255px;
		height:25px;
		border-radius:10px;
		outline:medium;
		padding-left:40px;
}
.sear{
	 position:absolute;
	 left:20px;
	 top:26px;
	 z-index:1;
}
.sao{
	 position:absolute;
	 left:275px;
	 top:26px;
	 z-index:1;
}
.sear,.sao{
	width:20px;
	height:20px;
}
.wx{
	 position:absolute;
	 left:320px;
	 top:26px;
	 z-index:1;
	 width:25px;
	height:25px;
}
#lunbo{
    position:absolute;
    left:0px;
    top:70px;
	width:100%;
	height:155px;
	
}
#lunbo img{
    
	width:100%;
	height:155px;
	
}
.center{
position: absolute;
left: 0px;
top:235px;
width: 100%;
height: 300px;

}
.center-item{
	background:#FF8451;
	margin-right: 15px;
}
.center-hot{
	color: #FF8451;
}
.center ul li{
	width: 100%;
	height: 165px;
	padding: 10px;
	border-bottom: solid 1px #e5e5e5;
}
.center ul li div{
float: left;

}
.center-info{
width: 55%;
height: 100px;
padding: 10px;


}
.center-img{
width: 30%;
height: 100px;
padding: 10px;

}
.center-title{
	font-size: 17px;
	font-weight:500;
    padding: 10px;
}
.center-pinglun{
	font-size: 12px;
	color: #9D9D9D;
   

}
.center-auth{
	font-size: 12px;
	color: #8D8D8D;

}
.center-img img{
	width: 100px;
	height: 100px;
}
</style>