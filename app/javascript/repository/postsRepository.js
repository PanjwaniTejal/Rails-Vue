import Repository from './repository'
const resource = '/posts'

export default {
  getPostslist() {
    return Repository.request(`${resource}`, 'get')
  },
  getPosts(postId) {
    return Repository.request(`${resource}/${postId}`, 'get')
  },
  createPost(payload){
    return Repository.request(`${resource}`, 'post', payload)
  },
  deletePost(id){
    return Repository.request(`${resource}/${id}`, 'delete')
  }
}