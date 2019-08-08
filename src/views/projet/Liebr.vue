<template>
  <div class="wrapper">
    <div class="projet-title">
      <h3>Trouver le bon mécanicien n'a jamais été aussi simple</h3>
      <h5>Client – <a target="_blank" href="https://nicolasbertolino.github.io/Liebr/">Liebr</a></h5>
    </div>
    <div class="projet-presentation">
      <h4>Développeur front-end</h4>
      <p>Liebr est une plateforme de mise en relation entre usagers deux-roues et mécaniciens professionnels. J'ai offert mon aide en proposant un redesign de leur site actuellement en place. J'ai ainsi réalisé un template qui a été intégré immédiatement avant de se voir proposer un trop grand nombre de modifications pour appeler le design actuel mien. Ceci est donc la présentation du template tel que je l'ai délivré à l'hiver 2019.</p>
    </div>
    <div class="projet-showcase">
      <img src="@/assets/images/liebr1.jpg">
      <img src="@/assets/images/liebr2.jpg">
      <img src="@/assets/images/liebr3.jpg">
      <img src="@/assets/images/liebr4.jpg">
      <img id="projet-img-responsive" src="@/assets/images/liebr5.jpg">
      <div class="projet-infos">
        <p><span>Date</span><span>Mars 2019</span></p>
        <p><span>Lien vers le template</span><span><a class="link" target="_blank" href="https://nicolasbertolino.github.io/Liebr/">nicolasbertolino.github.io/Liebr</a></span></p>
      </div>
      <p class="next-project"><router-link to="/projet/dataforgood">Projet suivant — Data for good</router-link></p>
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
