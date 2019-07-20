<template>
  <div class="about">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password">
    
    <button @click="login">Vis</button>
    
    <div class="g-recaptcha"
          id='recaptcha-container'
          data-sitekey="6LcWqq4UAAAAAL4EMnH1Up7Hnwl97MCMXzC2iL2W"
          data-callback="onSubmit"
          data-size="invisible">
    </div>

    
  </div>
</template>

<script lang="ts">
import firebase from 'firebase';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      phoneNumber: ''
    };
  },
  components: { VueRecaptcha },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert('Well done ! You are now connected');
          this.$router.replace('access')
        },
        function(err) {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>
<style>
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  cursor: pointer;
}
</style>