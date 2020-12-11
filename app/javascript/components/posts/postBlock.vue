<template>
  <div class="inline-data">
    <p>ID: {{ post.id }}</p>
    <p>Title: {{ post.title }}</p>
    <p>Description: {{ post.description }}</p>
    <p><router-link :to="'post/' + postId" > Show Post </router-link></p>

    <!-- <button v-on:click="ShowPost(postId)">Show Post</button> -->
    <button v-on:click="DeletePost(postId)">Delete Post</button>
  </div>
</template>

<script>
import axios from "axios";
import PostRespository from '../../repository/postsRepository.js';

export default {
  name: 'postBlock',
  props: {
    post: Object
  },
  data() {
    return {
      postId: this.post.id
    }
  },
  methods: {
    DeletePost(postId) {
      try{
        PostRespository.deletePost(postId).then(response => {
          this.$emit('getPostData', response.data)
          // return response.data
        })
        // this.$router.push('/posts')

      }
      catch (error) {
        console.error(error);
      }

      // axios.delete('http://localhost:3000/api/v1/posts/' + this.postId).then(response => {
      //   console.log('0---->',response)
      //   this.posts = response.data;
      // })
    }
  }
}
</script>

<style scoped>
  .inline-data {
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
  }

  .inline-data p {
    display: inline-block;
  }
</style>