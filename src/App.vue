<template>
  <Navbar />

  <RouterView />

  <Foot />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Foot from "./components/Footer.vue"
import { RouterView } from 'vue-router'
export default {
  name: "App",
  components: {
    Navbar,
    Foot
    },
  }
</script>

<style>

</style>
