<template>
  <header>
    <router-link class="header-logo" to="/">
      <Logo />
    </router-link>
    <!-- Nav -->
    <div class="nav">
        <p><router-link to="/" class="nav-items">Portfolio</router-link></p>
        <p><router-link to="/art" class="nav-items">Illustrations</router-link></p>
        <p><router-link to="/contact" class="nav-items">Contact</router-link></p>
    </div>
    <!-- Menu -->
    <div class="menu">
      <div :class="{ visible: isVisible }">
        <div class="overlay">
          <div class="overlay-content" @click="myMenu()">
            <router-link to="/" class="menu-items">Portfolio</router-link>
            <router-link to="/art" class="menu-items">Illustrations</router-link>
            <router-link to="/contact" class="menu-items">Contact</router-link>
          </div>
        </div>
      </div>
      <div @click="myMenu()" :class="{ active: isActive }" id="hamburger">
        <span class="bar bar-left"></span>
        <span class="bar"></span>
        <span class="bar bar-right"></span>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      isActive: false,
      isVisible: false
    };
  },
  methods: {
    myMenu: function() {
      this.isVisible = !this.isVisible;
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  padding: 0 3vw;
}

/* Logo */

.header-logo {
  width: 300px;
  z-index: 3;
}

@media screen and (max-width: 370px) {
  .header-logo {
    width: 250px;
  }
}

/* Nav */

.nav {
  display: flex;
  justify-content: space-between;
  min-width: 500px;
}

.nav-items:hover {
  color: #fca901;
}

@media screen and (max-width: 1000px) {
  .nav {
    display: none;
  }
}

/* Hamburger */

#hamburger {
  z-index: 2;
  cursor: pointer;
}

.bar {
  height: 2px;
  width: 40px;
  display: block;
  background-color: #000;
  margin-bottom: 4px;
  transition: transform 0.2s ease, background-color 0.5s ease;
}

.bar-left {
  width: 20px;
}

.bar-right {
  width: 20px;
  float: right;
}

.active .bar {
  transform: translateX(0px) rotate(-45deg);
}

.active .bar-left {
  transform: translate(3px, -1px) rotate(45deg);
}

.active .bar-right {
  transform: translate(-3px, 1px) rotate(45deg);
}

/* Menu */

.menu {
  display: none;
}

@media screen and (max-width: 1000px) {
  .menu {
    display: flex;
  }
}

.overlay {
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  z-index: 1;
  background-color: #fca901;
  transition: cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition-delay: 0.1s;
}

.overlay::before,
.overlay::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  transition: cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
}

.visible .overlay {
  visibility: visible;
  height: 100%;
  transition-delay: 0s;
}

.visible .overlay::before,
.visible.overlay::after {
  height: 100%;
  transition-delay: 0.1s;
}

/* Menu content */

.overlay-content {
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* gap: 5rem; */
  position: relative;
  left: calc(50% - 25vw);
  padding-top: 55px;
}

.menu-items {
  pointer-events: auto;
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.2s ease, transform 0.3s ease;
  text-decoration: none;
  color: #282828;
  font-family: "Freight Text";
  letter-spacing: 2px;
  font-size: 3.5rem;
  position: relative;
  overflow: visible;
  padding: 2rem 0;
}

.menu-items:hover {
  color: #fca901;
}

.menu-items:nth-child(1)::after,
.menu-items:nth-child(2)::after,
.menu-items:nth-child(3)::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100%);
  opacity: 0;
  width: max-content;
  pointer-events: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: #000;
  display: inline-block;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.1, 1),
    opacity 0.35s cubic-bezier(0.4, 0, 0.1, 1);
}

.menu-items:nth-child(1):hover::after,
.menu-items:nth-child(2):hover::after,
.menu-items:nth-child(3):hover::after {
  opacity: 1;
  transform: translateX(0);
}

.menu-items:nth-child(1)::after {
  content: "Quand je m'y mets.";
}

.menu-items:nth-child(2)::after {
  content: "Entre deux projets.";
}

.menu-items:nth-child(3)::after {
  content: "Qui suis-je et comment me joindre.";
}

@media screen and (max-width: 570px) {
  .menu-items:nth-child(3)::after {
    width: 100%;
  }

  .overlay-content {
    left: 10%;
  }
}

@media screen and (max-width: 390px) {
  .menu-items {
    font-size: 2.5rem;
  }
}

.visible .menu-items {
  opacity: 1;
  transform: translateY(0);
}

.visible .menu-items:nth-child(1) {
  transition-delay: 0.5s;
}

.visible .menu-items:nth-child(2) {
  transition-delay: 0.6s;
}

.visible .menu-items:nth-child(3) {
  transition-delay: 0.7s;
}

/* Menu items on active */

.on-page.menu-items,
.on-page.nav-items {
  color: #fca901;
}
</style>
