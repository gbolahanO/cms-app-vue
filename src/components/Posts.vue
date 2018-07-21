<template>
  <div>
    <div class="container-fluid mt-5 bg-secondary text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 py-4">
            <h1>
              <span class="fa fa-trash"></span>Dashboard
              <small>manage your site</small>
            </h1>
          </div>
          <div class="col-lg-2 py-3 mt-3">
            <a href="" class="btn btn-info">Create content</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-2">
      <div class="row">
        <div class="col-lg-12 p-0">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Home</router-link>
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
                    <tr>
                      <td>Sampl bloe post</td>
                      <td>Career</td>
                      <td>05 june 2018</td>
                      <td>
                        <a href="edit.html" class="btn btn-secondary btn-sm">
                          <span class="fa fa-sync"></span>
                          Edit</a>
                      </td>
                      <td>
                        <a href="" class="btn btn-danger btn-sm">
                          <span class="fa fa-trash"></span>
                          Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Sampl bloe post</td>
                      <td>Career</td>
                      <td>05 june 2018</td>
                      <td>
                        <a href="" class="btn btn-secondary btn-sm">
                          <span class="fa fa-sync"></span>
                          Edit</a>
                      </td>
                      <td>
                        <a href="edit.html" class="btn btn-danger btn-sm">
                          <span class="fa fa-trash"></span>
                          Delete</a>
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
        posts: []
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
            console.log(response);
          })
      }
    }
  }

</script>

<style>


</style>
