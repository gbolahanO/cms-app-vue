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
                  <router-link to="/post/create">Create Post</router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <Sidebar></Sidebar>
          <div class="col-lg-9">
            <div class="card">
              <div class="card-header">Create Post</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12">
                    <form @submit.prevent="submitPost">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Post Title</label>
                        <input v-validate="'required'" v-model="title" name="Post Title" type="text" class="form-control" placeholder="Post Title">
                        <div v-show="errors.has('Post Title')" class="alert alert-danger">
                          <span>{{ errors.first('Post Title') }}</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="">Post Category</label>
                        <select v-validate="'required'" name="Category" v-model="category_id" class="form-control">
                          <option value="">Select Category</option>
                          <option value="1">News</option>
                          <option value="2">Lifestyle</option>
                          <option value="3">Fresh</option>
                        </select>
                      </div>
                      <div v-show="errors.has('Category')" class="alert alert-danger">
                        <span>{{ errors.first('Category') }}</span>
                      </div>
                      <div class="form-group mt-2">
                        <label for="">Upload blog image</label>
                        <input type="file" class="form-control-file">
                      </div>
                      <div class="form-group">
                        <label for="">Post Content</label>
                        <textarea v-validate="'required'" name="Content" v-model="content" class="form-control"></textarea>
                      </div>
                      <div v-show="errors.has('Content')" class="alert alert-danger">
                        <span>{{ errors.first('Content') }}</span>
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
import axios from 'axios'
import Sidebar from './Sidebar'
export default {
  data() {
    return {
      title: '',
      category_id: '',
      content: ''
    }
  },
  components: {
    'Sidebar': Sidebar
  },
  methods: {
    submitPost: function () {
      let data = {
        user_id: 1,
        category_id: this.category_id,
        title: this.title,
        content: this.content
      }
      axios.post(`http://localhost:8000/api/post`, data)
        .then(response => {
          console.log(response + ' ' + 'success')
          }).catch(e => {
          console.log(e + 'errorererer');
        });

      console.log(data);
    }
  }
}

</script>

<style>
</style>
