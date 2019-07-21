<template>
  <div class="access">
    <h1>Adgang til båden</h1>
    <p>Koden til båden er</p>
    <div>

      <ul id="example-1">
      <li v-for="pinCode in pinCodes">
        {{ pinCode.pin }}, {{ pinCode.createdAt }}
      </li>
    </ul>
      <title>{{ currentPin }}</title>
      <input class="digit" type="number" v-model="currentPin[0]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[1]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[2]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[3]" min="0" max="9" disabled>  
      <!-- <button @click="addPin">Update pin</button> -->
    </div>

    

  </div>
</template>


<script lang="ts">
import db from './../db';
import firebase from 'firebase';

export default {
  name: 'db',
  data() {
    return {
      pinCodes: Array,
    };
  },
  computed: {
    currentPin() {
      const splitCode = this.pinCodes[0].pin.split('');
      return splitCode;
    },
  },
  firestore: {
    pinCodes: db.collection('pinCode').orderBy('createdAt', 'desc'),
  },
  // methods: {
  //   addPin: function(pin) {
  //     db.collection('pinCode')
  //       .add({
  //       pin: ""+this.pin0+this.pin1+this.pin2+this.pin3,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //   }
  // }
};
</script>
<style>
input {
  margin: 10px 10px;
  width: 20%;
  padding: 15px;
}
.digit {
  height: 50px;
  width: 50px;
  font-size: 20px;
  text-align: center;
  padding: 5px 0 5px 10px;
}
button {
  cursor: pointer;
}
</style>