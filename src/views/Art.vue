<template>
  <div class="art">
    <p>Oh, un peu de ci,<br />un peu de ça.</p>
    <div class="gallery">
      <img class="img-left" src="@/assets/images/art-fire.jpg" />
      <img class="img-right" src="@/assets/images/art-portrait1.jpg" />
      <img class="img-left" src="@/assets/images/art-fromabove.jpg" />
      <img class="img-right" src="@/assets/images/art-legs.jpg" />
      <img class="img-left" src="@/assets/images/art-Crystalball.jpg" />
      <img class="img-right" src="@/assets/images/art-Indianskull.jpg" />
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
p {
  max-width: 70ch;
	padding: 1ch;
  margin: 15vh 20vw 10vh;
}

.gallery {
  display: grid;
  grid-template-columns: 5vw repeat(5, 1fr) 5vw;
  grid-row-gap: 10vh;
}

.gallery img {
  width: 100%;
}

.img-left {
  grid-column: 2/5;
}

.img-right {
  grid-column: 4/7;
}

.gallery img:nth-child(1) {
  grid-row: 1;
}

.gallery img:nth-child(2) {
  grid-row: 2;
}

.gallery img:nth-child(3) {
  grid-row: 3;
}

.gallery img:nth-child(4) {
  grid-row: 4;
}

.gallery img:nth-child(5) {
  grid-row: 5;
}

.gallery img:nth-child(6) {
  grid-row: 6;
}

.gallery img:nth-child(7) {
  grid-row: 7;
}

.gallery img:nth-child(8) {
  grid-row: 8;
}

.gallery img:nth-child(9) {
  grid-row: 9;
}

.gallery img:nth-child(10) {
  grid-row: 10;
}

.gallery img:nth-child(11) {
  grid-row: 11;
}

.gallery img:nth-child(12) {
  grid-row: 12;
}

.gallery img:nth-child(13) {
  grid-row: 13;
}

.gallery img:nth-child(14) {
  grid-row: 14;
}

@media screen and (max-width: 900px) {
  .gallery {
    grid-template-columns: 5vw 1fr 5vw;
    grid-row-gap: 5vh;
  }

  .img-left,
  .img-right {
    grid-column: 2/3;
  }

  .p {
    padding: 1ch 5vw;
  }
}
</style>
