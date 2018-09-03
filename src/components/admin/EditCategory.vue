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
                  <router-link :to="'/category/edit/' + this.$route.params.id">Edit Category</router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <Sidebar></Sidebar>
          <div class="col-lg-9">
            <div class="card">
              <div class="card-header">Edit Category</div>
              <div class="card-data">
                <div class="row">
                  <div class="col-lg-12">
                    <form @submit.prevent="submitCategory">
                      <div class="form-group">
                        <label for="">Category Name</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Category Name">
                      </div>
                      <button href="" class="btn btn-success btn-small">Save Changes</button>
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
import axios from 'axios'
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
  created() {
    axios.get(`http://localhost:8000/api/category/${this.$route.params.id}/edit`)
      .then(response => {
        this.name = response.data.name;
        console.log(response);
      })
  },
  methods: {
    submitCategory: function () {
      let data = {
        name: this.name
      }
      axios.patch(`http://localhost:8000/api/category/${this.$route.params.id}`, data)
        .then(response => {
          console.log(response + ' ' + 'success')
        }).catch(e => {
          console.log(e + 'errorererer');
        });

      console.log(this.name);
    }
  }
}

</script>

<style>
</style>
