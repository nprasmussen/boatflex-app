<template>
  <div class="home">
    <h3>Nøgler og nøglekort</h3>
    <p>I skuffen på bagbord side finder du nøglekort, 
      som kan bruges til at benytte toiletterne på havnekontoret. Der ligger også et sæt nøgler til kistebænkene.
    </p>
    <img src="../../public/img/instrukser/skuffe-til-nogler.jpg" alt="">
    <img src="../../public/img/instrukser/noglekort.jpg" alt="">
    
    <h3>Benzintank</h3>
    <p>I kistebænken på bagbord side er benzintanken. Åben først ventilen for at udligne trykket før tilslutning. Slut benzinslangen til ved at trække den igennem hullet bagerst i kistebænken og forbind den til tanken. Slut den derefter til motoren.
    </p>
    <div class="two-images">
      <img src="../../public/img/instrukser/benzin-tank-bank.jpg" alt="">
      <img src="../../public/img/instrukser/benzin-tank-ventil.jpg" alt="">
    </div>
    
    <p>Start motoren</p>
    <p>Før du starter motor skal du pumpe benzin ind i motoren. Det gør du på "pumpebolden" på benzinslangen. Giv den et par tryk indtil den bliver hård.</p>
    <p>Derefter skal du trække chokeren ud. Den er helt ude når den siger 'Klik'. Til sidst skal motoren sættes i RUN.</p>
    
    <router-link to="/adgang">her</router-link>
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
