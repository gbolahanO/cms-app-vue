<template>
  <div>
    <div class="container-fluid bg-secondary mt-5 text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 py-4">
            <h1>
              <span class="fa fa-trash"></span>Post
              <small>create new post</small>
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
                  <a href="">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a>Create Category</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <Sidebar></Sidebar>
          <div class="col-lg-9">
            <div class="card">
              <div class="card-header">Create Category</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12">
                    <form @submit.prevent="submitCategory">
                      <div class="form-group">
                        <label for="">Category Name</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Category Name">
                      </div>
                      <button class="btn btn-success btn-small">Create</button>
                    </form>
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
        name: ''
      }
    },
    components: {
      'Sidebar': Sidebar
    },
    methods: {
      submitCategory: function () {
        let data = {
          name: this.name
        }
        this.$http.post('api/category', data)
          .then(response => {
            console.log(response + ' ' + 'success')
          , e => {
            console.log(e + 'errorererer');
          }});

        console.log(this.name);
      }
    }
  }

</script>

<style>
</style>
