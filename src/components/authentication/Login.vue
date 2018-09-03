<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div class="card mt-5">
          <div class="card-body">
            <form @submit.prevent="login" class="form-signin">
              <h1 class="h3 mb-4 font-weight-normal">Please sign in</h1>

              <input v-validate="'required|email'" name="email" v-model="email" type="text" class="form-control" placeholder="Email address" >
              <div v-show="errors.has('email')" class="alert alert-danger" role="alert">
                <span>{{ errors.first('email') }}</span>
              </div>

              <input v-validate="'required|min:6'" name="password" v-model="password" type="password" class="form-control mt-3" placeholder="Password" >
              <div v-show="errors.has('password')" class="alert alert-danger" role="alert">
                <span>{{ errors.first('password') }}</span>
              </div>

              <button class="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
              <p class="mt-4 mb-1 text-muted">&copy; 2018</p>
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
      this.$validator.validateAll().then((result) => {

        if (result) {
            let data = {
            'grant_type': 'password',
            'client_id': 2,
            'client_secret': '8KWW4F7TjwsDHPgBDHwjiCr3bSU1AzxSTDbkrSsr',
            'username': this.email,
            'password': this.password
          };

          this.$http.post('oauth/token', data)
            .then(response => {
              this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
              this.$router.push('/dashboard');
            })
            .catch(e => {
              console.log(e);
            });
          return;
        }
      });

    }
  }
}
</script>

<style>

</style>
