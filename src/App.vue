<template>
  <div id="app">
    <Test />
    <FileUpload/>
    <FileShow/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import FileUpload from './components/FileUpload.vue'
import FileShow from "./components/FileShow.vue"
export default {
  name: 'App',
  components: {
    Test,
    FileUpload,
    FileShow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
