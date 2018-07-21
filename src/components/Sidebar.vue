<template>
  <div class="col-lg-3 bg-dark no-padding">
    <div class="list-group">
      <router-link to="/dashboard">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-table" style="font-size: 1.2em;"></span> &nbsp; Dashboard
        </a>
      </router-link>
      <router-link to="/posts">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-bookmark" style="font-size: 1.2em;"></span> &nbsp; View Posts
        </a>
      </router-link>
      <router-link to="/post/create">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-pen" style="font-size: 1.2em;"></span> &nbsp; Create Posts
        </a>
      </router-link>
      <router-link to="/categories">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-boxes" style="font-size: 1.2em;"></span> &nbsp; Categories
        </a>
      </router-link>
      <router-link to="/category/create">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-pencil-alt" style="font-size: 1.2em;"></span> &nbsp; Create Categories
        </a>
      </router-link>
      <router-link to="/category/edit">
        <a class="list-group-item list-group-item-action bg-dark text-light">
          <span class="fa fa-edit" style="font-size: 1.2em;"></span> &nbsp; Edit Category
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
