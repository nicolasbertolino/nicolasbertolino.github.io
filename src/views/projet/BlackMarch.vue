<template>
  <div class="wrapper">
    <div class="projet-title">
      <h3>En cours de réalisation</h3>
      <h5>Client – <a target="_blank">Black March</a></h5>
    </div>
    <div class="projet-presentation">
      <h4>Développeur Full Stack</h4>
      <p></p>
    </div>
    <div class="projet-showcase">
      <p style="grid-column: 2/3; text-align: center;">Coming soon</p>
      <div class="projet-infos">
        <p><span>Date</span><span>Août 2019</span></p>
        <p><span>Lien vers le site</span><span><a class="link" target="_blank" href=""></a></span></p>
      </div>
      <p class="next-project"><router-link to="/projet/terrefete">Projet suivant — Terrefète</router-link></p>
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