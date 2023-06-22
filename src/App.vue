<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
    #app{ 
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

</style>