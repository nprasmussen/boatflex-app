<template>
  <div id="app" v-bind:class="{ open: isOpen }"> 
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/access">Adgang</router-link>
        <router-link to="/motor">Motor</router-link>
        <router-link to="/sails">Sejl</router-link>
        <router-link to="/contact">Kontakt</router-link>
        <button @click="logout">Log out</button>
      </div>
    </div>
    <div>
      <button @click="toggleMenu"></button>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'home',
    data() {
      return {
        isOpen: true,
      };
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('home');
        });
      },
      toggleMenu() {
        this.isOpen = !this.isOpen;
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
  display: grid;
  grid-template-columns: 0px auto;
}
#app.open {
  grid-template-columns: 200px auto;
}
#nav {
  background-color: aqua;
  padding: 3px;
  overflow: hidden;
}

#nav a {
  background-color: bisque;
  display: block;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  margin:0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
