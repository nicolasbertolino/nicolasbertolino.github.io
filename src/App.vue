<template>
  <div id="app">
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};


</script>

<style>
@import "./assets/css/style.css";

/* Pages transition */
.page {
  width: 100%;
}

.view-enter-active,
.view-leave-active {
  transition: opacity .5s ease-in-out;
}

.view-enter-active {
  transition-delay: .5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>