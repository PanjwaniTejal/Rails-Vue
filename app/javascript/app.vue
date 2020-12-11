<template>
  <div id="app" class="container">
    <h2> App called </h2>
    <p>{{ message }}</p>
   
    <!-- <PostIndex /> -->
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Post Function</a>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link to='/posts'>List of Post</router-link></li>
          <li><router-link to='/new/post'>New Post</router-link></li>
        </ul>
        <!-- <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul> -->
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import PostIndex from './components/posts/index'
export default {
  name: 'app',
  components: {
    PostIndex
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
