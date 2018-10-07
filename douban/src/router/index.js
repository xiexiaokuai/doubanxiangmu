import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test'
import Home from "../pages/Home/home.vue"
import Audio from "../pages/Audio/audio.vue"
import Mine from "../pages/Mine/mine.vue"
import News from "../pages/News/news.vue"
import Group from "../pages/Group/group.vue"
import Tabbar from "../components/tabbar.vue"
import Fime from "../components/fime.vue"
import Music from "../components/music.vue"
import Read from "../components/read.vue"
import Tv from "../components/tv.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
    	path:"/audio",
    	name:"Audio",
    	component:Audio,
      children:[
        {path:"",component:Fime},
        {path:"fime",component:Fime},
        {path:"music",component:Music},
        {path:"read",component:Read},
        {path:"tv",component:Tv}
      ]
    },{
    	path:"/group",
    	name:"Group",
    	component:Group
    },{
    	path:"/mine",
    	name:"Mine",
    	component:Mine
    },{
    	path:"/news",
    	name:"News",
    	component:News
    }

  ]
})
