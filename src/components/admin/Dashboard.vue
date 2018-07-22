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
