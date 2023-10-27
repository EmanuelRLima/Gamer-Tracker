<template>
<Navbar />

<Games />

<Foot />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Games from "./components/Games.vue"
import Foot from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Navbar,
    Games,
    Foot
    },
    data() {
    return {
      
    }}
  }
</script>

<style>

</style>
