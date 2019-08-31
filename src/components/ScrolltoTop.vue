<template>
  <div @click="topFunction()" class="scrolltotop">
    <p class="b-link">(Retour en haut)</p>
  </div>
</template>

<script>
export default {
  methods: {
    topFunction: function() {
      window.scrollTo(0,0);
    }
  }
};
</script>

<style>
.scrolltotop {
  position: absolute;
  bottom: 18px;
  left: 3vw;
  cursor: pointer;
}

.scrolltotop p {
  font-weight: 300;
  margin: 0;
}
</style>
