<template>
  <main>
    <h1>Folio—19</h1>
    <!--  -->
    <header>
      <div>
        <p>Nicolas Bertolino</p>
        <p>Développement & design</p>
      </div>
      <div>
        <p>Disponible pour un projet<br /><a class="a-link" href="mailto:bertolinonicolas@gmail.com">bertolinonicolas@gmail.com</a></p>
      </div>
    </header>
    <!--  -->
    <div class="highlight">
      <img src="@/assets/images/highlightimg.jpg" />
      <div class="show">
        <p>Lumière sur</p>
        <h1 style="text-align: left;">Les<br />p'tits coquelicots</h1>
        <div class="infos">
          <p><a class="a-link" target="_blank" href="https://www.lesptitscoquelicots.com/">Voir le site en ligne</a></p>
          <div>
            <p>Développement web pour la Maison d'Assistantes Maternelles <i>Les p'tits coquelicots.</i></p>
            <p><i>Ardeur fragile, aimons-nous au plus tôt</i></p>
            <p>Sept. 2018</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <h1 style="font-size: 24vw;">Création Digitale</h1>
    <div class="portfolio">
      <div class="portfolio-item">
        <img src="@/assets/images/blackmarch.jpg" />
        <div>
          <p style="text-align: center;">.</p>
          <p></p>
          <h3>Black March</h3>
          <p></p>
          <p style="text-align: center;">Coming Soon</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/images/dataforgood.jpg" />
        <div>
          <p></p>
          <p>Juin 2019</p>
          <h3>Data for Good</h3>
          <p>Le numérique au service de l'intérêt général</p>
          <p><a class="a-link" target="_blank" href="https://nicolasbertolino.github.io/DataforGood/">Voir le site en ligne</a></p>
        </div>
      </div>
      <div class="portfolio-item">
         <img src="@/assets/images/liebr.jpg" />
         <div>
           <p></p>
           <p>Mars 2019</p>
           <h3>Liebr</h3>
           <p>Trouver le bon mécanicien n'a jamais été aussi simple</p>
           <p><a class="a-link" target="_blank" href="https://nicolasbertolino.github.io/Liebr/">Voir le site en ligne</a></p>
         </div>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/images/terrefete.jpg" />
        <div>
          <p></p>
          <p>Déc. 2018</p>
          <h3>Terrefète</h3>
          <p>Les montagnes comme compagnes</p>
          <p><a class="a-link" target="_blank" href="https://www.terrefete.com/">Voir le site en ligne</a></p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/images/lesptitscoquelicots.jpg" />
        <div>
          <p></p>
          <p>Sept. 2018</p>
          <h3>Les p'tits coquelicots</h3>
          <p>Ardeur fragile, aimons-nous au plus tôt</p>
          <p><a class="a-link" target="_blank" href="https://www.lesptitscoquelicots.com/">Voir le site en ligne</a></p>
        </div>
      </div>
    </div>
    <!--  -->
    <h1 style="font-size: 24vw; text-align: right;">Basé à Toulouse</h1>
    <h2>Des sites engageants qui ne ressemblent pas à celui du voisin. Pour que votre visiteur ait le béguin et se souvienne de vous. À vous la gloire.</h2>
    <div class="whoami">
      <div>
        <img src="@/assets/images/me.png" />
      </div>
      <div>
        <p>Un jour, mon cerveau gauche et mon cerveau droit ont signé un pacte de coopération.</p>
        <p>Depuis je développe et design des sites, d'abord à Toulouse, mais aussi partout en France.</p>
        <p>Dans une précédente vie, j'étudiais la sociologie et l'anthropologie. J'aime tenir compte de ce que nous apprennent les sciences humaines sur nos façons de penser et de faire des choix.</p>
      </div>
    </div>
    <!--  -->
    <h1 style="font-size: 23vw;">Enchanté</h1>
    <p>Agence, freelance, particulier, dites-moi tout et lançons-le, ce projet.</p>
    <h3><a class="b-link" href="mailto:bertolinonicolas@gmail.com">bertolinonicolas@gmail.com</a></h3>
    <ul>
      <li><a class="b-link" target="_blank" href="https://drive.google.com/file/d/1V2bR_uSJ1Disa5ZXfciXV5TmdOTHglEH/view?usp=sharing">Curriculum Vitae</a></li>
      <li><a class="b-link" target="_blank" href="https://github.com/nicolasbertolino">Github</a></li>
      <li><a class="b-link" target="_blank" href="https://www.linkedin.com/in/nicolas-bertolino">Linkedin</a></li>
      <li><a class="b-link" target="_blank" href="https://www.behance.net/nicolasbertolino">Behance</a></li>
    </ul>
    <!--  -->
    <footer>
      <h2>©2019</h2>
    </footer>
    <ScrolltoTop />
  </main>
</template>

<script>
import ScrolltoTop from "@/components/ScrolltoTop.vue";

export default {
  components: {
    ScrolltoTop
  }
};
</script>

<style>
main {
  margin: 0 3vw;
}

/* Header */
header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

header p {
  margin: 0;
}

header .a-link::before {
  background: #282828;
}

header div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

header div:nth-child(2) {
  grid-column: 3/4;
  justify-self: end;
}

@media screen and (max-width: 1000px) {
  header div:nth-child(1) {
    grid-column: 1/3;
    flex-direction: column;
  }
}

@media screen and (max-width: 630px) {
  header {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    text-align: center;
    margin-top: 5vw;
  }

  header div:nth-child(1) {
    grid-column: 1;
    justify-self: center;
  }

  header div:nth-child(2) {
    grid-column: 1;
    justify-self: center;
  }
}

/* Highlighted Project */
.highlight {
  position: relative;
  margin-top: 10vh;
}

.highlight img {
  width: 100%;
}

.show {
  position: absolute;
  top: 20%;
  color: #faf3dd;
  margin: 0 3vw;
}

.show h1 {
  font-size: 18vw;
}

.infos {
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  margin-top: 4rem;
}

.infos div {
  max-width: 400px;
}

@media screen and (max-width: 1400px) {
  .infos {
    flex-direction: column;
    max-width: 100%;
  }
}

@media screen and (max-width: 1100px) {
  .show {
    top: 20vw;
  }
}

@media screen and (max-width: 630px) {
  .infos {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 490px) {
  .show {
    top: 0;
  }

  .show h1 {
    margin: 5vh 0 0;
  }
}

/* Portfolio */
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 2rem;
  margin-top: -10vw;
}

.portfolio-item {
 position: relative;
 cursor: default;
}

.portfolio img {
  max-width: 100%;
}

.portfolio-item::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 4px;
  left: 0;
  background-color: #000;
  opacity: 0;
  transition: opacity .4s;
}

.portfolio-item:hover::after {
  opacity: .3;
}

.portfolio-item div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #faf3dd;
  z-index: 1;
}

.portfolio-item div p:nth-child(4) {
  font-style: italic;
}

@media screen and (max-width: 550px) {
  .portfolio {
    grid-template-columns: 1fr;
  }
}

/* Who Am I */
.whoami {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.whoami img {
  width: 100%;
}

.whoami div:nth-child(2) {
  place-self: center start;
}

.whoami p {
  margin: .5rem 0;
  max-width: 500px;
}

@media screen and (max-width: 680px) {
  .whoami {
    grid-template-columns: 1fr;
  }

  .whoami div:nth-child(2) {
    place-self: center;
  }

  .whoami p {
    max-width: 100%;
  }
}

/* Contact */
ul {
  list-style: none;
  padding: 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 5vh 0;
}

ul li:nth-child(1) {
  margin-bottom: 1rem;
}

/* Footer */
footer {
  margin-top: 10vh;
}

footer h2 {
  text-align:right;
  max-width: 100%;
}
</style>
