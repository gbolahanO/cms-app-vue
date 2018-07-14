<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
</style>
