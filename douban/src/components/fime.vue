<template>
<div>

<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>


<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>

<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>

<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>

<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>

<div id="fime">
        <p class="fime-title"><span>更多></span><span>影院热映</span></p>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
	        <div class="swiper-slide"  v-for="item in arr">
	        	  
	        			<img class="fimeImg" :src="item.images.small"/>  
			             <p class="fimeName">{{item.title}}</p>
			             <p class="fimeScore">
			             	<star :score="item.rating.average"></star>
			             	<span class="score-info">{{item.rating.average}}</span>
			             </p>
	        </div>
        
	     </div>  
    </div>	
      <div class="fime-ban">
			<img class="fime-ban-img" src="../assets/img/ban-1.png" alt="">
		</div>
</div>

</div>
</template>


<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import star from "./xing.vue"
export default{
	   props:["score"],
	 components:{
        star
	 },
	 data:function(){
	    return{
	      arr:[]
	    }
	 },
	 created:function(){
       this.$axios({
          		method: "post",//192.168.1.10
          		url: "http://localhost:8080/doubandemo/servlet/AudioServlet",
        	}).then(res => {
        	   this.arr=res.data.subjects;
        		console.log(res.data.subjects)
        	}, err => {
          		alert("网络不好，请重新登录！")
        	})
	    
	 },mounted(){
	 	var mySwiper = new Swiper('.swiper-container',{
			slidesPerView : 3,
			spaceBetween : 20,//spaceBetween : '10%',按container的百分比
			 observer:true,//修改swiper自己或子元素时，自动初始化swiper
             observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })
	 }
        
}
</script>

<style>
	#fime{
		
	    position:relative;	
	    left:0px;
	    margin-top:35px;
		width:100%;
		height:480px;
		
	}
	.fime-title{
		display: flex;
		flex-direction: row-reverse;
		justify-content:space-between;
		padding: 15px;
		
	}
	.fime-title span:nth-child(2) {
		font-size: 18px;
	    font-weight: 500;
	}
	.fime-title span:nth-child(1) {
		font-size: 14px;
		  color:#3EC359;
	}
	.swiper-slide{
		width:30%;
		height:220px;
	}
	.fimeImg{
         width:100%;
		 height:160px;
	}
	.fimeName{
       width:100%;
		height:25px;
		line-height:25px;
		font-size:16px;
		font-weight:500;
		padding:3px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.fimeScore{
		display:inline-block;
		width:100%;
		height:25px;
	
	
	}
	.score-info{
		position:relative;
		top:-26px;
		right:60px;
		width:30px;
		height:25px;
		font-size:13px;
	}
	.fime-ban{
		position:absolute;
         left:0px;
         top:120px;
		width:100%;
		height:400px;
	}
	.fime-ban-img{
		width:100%;
		height:100%;
	}
</style>