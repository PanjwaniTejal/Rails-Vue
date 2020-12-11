<template>
  <div>
    <h1>Post Show</h1>
    <div v-if="post">
      <p> title: {{ post.title }} </p>
      <p> description: {{ post.description  }} </p>
    </div>
    
  </div>
  
</template>

<script>
import PostsRepository from '../../repository/postsRepository'
export default {
  name: 'show',
  data() {
    return {
      postId: this.$route.params.id,
      post: null
    }
    
  },
  mounted() {
    PostsRepository.getPosts(this.postId).then( response => {
      this.post = response.data
    })
  }
}
</script>