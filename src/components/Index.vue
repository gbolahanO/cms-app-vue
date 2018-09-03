<template>
  <div>
    <div class="container mt-5">
      <div class="row">

        <!-- Section One-->
        <div v-for="(newsPost, index) in News" :key="index" class="col-lg-4">
          <Post :title="newsPost.title" :content="newsPost.content" :categoryId="'1'"
                :categoryName="'NEWS'" :postImage="newsPost.post_image" :createdAt="newsPost.created_at" :postSlug="newsPost.post_slug">
          </Post>
        </div>

        <!-- Section Two-->
        <div class="col-lg-8">
          <Post :title="firstLifestyle.title" :content="firstLifestyle.content" :categoryId="'2'"
                :postImage="firstLifestyle.post_image" :createdAt="firstLifestyle.created_at"
                :categoryName="'LIFESTYLE'">
          </Post>
        </div>
        <div class="col-lg-4">
          <Post :title="secondLifestyle.title" :content="secondLifestyle.content" :categoryId="'2'"
                :postImage="secondLifestyle.post_image" :createdAt="secondLifestyle.created_at"
                :categoryName="'LIFESTYLE'">
          </Post>
        </div>

        <!-- Section Three-->
        <div class="col-lg-4">
          <Post :title="firstFresh.title" :content="firstFresh.content" :categoryId="'3'"
                :postImage="firstFresh.post_image" :createdAt="firstFresh.created_at"
                :categoryName="'FRESH'">
          </Post>
        </div>
        <div class="col-lg-8">
          <Post :title="secondFresh.title" :content="secondFresh.content" :categoryId="'3'"
                :postImage="secondFresh.post_image" :createdAt="secondFresh.created_at"
                :categoryName="'FRESH'">
          </Post>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post'
 export default {
   data () {
     return {
      News: [],
      firstLifestyle: '',
      secondLifestyle: '',
      firstFresh: '',
      secondFresh: ''
     }
   },
   components: {
     'Post': Post
   },
   created() {
     this.fetchPosts();
   },
   methods: {
     fetchPosts: function() {
         this.$http.get('api/blog')
        .then(response => {
          this.News = response.body.news.splice(0, 3);
          this.firstLifestyle = response.body.firstLifestyle;
          this.secondLifestyle = response.body.secondLifestyle;
          this.firstFresh = response.body.firstFresh;
          this.secondFresh = response.body.secondFresh;
          console.log(response);
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

<style>
.container {
  margin-top: 100px !important;
}
.nav {
   background-color: #faf7e8;
   margin: 0 auto;
   margin-top: 0px;
   height: 160px;
   padding: 0 120px !important;
 }
.navbar-nav {
  margin: 0 auto;
}
.w-40 {
  width: 40% !important;
}
/*style="margin-top: -330px; height: 250px;"*/
.mtop {
  margin-top: -330px !important;
}
.mh {
  height: 250px;
}
.blog-card {
  margin-top: -50px;
  width: 90% !important;
  z-index: 1;
}
.card {
  overflow: hidden;
}
.card:hover {
  cursor: pointer;
}
.card-img-top:hover {
  transition: ease-in-out 0.5s;
  transform: scale(1.1);
}
@media (max-width: 1000px) {
  .w-40{
    width: 80% !important;
  }
}
@media (max-width: 850px) {
  .mtop{
    margin-top: -100px !important;
  }
}
@media (max-width: 400px) {
  .mtop{
    margin-top: -50px !important;
  }
}
</style>
