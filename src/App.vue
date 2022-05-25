<script setup>
import { onMounted, ref } from 'vue';
import Hero from './components/Hero.vue';
import MainContent from './components/MainContent.vue';
import IndigoFooter from './components/IndigoFooter.vue';
</script>

<template>
  
  <div>

    <!-- full layout -->
    <div class="header">
      <Hero/>
    </div>
    
    <div class="content">
      <MainContent/>
    </div>

    <div class="footer">
      <IndigoFooter/>
    </div>

  </div>
  
</template>

<style>
@import url(http://fonts.cdnfonts.com/css/roboto);

#app {
  font-family: Century Gothic, roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5f8bb8;
}

body, html {
  margin: 0;
  scroll-behavior: smooth;
}

.header {
  padding: 0px;
  font-size: 40px;
  text-align: center;
  background: white;
  height: 100vh;
}

.content {
}

.testblock {
  height: 100vh;
}

.layout {
  background-color: #ffffff;
}


</style>
