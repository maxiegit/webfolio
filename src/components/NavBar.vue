<template>
  <nav>
    <router-link class="navlink" to="/">Home</router-link> |
    <router-link class="navlink" to="/about">About</router-link> |
    <a class="navlink" href="https://www.google.com">Google</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavBar"
})
</script>

<style>
nav{
    font-size: 25px;
}

.navlink {
    text-decoration: none;
    color: inherit; 
    font-weight: normal;
    transform: scale(1.05) !important
    /* transition: all 0.1ms ease-in-out; */
}

.navlink:hover {
    /* font-weight: bold; */
    text-transform: scale(1.05);
}

</style>