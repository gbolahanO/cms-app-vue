<template>
  <div class="container mt-5">
    <div class="row">

      <!-- Section One-->
      <div v-for="(category_post, index) in News" :key="index" class="col-lg-4">
        <Post :title="category_post.title" :content="category_post.content" :category="'cat'"
              :postImage="category_post.post_image" :createdAt="category_post.created_at" :postSlug="category_post.post_slug">
        </Post>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
 export default {
   data () {
     return {
      Posts: []
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
         this.$http.get('api/category/'+ this.$route.id + '/posts')
        .then(response => {
          this.posts = response.body.category_posts;
          // this.posts = response.body.news.splice(0, 3);
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
