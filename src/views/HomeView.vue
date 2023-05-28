<template>
  <BackGround activeColour='pink'/>
    <div class="container">
      <NamePlate/>
      <NavBar/>
    </div>
    <div class="home">
        <HomeWorld/>
        <div>
          <ul>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
            <li class="item"><ProjectCard link="https://www.google.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan nibh tellus, in euismod ante posuere ut. Nam id mattis lectus, eget iaculis velit. Praesent in purus maximus justo aliquet vestibulum."/></li>
          </ul>
        </div>
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import HomeWorld from '@/components/HomeWorld.vue'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
import NamePlate from '@/components/NamePlate.vue'
import NavBar from '@/components/NavBar.vue'
import BackGround from '@/components/BackGround/BackGround.vue';

export default defineComponent({
  name: 'HomeWorldView',
  components: {
    HomeWorld,
    ProjectCard,
    NamePlate,
    NavBar,
    BackGround
  },
  watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Some Default Title';
            }
        },
    }
});
</script>

<style scoped>
  li {
    float: left;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: #333333; */
  }

  .item{
    padding: 16px;
  }

  .container{
    display:flex;
    justify-content: space-between;
  }

  .home{
    display: flex;
    flex-direction: column;
  }

  .bullet::before{
    content: "";
    width: 9px;
    height: 9px;
    border: 2px solid greenyellow;
    border-radius:50%;
    background-color: green;
    position: absolute;
  }
</style>
