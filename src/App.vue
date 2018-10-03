<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div class="">
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/FirstRoute/Lin">FirstRoute</router-link></li>
          <li><router-link to="/FirstRoute/Lin/child">FirstRouteChild</router-link></li>
          <li><router-link to="/One/11">One</router-link></li>
          <li><router-link to="/One/11/child">OneChild</router-link></li>
      </ul>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
