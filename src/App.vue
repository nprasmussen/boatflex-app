<template>
  <div id="app"> 
    <div id="nav">
      <router-link to="/">⛵️</router-link>
      <router-link to="/access">🔐</router-link>
      <router-link to="/motor">💡</router-link>
      <router-link to="/sails">📞</router-link>
      <button @click="logout">Log out</button>
    </div>
    <div>
      <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: aqua;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  border-top: 1px solid #234090;
}

#nav a {
  background-color: bisque;
  display: inline-block;
  font-weight: bold;
  color: #2c3e50;
  margin:0;
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
