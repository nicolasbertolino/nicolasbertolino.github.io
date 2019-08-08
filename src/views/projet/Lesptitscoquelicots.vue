<template>
  <div class="wrapper">
    <div class="projet-title">
      <h3>La Maison d'assistantes maternelles est un mode de garde innovant et original pour les enfants</h3>
      <h5>Client – <a target="_blank" href="https://www.lesptitscoquelicots.com/">Les p'tits coquelicots</a></h5>
    </div>
    <div class="projet-presentation">
      <h4>Développeur front-end</h4>
      <p></p>
    </div>
    <div class="projet-showcase">
      <p style="grid-column: 2/3; text-align: center;">Coming soon</p>
      <div class="projet-infos">
        <p><span>Date</span><span>Septembre 2018</span></p>
        <p><span>Lien vers le site</span><span><a class="link" target="_blank" href="https://www.lesptitscoquelicots.com/">lesptitscoquelicots.com</a></span></p>
      </div>
      <p class="next-project"><router-link to="/projet/liebr">Projet suivant — Liebr</router-link></p>
    </div>
    <ScrolltoTop />
  </div>
</template>

<script>
import ScrolltoTop from "@/components/ScrolltoTop.vue";

export default {
  components: {
    ScrolltoTop
  }
};
</script>

<style scoped>
a {
  color: #fca901;
}
</style>