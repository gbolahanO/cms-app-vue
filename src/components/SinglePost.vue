<template>
  <div>
    <div class="container-fluid px-4 mt-5">
      <div class="row mb-5">
        <div class="col-lg-7 text-center m-auto">
          <span class="">
            {{ post.created_at}} / {{ category | capitalize }}
          </span>
          <h1 class="display-5 text-center">
            {{ post.title }}
          </h1>
        </div>
      </div>
      <div class="row px-0 mb-5">
        <div class="col-lg-12 px-0">
          <img class="rounded w-100" :src="post.post_image" alt="">
        </div>
        <div class="col-lg-10 m-auto">
          <div class="card border-0 px-5 negative-margin">
            <div class="card-body">
              {{ post.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      post: {},
      category: ""
    }
  },
  created() {
    this.getSinglePost()
  },
  methods: {
    getSinglePost: function() {
      this.$http.get('api/blog/' + this.slug)
        .then((response) => {
          console.log(response);
          this.post = response.body.post;
          this.category = response.body.category;
        })
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
.negative-margin {
  margin-top: -100px;
  font-size: 1.6rem;
  line-height: 1.5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24)
}
</style>
