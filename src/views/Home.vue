<template>
  <div class="home">
    <h3>Benzintank</h3>
    <p>I kistebænken på bagbord side er benzintanken. Åben først ventilen for at udligne trykket før tilslutning. Slut benzinslangen til ved at trække den igennem hullet bagerst i kistebænken og forbind den til tanken. Slut den derefter til motoren.
    </p>
    <div class="two-images">
      <img src="../../public/img/instrukser/benzin-tank-bank.jpg" alt="">
      <img src="../../public/img/instrukser/benzin-tank-ventil.jpg" alt="">
    </div>
    
    <h3>Klargør motor</h3>
    <p>Før du starter motoren skal den tiltes og sænkes i vandet. Motoren tiltes ved at trække motoren lidt tilbage og trykke den viste "arm" ind mens motoren tiltes tilbage.</p>
    <img src="../../public/img/instrukser/motor-tilt.jpg" alt="">
      
    <p>Når motoren er tiltet kan du sænke den ned i vandet. Motoren sænkes ved at løfte i det beslag den er fastgjort med og trække "splitten" ud. Lad splitten hænge på ydersiden af beslaget.</p>
    <div class="two-images">
      <img src="../../public/img/instrukser/motor-oppe.jpg" alt="">
      <img src="../../public/img/instrukser/motor-nede.jpg" alt="">
    </div>

    <h3>Start motoren</h3>
    <p>For at du starte motoren skal den sættes i RUN. Derefter pumpes benzin ind i motoren. Det gør du på "pumpebolden" på benzinslangen. Giv den et par tryk indtil den bliver hård.</p>
    <div class="two-images">
      <img src="../../public/img/instrukser/motor-on.jpg" alt="">
      <img src="../../public/img/instrukser/motor-pumpe.jpg" alt="">
    </div>
    <p>Derefter skal du trække chokeren ud. Den er helt ude når den siger 'Klik'. Til sidst skal motoren sættes i RUN.</p>
    <div class="two-images">
      <img src="../../public/img/instrukser/motor-choker-ind.jpg" alt="">
      <img src="../../public/img/instrukser/motor-choker-ud.jpg" alt="">
    </div>

    <p>Du kan nu starte motoren ved at trække i startsnoren. Når motoren er igang trykker du chokeren ind igen</p>
    <div class="two-images">
      <img src="../../public/img/instrukser/motor-choker-ud.jpg" alt="">
      <img src="../../public/img/instrukser/motor-choker-ind.jpg" alt="">
    </div>

    <p>Tjek at der er en vandstråle fra motoren når den kører. God tur.</p>
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
