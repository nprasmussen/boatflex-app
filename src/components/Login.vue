<template>
  <div class="about">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="E-mail">
    <input type="text" v-model="password" placeholder="Kode">
    
    
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

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(): void {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('/');
        },
        (err) => {
          alert('Oops. ' + err.message);
        },
      );
    },
  },
};
</script>
<style>
input {
  margin: 10px 0;
  padding: 15px 0;
  width: 100%;
  max-width: 300px;
  border: 1px solid #8499b5;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
}
button {
  cursor: pointer;
}
</style>