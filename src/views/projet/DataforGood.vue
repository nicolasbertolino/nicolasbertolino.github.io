<template>
  <div class="wrapper">
    <div class="projet-title">
      <h3>Le numérique au service de l'intérêt général</h3>
      <h5>Client – <a target="_blank" href="https://dataforgood.fr/">Data for Good</a></h5>
    </div>
    <div class="projet-presentation">
      <h4>Développeur front-end</h4>
      <p></p>
    </div>
    <div class="projet-showcase">
      <img src="@/assets/images/dataforgood1.jpg">
      <div class="projet-infos">
        <p><span>Date</span><span>Juin 2019</span></p>
        <p><span>Lien vers le site</span><span><a class="link" target="_blank" href="https://dataforgood.fr/">dataforgood.fr</a></span></p>
      </div>
      <p class="next-project"><router-link to="/projet/blackmarch">Projet suivant — Black March</router-link></p>
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