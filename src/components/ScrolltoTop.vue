<template>
  <div @click="topFunction()" class="scrolltotop">
    <p>&#10230</p>
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
  bottom: 20vh;
  right: 2.5vw;
  cursor: pointer;
}

.scrolltotop:hover {
  color: #fca901;
}

.scrolltotop p {
  transform: rotate(-90deg);
  font-size: 2rem;
}
</style>
