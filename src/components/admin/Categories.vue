<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-0">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/categories">Categories</router-link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <Sidebar></Sidebar>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-header">Categories</div>
            <div class="card-data">
              <div class="row">
                <div class="col-lg-12">
                  <table class="table table-hover">
                    <tr>
                      <td>Name</td>
                      <td>Created</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr v-for="(category, index) in categories" :key="index">
                      <td>{{ category.name }}</td>
                      <td>{{ category.created_at }}</td>
                      <td>
                        <router-link :to="'/category/edit/' + category.id">
                          <a class="btn btn-primary text-white btn-sm">
                          <span class="fa fa-sync"></span>
                          Edit</a>
                        </router-link>
                      </td>
                      <td>
                        <button @click="deleteCategory(category.id)" href="" class="btn btn-danger btn-sm">
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
        this.$http.get('http://localhost:8000/api/category')
          .then(response => {
            this.categories = response.data;
            console.log(response);
          })
      },
      deleteCategory: function (categoryId) {
        this.$http.delete('http://localhost:8000/api/category/' + categoryId)
          .then(response => {
            let index = this.categories.indexOf(categoryId);
            this.categories.splice(index, 1);
          })
      }
    }
  }

</script>

<style>


</style>
