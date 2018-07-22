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
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="edit.html">Edit Post</a>
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
                        <label for="exampleFormControlInput1">Post Title</label>
                        <input v-model="post.title" type="text" class="form-control" placeholder="post title">
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Post Category</label>
                        <select v-model="post.category_id" class="form-control">
                          <option value="1">Career</option>
                          <option value="2">Finance</option>
                          <option value="3">Tech</option>
                        </select>
                      </div>
                      <div class="form-group mt-2">
                        <label for="exampleFormControlFile1">Upload blog image</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
      this.$http.get(`api/post/${this.$route.params.id}/edit`)
        .then(response => {
          this.post = response.body;
          console.log(response);
        })
    },
    methods: {
      submitPost: function () {
       this.$http.patch(`api/post/${this.$route.params.id}`, this.post)
        .then(response => {
          console.log(response + ' ' + 'success')
        , e => {
          console.log(e + 'errorererer');
        }});

        console.log(this.post);
      }
    }
  }

</script>

<style>
</style>
