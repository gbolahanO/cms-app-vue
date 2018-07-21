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
