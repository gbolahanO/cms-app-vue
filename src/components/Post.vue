<template>
  <div class="card mb-5 border-0">
    <img class="card-img-top" :src="postImage" alt="Post Image">
    <div class="card-body blog-card bg-light">
      <p>
      <router-link :to="'/category/' + categoryId + '/posts'">
        <b>{{ categoryName }}</b>
      </router-link>
        <span class="bg-light">{{ createdAt | moment("from") }}</span> <b>User</b></p>
      <router-link :to="'/blog/' + postSlug">
        <p><b>{{ title }}</b></p>
      </router-link>
      <p class="card-text">{{ content | snippet }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'postImage', 'createdAt', 'categoryId', 'postSlug', 'categoryName'],
  data () {
    return {

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

</style>
