<template>
  <div>
    <navbar></navbar>
    <div class="container mt-5">
      <div class="row">

        <!-- Section One-->
        <div v-for="(newsPost, index) in News" :key="index" class="col-lg-4">
          <div class="card mb-5 border-0">
            <img class="card-img-top" :src="newsPost.post_image" alt="Post Image">
            <div class="card-body blog-card bg-light">
              <p><b>NEWS</b> <span class="bg-light">{{ newsPost.created_at }}</span> <b>User</b></p>
              <p><b>{{ newsPost.title}} </b></p>
              <p class="card-text">{{ newsPost.content | snippet }}</p>
            </div>
          </div>
        </div>

        <!-- Section Two-->
        <div class="col-lg-8">
          <div class="card mb-5 border-0">
            <img class="card-img-top" :src="firstLifestyle.post_image" alt="Post Image">
            <div class="card-body blog-card bg-light">
              <p><b>LIFESYTLE</b> <span class="bg-light">{{ firstLifestyle.created_at }}</span> <b>User</b></p>
              <p><b>{{ firstLifestyle.title }}</b></p>
              <p class="card-text">{{ firstLifestyle.content | snippet }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-5 border-0">
            <img class="card-img-top" :src="secondLifestyle.post_image" alt="Post Image">
            <div class="card-body blog-card bg-light">
              <p><b>LIFESYTLE</b> <span class="bg-light">{{ secondLifestyle.created_at }}</span> <b>User</b></p>
              <p><b>{{ secondLifestyle.title }}</b></p>
              <p class="card-text">{{ secondLifestyle.content | snippet }}</p>
            </div>
          </div>
        </div>

        <!-- Section Three-->
        <div class="col-lg-4">
          <div class="card mb-5 border-0">
            <img class="card-img-top" :src="secondLifestyle.post_image" alt="Post Image">
            <div class="card-body blog-card bg-light">
              <p><b>LIFESYTLE</b> <span class="bg-light">{{ secondLifestyle.created_at }}</span> <b>User</b></p>
              <p><b>{{ secondLifestyle.title }}</b></p>
              <p class="card-text">{{ secondLifestyle.content | snippet }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-5 border-0">
            <img class="card-img-top" :src="firstLifestyle.post_image" alt="Post Image">
            <div class="card-body blog-card bg-light">
              <p><b>LIFESYTLE</b> <span class="bg-light">{{ firstLifestyle.created_at }}</span> <b>User</b></p>
              <p><b>{{ firstLifestyle.title }}</b></p>
              <p class="card-text">{{ firstLifestyle.content | snippet }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
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
     'navbar': Navbar
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
