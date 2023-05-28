<template>
    <a  class="cardBody blue" :href="link">        
        <p class="cardText">{{ text }}</p>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    link: {
      type: String,
      required: false
        },
    text: {
        type: String,
        required: false
      }
    },
    computed: {

    }
});
</script>


<style src="./ProjectCard.css">
   
</style>