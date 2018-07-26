<template>
  <div>
    <div class="container-fluid py-4"></div>
    <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12 p-0">
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/dashboard">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/category/create">Create Category</router-link>
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
                        <input v-validate="'required'" name="category name" v-model="name" type="text" class="form-control" placeholder="Category Name">
                        <div v-show="errors.has('category name')" class="alert alert-danger" role="alert">
                          <span>{{ errors.first('category name') }}</span>
                        </div>
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
        this.$validator.validateAll().then((result) => {
          if (result) {
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
            return;
          }
        })
      }
    }
  }

</script>

<style>
</style>
