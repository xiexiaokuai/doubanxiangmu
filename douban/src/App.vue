<template>
  <div id="app">
         <tabbar></tabbar>
          <router-view></router-view>
  </div>
</template>





<script>
import Tabbar from "./components/tabbar"
export default {
    name:"App",
 components:{
      Tabbar
 }
}
</script>

 <style>
     #app{
      width:100%;
      height: 1px;

     }
   </style>

