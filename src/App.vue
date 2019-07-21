<template>
  <div id="app"> 
    
    <div id="header">
      <h1>Sylvester</h1>
    </div>

    <div class="container">
      <router-view/>
    </div>
    

    <div id="nav">
      <router-link to="/">⛵️</router-link>
      <router-link to="/access">🔐</router-link>
      <router-link to="/motor">💡</router-link>
      <router-link to="/sails">📞</router-link>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'home',
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('home');
        });
      },
    },
  };
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.container {
  padding: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  background-color: lightslategrey;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
}

#header h1 {
  font-size: 10px;
  color: white;
  margin: 0;
}

#nav {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  border-top: 5px solid #234090;
}

#nav a {
  display: inline-block;
  background-color: lightslategrey;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 5px;
  text-decoration: none;
  font-size: 30px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px; 
  height: 70px;
  width: 25%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
