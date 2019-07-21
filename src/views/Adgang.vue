<template>
  <div class="adgang">
    <h1>Adgang til båden</h1>
    <p>Koden til båden er</p>
    <div v-if="pinCodes.length">
      <input class="digit" type="number" v-model="currentPin[0]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[1]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[2]" min="0" max="9" disabled>
      <input class="digit" type="number" v-model="currentPin[3]" min="0" max="9" disabled>  
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
      pinCodes: '',
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
  width: 20%;
  padding: 15px;
}
.invisible {
  display: none;
}
.digit {
  height: 30px;
  width: 30px;
  font-weight: bold;
  border: 1px solid #8499b5;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
}
button {
  cursor: pointer;
}
</style>