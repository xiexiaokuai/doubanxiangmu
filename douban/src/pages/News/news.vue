<template>
<div id="news">
    <div class="news-header">
    	 <p class="news-nav"><span class="active">豆瓣豆品</span><span>豆瓣时间</span></p>
    </div>
	    <!--轮播-->
	   <div id="new-ban">
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide">
	        <img src="../../assets/img/nb_1.png" alt="">
	      </div>
	      <div class="swiper-slide">
	        <img src="../../assets/img/nb_2.png" alt="">
	      </div>
	      <div class="swiper-slide">
	        <img src="../../assets/img/nb_3.png" alt="">
	      </div>
	      <div class="swiper-slide">
	        <img src="../../assets/img/nb_4.png" alt="">
	      </div>
	    </div>
	  </div>

	   </div>


	   <!--购物车-->
	   <div class="phoing">
	   	    <div>
             <img src="../../assets/img/shopping.png" alt="">
	   	    购物车
	   	    </div>
	   	    <div>|</div>
	   	    <div>
	   	    <img src="../../assets/img/user.png" alt="">
	   	    我的豆品
	   	    </div>
	   </div>
        <!--新品首发-->
        <div class="xinpin">
        	<p class="xinpin-title">新品首发</p>
        	<ul>
        		<li>
        			<img src="../../assets/img/m_1.png" alt="">
        			<p class="xinpin-item1">豆瓣电影日历2019</p>
        			<p class="xinpin-item2">电影就是生活</p>
        			<p class="xinpin-item3 xinpin-price">￥99</p>
        		</li>
        		<li>
        			<img src="../../assets/img/m_2.png" alt="">
        			<p class="xinpin-item1">豆瓣读书笔记</p>
        			<p class="xinpin-item2">为深度阅读而设计</p>
        			<p class="xinpin-item3 xinpin-price">￥78</p>
        		</li>
        		<li>
        			<img src="../../assets/img/m_3.png" alt="">
        			<p class="xinpin-item1">豆瓣搪瓷杯</p>
        			<p class="xinpin-item2">第一批售罄,现预定可提前购买</p>
        			<p class="xinpin-item3 xinpin-price">￥68</p>
        		</li>
        		<li>
        			<img src="../../assets/img/m_4.png" alt="">
        			<p class="xinpin-item1">豆瓣线装笔记本</p>
        			<p class="xinpin-item2">轻薄便携,记录灵感</p>
        			<p class="xinpin-item3 xinpin-price">￥18</p>
        		</li>
        		<li>
        			<img src="../../assets/img/m_5.png" alt="">
        			<p class="xinpin-item1">豆瓣精品挂耳咖啡</p>
        			<p class="xinpin-item2">甄选世界级精品咖啡</p>
        			<p class="xinpin-item3 xinpin-price">￥56</p>
        		</li>
        		<li>
        			<img src="../../assets/img/m_6.png" alt="">
        			<p class="xinpin-item1">豆瓣收藏夹</p>
        			<p class="xinpin-item2">万千票据,一本搞定</p>
        			<p class="xinpin-item3 xinpin-price">￥99</p>
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
}
</script>


<style>
	.news-header{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height: 50px;
	
	}
	.news-nav{
		width: 100%;
		height: 50px;
		text-align: center;
		
	}
	.news-nav span{
		width: 80px;
		height:20px;
		line-height: 35px;
		margin-left: 15px;
		font-size: 17px;
		padding: 6px;
		
	}
	.active{
		color:#66D77B;
		border-bottom: solid 2px #66D77B; 
	}
	#new-ban{
		position:absolute;
		top:50px;
		left:0px;
		width:100%;
		height:220px;
	}
	#new-ban img{
		width:100%;
		height:100%;
	}
	 .phoing{
	 	position:absolute;
	 	left:0px;
	 	top:280px;
	 	width:100%;
    	height:40px;
	 }
    .phoing div{
    	float:left;
    	width:47%;
    	height:40px;
    	color:#dddddd;
    	line-height:40px;
    	text-align:center;
    }
    .phoing div:nth-child(2){
    	width:10px;
    	height:40px;

    }
    .phoing img{
    	position:relative;
    	top:5px;
    	width:23px;
    	height:23px;
    
    }
    .xinpin{
    	clear:both;
    	position:relative;
    	left:0px;
    	top:340px;
    	width:100%;
    	height:900px;
    }
    .xinpin-title{
    	padding:15px;
    	font-size:17px;
    }
    .xinpin li{
    	width:48%;
    	height:260px;	
    	float:left;
    	text-align:center;
    }
    .xinpin li img{
    	width:180px;
    	height:180px;

    }
       .xinpin-item1,.xinpin-item2, .xinpin-item3{
       	 padding-left:15px;
       	 line-height:20px;
       }
    .xinpin-item1{
         font-size:17px;
         color:#3f3f3f;
         text-align:left;
    }
    .xinpin-item2{
    	     display:block;
    	    font-size:14px;
    		color:#919191;
    		text-align:left;
			width:60%;
		    text-overflow: ellipsis;
		    overflow:hidden; 
    		white-space: nowrap;
    }
    .xinpin-item3{
    	color:#e43267;
    	font-size:18px;
    	 text-align:left;
    }
</style>
