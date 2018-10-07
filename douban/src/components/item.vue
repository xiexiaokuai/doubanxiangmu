<template>
 <div id="item" @click="f1">
    <span v-show="box"><slot name="nomal"></slot></span>
    <span v-show="!box"><slot name="active"></slot></span>
     <br>
     <span v-bind:class="{red:!box}">{{txt}}</span>
 </div>
</template>



<script>
 export default{
    props:["txt","mark","sele","router"],
    computed:{
      box:function(){
         if(this.mark==this.sele){
          this.$router.push(this.router);
              return false;
         }else{
               return true;
         }
      }
    },
    methods:{
       f1:function(){
       this.$emit("change",this.mark);
       }
    }
 }
</script>

<style>
#item{
	width:19%;
	height:50px;
	float:left;
	text-align:center;
}
 img{
 width:40px;
 height:40px;

 }

 .red{
 color:red;
 }
</style>


