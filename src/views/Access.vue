<template>
  <div class="access">
    <h1>Adgang til båden</h1>
    <p>Koden til båden er</p>
    <input type="text" v-model="pin" disabled>
    <div>
      <input type="number" v-model="pin0" min="0" max="9">
      <input type="number" v-model="pin1" min="0" max="9">
      <input type="number" v-model="pin2" min="0" max="9">
      <input type="number" v-model="pin3" min="0" max="9">
    </div>
  </div>
</template>


<script lang="ts">
import db from './../db';

export default {
  name: 'db',
  data() {
    return {
      pin: '',
    };
  },
  beforeMount(){
    this.getPin()
  },
  methods: {
    getPin: function() {
   // retrieve a collection
      db.collection('pinCode')
        .get()
        .then(
          (querySnapshot) => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            this.pin = documents[0].pin;
            // do something with documents
          }
        ),
        function(err) {
          alert('Oops. ' + err.message)
        }
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