<template>
  <div class="container">
    <h3>Posts</h3>
    <div v-if="posts.length>0">
      <postBlock
        v-for='post in posts'
        :key='post.id'
        :post= post
        @getPostData="getPostData"
      />
    </div>

    <div v-else>
      no post yet !!
    </div>
  </div>
</template>

<script>
import axios from "axios";
import postBlock from './postBlock.vue';
import PostRespository from '../../repository/postsRepository.js';

export default {
  components: { postBlock },
  name: 'index',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPostData(value) {
      this.posts = value
    }
  },
  mounted() {
    try {
      PostRespository.getPostslist().then(response => { 
        this.posts = response.data;
      })
    } 
    catch (error) {
      console.error(error);
    }

    // axios.get('http://localhost:3000/api/v1/posts').then(response => {
    //   console.log('0---->',response)
    //   this.posts = response.data;
    // })
  }
}
</script>