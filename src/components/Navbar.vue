<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light mb-5  py-3">
    <a class="navbar-brand" href="#">cms-app</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">
            <a class="nav-link">Home <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/category/1/posts">
            <a class="nav-link">News</a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/category/2/posts">
            <a class="nav-link">Lifstyle</a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/category/3/posts">
            <a class="nav-link">Fresh</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutme">About me</a>
        </li>
        <li class="nav-item">
          <router-link to="/login">
            <a class="nav-link">Login</a>
          </router-link>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

</template>

<script>
export default {

}
</script>

<style>

</style>
