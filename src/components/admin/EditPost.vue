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
                  <router-link :to="'/post/edit/' + this.$route.params.id">Edit Post</router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <Sidebar></Sidebar>
          <div class="col-lg-9">
            <div class="card">
              <div class="card-header">Edit Post</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12">
                    <form @submit.prevent="submitPost">
                      <div class="form-group">
                        <label for="">Post Title</label>
                        <input v-model="post.title" type="text" class="form-control" placeholder="post title">
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Post Category</label>
                        <select v-model="post.category_id" class="form-control">
                          <option value="1">News</option>
                          <option value="2">Lifestyle</option>
                          <option value="3">Fresh</option>
                        </select>
                      </div>
                      <div class="form-group mt-2">
                        <label for="">Upload blog image</label>
                        <input type="file" class="form-control-file" id="">
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Post Content</label>
                        <textarea v-model="post.content" class="form-control"></textarea>
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
      post: {}
    }
  },
  components: {
    'Sidebar': Sidebar
  },
  created() {
    axios.get(`http://localhost:8000/api/post/${this.$route.params.id}/edit`)
      .then(response => {
        this.post = response.data;
        console.log(response);
      })
  },
  methods: {
    submitPost: function () {
      axios.patch(`http://localhost:8000/api/post/${this.$route.params.id}`, this.post)
      .then(response => {
        console.log(response + ' ' + 'success')
      }).catch(e => {
        console.log(e + 'errorererer');
      });

      console.log(this.post);
    }
  }
}

</script>

<style>
</style>
