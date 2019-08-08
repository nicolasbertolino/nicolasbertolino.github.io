<template>
  <div class="home">
    <div class="intro">
      <h1>Bons sites web de France</h1>
      <p>Des sites engageants qui ne ressemblent pas à celui du voisin. Pour que votre visiteur ait le béguin et se souvienne de vous. À vous la gloire.</p>
    </div>
    <h2>Réalisations</h2>
    <div class="projects">
      <router-link to="/projet/blackmarch" class="project">
        <p>Black March</p>
        <p>Lorem ipsum.</p>
        <p>Août 2019</p>
      </router-link>
      <router-link to="/projet/dataforgood" class="project">
        <p>Data for Good</p>
        <p>Le numérique au service de l'intérêt général.</p>
        <p>Juin 2019</p>
      </router-link>
      <router-link to="/projet/liebr" class="project">
        <p>Liebr</p>
        <p>Trouver le bon mécanicien n'a jamais été aussi simple.</p>
        <p>Mars 2019</p>
      </router-link>
      <router-link to="/projet/terrefete" class="project">
        <p>Terrefète</p>
        <p>Les montagnes comme compagnes.</p>
        <p>Déc. 2018</p>
      </router-link>
      <router-link to="/projet/lesptitscoquelicots" class="project">
        <p>Les p'tits coquelicots</p>
        <p>Ardeur fragile, aimons-nous au plus tôt.</p>
        <p>Sept. 2018</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Introduction */

.intro {
  display: grid;
  grid-template-columns: 3vw 1fr 1fr 3vw;
  margin: 100px 0;
}

.intro h1 {
  grid-column: 2/3;
  place-self: start start;
}

.intro p {
  place-self: end center;
  max-width: 390px;
}

@media screen and (max-width: 1161px) {
  .intro {
    grid-template-columns: 3vw 1fr 3vw;
  }

  .intro h1 {
    text-align: center;
    margin-bottom: 7rem;
  }

  .intro p {
    grid-column: 2/3;
    grid-row: 2;
  }
}

/* Projets */

.projects {
  padding: 0 3vw;
}

.project {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 2px solid #282828;
}

.project:hover {
  color: #fca901;
}

.project p:nth-child(2) {
  font-style: italic;
}

.project p:nth-child(3) {
  text-align: right;
}

@media screen and (max-width: 750px) {
  .project {
    grid-template-columns: 1fr;
  }

  .project p:nth-child(1),
  .project p:nth-child(2),
  .project p:nth-child(3) {
    text-align: center;
  }
}
</style>
