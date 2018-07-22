<template>
  <div>
    <div class="container py-4"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 p-0">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/posts">View Posts</router-link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <Sidebar></Sidebar>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-header">Posts</div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <table class="table table-hover">
                    <tr>
                      <td>Title</td>
                      <td>Category</td>
                      <td>Created</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr v-for="(post, index) in posts" :key="index">
                      <td>{{ post.title }}</td>
                      <td v-for="(category, index) in categories" :key="index" v-if="post.category_id == category.id">{{ category.name }}</td>
                      <td>{{ post.created_at }}</td>
                      <td>
                        <router-link :to="'/post/edit/' + post.id">
                          <a class="btn btn-primary text-white btn-sm">
                          <span class="fa fa-sync"></span>
                          Edit</a>
                        </router-link>
                      </td>
                      <td>
                        <button @click="deletePost(post.id)" href="" class="btn btn-danger btn-sm">
                          <span class="fa fa-trash"></span>
                          Delete</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  export default {
    data() {
      return {
        posts: [],
        categories: []
      }
    },
    components: {
      'Sidebar': Sidebar
    },
    created() {
      this.getAllPosts()
    },
    methods: {
      getAllPosts: function() {
        this.$http.get('api/post')
          .then(response => {
            this.posts = response.body.posts;
            this.categories = response.body.category;
            console.log(response);
          })
      },
      deletePost: function (postId) {
        this.$http.delete('api/post/' + postId)
          .then(response => {
            let index = this.posts.indexOf(postId);
            this.posts.splice(index, 1);
          })
      }
    }
  }

</script>

<style>


</style>
