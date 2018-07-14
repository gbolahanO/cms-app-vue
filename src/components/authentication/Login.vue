<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div class="card mt-5">
          <div class="card-body">
            <form @submit.prevent="login" class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

              <label class="sr-only mb-2">Email address</label>
              <input v-model="email" type="email" class="form-control" placeholder="Email address" >

              <label class="sr-only">Password</label>
              <input v-model="password" type="password" class="form-control" placeholder="Password" >

              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2018</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(`${this.email} ${this.password}`);
    }
  }
}
</script>

<style>

</style>
