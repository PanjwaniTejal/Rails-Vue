<template>
  <div>
    <h2>New post</h2>
    <form  @submit.prevent="CreatePost">
      <label for="title">Title</label>
      <input type="text" name="title" v-model="title"><br>

      <label for="description">Description</label>
      <input type="text" name="description" v-model="description"><br>

      <button>Submit</button>
      <!-- <button v-on:click="CreatePost">Submit</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import PostRespository from '../../repository/postsRepository.js';

export default {
  name: 'new',
  data() {
    return {
      title: '',
      description: ''
    }

  },
  methods: {
    CreatePost() {
      var payload = {
        title: this.title,
        description: this.description
      }
      // PostRespository.createPost(payload)

      try {
        PostRespository.createPost(payload).then(response => {
          this.$emit('getPostData', response.data)
          this.$router.push('/posts')
        })

        
      } catch (error) {
        console.error(error);
        // Display error
      }

      // axios.post('http://localhost:3000/api/v1/posts/', payload).then(response => {
      //   console.log('0---->',response)
      // })

    }
  }
}
</script>