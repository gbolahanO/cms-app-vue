<template>
  <div class="container mt-5">
    <div class="row">

      <!-- Section One-->
      <div v-for="(category_post, index) in posts" :key="index" class="col-lg-4">
        <Post :title="category_post.title" :content="category_post.content" :categoryId="'cat'"
              :postImage="category_post.post_image" :createdAt="category_post.created_at" :postSlug="category_post.post_slug">
        </Post>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Post from './Post'
 export default {
   data () {
     return {
      id: this.$route.params.id,
      posts: []
     }
   },
   components: {
     'navbar': Navbar,
     'Post': Post
   },
   created() {
     this.fetchPosts();
   },
   methods: {
     fetchPosts: function() {
         this.$http.get('http://localhost:8000/api/category/'+ this.id + '/posts')
        .then(response => {
          console.log(response);
          this.posts = response.data.category_posts;
          // this.posts = response.data.news.splice(0, 3);
        });
     }
   },
   filters: {
     snippet: function(value) {
       if (!value) return '';
       return value.slice(1, 100) + '...';
     }
   }
 }
</script>
