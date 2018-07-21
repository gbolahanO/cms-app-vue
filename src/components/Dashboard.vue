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
            <div class="card-header">Website Overview</div>
            <div class="card-body">
              <div class="row">

                <div class="col-lg-3">
                  <div class="card text-white bg-info mb-3">
                    <div class="card-header">
                      <div class="row text-light">
                        <div class="col-lg-3">
                          <span class="fa fa-shopping-cart" style="font-size: 3.5em;"></span>
                        </div>
                        <div class="col-lg-9 text-right">
                          <p style="font-size: 2.0em;">27</p>
                          <div style="font-size: 0.9em;">Posts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="card text-white bg-info mb-3">
                    <div class="card-header">
                      <div class="row text-light">
                        <div class="col-lg-3">
                          <span class="fa fa-shopping-cart" style="font-size: 3.5em;"></span>
                        </div>
                        <div class="col-lg-9 text-right">
                          <p style="font-size: 2.0em;">27</p>
                          <div style="font-size: 0.9em;">Categories</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="card text-white bg-info mb-3">
                    <div class="card-header">
                      <div class="row text-light">
                        <div class="col-lg-3">
                          <span class="fa fa-shopping-cart" style="font-size: 3.5em;"></span>
                        </div>
                        <div class="col-lg-9 text-right">
                          <p style="font-size: 2.0em;">27</p>
                          <div style="font-size: 0.9em;">Page Views</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-header">
              Create Post
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Post Title</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Post Category</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Career</option>
                    <option>Finance</option>
                    <option>Tech</option>
                  </select>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Career
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Relationship
                  </label>
                </div>
                <div class="form-group mt-2">
                  <label for="exampleFormControlFile1">Upload blog image</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Post Body</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias pariatur ea minus iste earum, sequi possimus
                    provident laborum impedit repellat quis reiciendis asperiores, quod sint perferendis suscipit exercitationem
                    tempore ratione.</textarea>
                </div>
                <button href="" class="btn btn-success btn-small">Save Changes</button>
                <button href="" class="btn btn-info btn-small">Cancel</button>
              </form>

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
    data () {
      return {

      }
    },
    components: {
      'Sidebar': Sidebar
    }
  }

</script>

<style>


</style>
