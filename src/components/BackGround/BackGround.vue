<template>
  <div class="background" :style="{backgroundColor: activeColour}"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BackGround",
    props:{
        activeColour:{
            type: String,
            required: true
        }
    }
})

</script>

<style>

</style>