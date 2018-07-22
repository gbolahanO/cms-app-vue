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
                  <a>Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a>Create Post</a>
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
                        <input v-model="title" type="text" class="form-control" placeholder="post title">
                      </div>
                      <div class="form-group">
                        <label for="">Post Category</label>
                        <select v-model="category_id" class="form-control">
                          <option value="">Select Category</option>
                          <option value="1">News</option>
                          <option value="2">Lifestyle</option>
                          <option value="3">Fresh</option>
                        </select>
                      </div>
                      <div class="form-group mt-2">
                        <label for="">Upload blog image</label>
                        <input type="file" class="form-control-file">
                      </div>
                      <div class="form-group">
                        <label for="">Post Content</label>
                        <textarea v-model="content" class="form-control"></textarea>
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
        this.$http.post(`api/post`, data)
          .then(response => {
            console.log(response + ' ' + 'success')
          , e => {
            console.log(e + 'errorererer');
          }});

        console.log(data);
      }
    }
  }

</script>

<style>
</style>
