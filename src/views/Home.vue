<template>
  <div class="home">
    <h1>Sylvester</h1>
    <p>Velkommen ombord på Sylvester</p>
    <p>Hvis du har lejet båden kan du finde koden til låsen <router-link to="/access">her</router-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
export default class Home extends Vue {}
</script>
