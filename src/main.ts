import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBvcBmmHy5Jjtr9rXnkzLG6YU2vtAZDmD8",
  authDomain: "sylvester-b0653.firebaseapp.com",
  databaseURL: "https://sylvester-b0653.firebaseio.com",
  projectId: "sylvester-b0653",
  storageBucket: "",
  messagingSenderId: "380010415051",
  appId: "1:380010415051:web:17af83399a0b2012"
};

firebase.initializeApp(config);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
