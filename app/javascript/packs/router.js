import Vue from 'vue'
import VueRouter from 'vue-router'
import show from '../components/posts/show.vue'
import ListOfPost from '../components/posts/index.vue'
import NewPost from '../components/posts/new.vue'


// Register vue-router in vue bcoz vue-router is external package
Vue.use(VueRouter)

// Define routes
const routes = [
  
  {
    path: '/post/:id',
    component: show  
  },
  {
    path: '/posts',
    component: ListOfPost
  },
  {
    path: '/new/post',
    component: NewPost
  }
]

// Create Object of routes
// const router = new VueRouter({routes}) 

// After that register router variable in new VueRouter() instance
export default new VueRouter({
  routes,
  mode: 'history'
});