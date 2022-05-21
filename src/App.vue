<script setup>
import { onMounted, ref } from 'vue';
import Hero from './components/Hero.vue';
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  
  <div>
    
    <!-- full layout -->
    <div class="header">
      <Hero/>
    </div>
    
    <div class="content">
      <AboutMe/>
    </div>



  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5f8bb8;
}

body, html {
  margin: 0;
}

.header {
  padding: 0px;
  font-size: 40px;
  text-align: center;
  background: white;
  height: calc(100vh);
}

.content {
  display: flex;
  margin-left: 20vh;
  margin-right: 20vh; 
  justify-content: center;
}

.testblock {
  height: 100vh;
}

.layout {
  background-color: #ffffff;
}


</style>
