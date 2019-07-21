<template>
  <div class="home">
    <h3>Nøgler og nøglekort</h3>
    <p>I skuffen på bagbord side finder du nøglekort, 
      som kan bruges til at benytte toiletterne på havnekontoret. Der ligger også et sæt nøgle til kistebænkene.
    </p>
    <img src="https://firebasestorage.googleapis.com/v0/b/sylvester-b0653.appspot.com/o/guide%2FIMG_1824.jpg?alt=media&token=06b005a3-be51-49e9-b41c-5efd0eea7ef7" alt="">
    <img src="https://firebasestorage.googleapis.com/v0/b/sylvester-b0653.appspot.com/o/guide%2FIMG_1826.jpg?alt=media&token=f2914929-7a5c-4bba-a7bb-8c43a6e82898" alt="">
    
    <h3>Benzintank</h3>
    <p>I kistebænken på bagbord side er benzintanken. Åben først ventilen for at udligne trykket før tilslutning. Slut benzinslangen til ved at trække den igennem hullet bagerst i kistebænken og forbind den til tanken. Slut den derefter til motoren.
    </p>
    <div class="two-images">
      <img src="https://firebasestorage.googleapis.com/v0/b/sylvester-b0653.appspot.com/o/guide%2FIMG_1834.jpg?alt=media&token=ab9df5b9-dfc4-41e4-934a-6e90ada4eb95" alt="">
      <img src="https://firebasestorage.googleapis.com/v0/b/sylvester-b0653.appspot.com/o/guide%2FIMG_1833.jpg?alt=media&token=12fa7ec6-92f7-4979-bd0f-efc8e2212990" alt="">
    </div>
    
    <p>Start motoren</p>
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

<style>
.home {
  padding-bottom: 100px;
}
.two-images {
  width: 100%;

}
.two-images img {
  width: 50%;
}
img {
  width: 80%;
  max-width: 300px;
}
</style>
