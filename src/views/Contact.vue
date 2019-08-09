<template>
  <div class="contact">
    <img src="" />
    <div class="contact-text">
      <p>Un jour, mon cerveau gauche et mon cerveau droit ont signé un pacte de coopération.</p>
      <p>Depuis je développe et design des sites, d'abord à Toulouse, mais aussi partout en France.</p>
      <p>Dans une précédente vie, j'étudiais la sociologie et l'anthropologie. J'aime tenir compte de ce que nous apprennent les sciences humaines sur nos façons de penser et de faire des choix.</p>
      <p>Enchanté.</p>
      <p>Oh, et je m'appelle Nicolas.</p>
      <p style="padding-top: 2rem;">Agence, freelance, particulier, dites-moi tout et lançons-le, ce projet.<a href="mailto:bertolinonicolas@gmail.com"><br />bertolinonicolas@gmail.com</a></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  display: grid;
  grid-template-columns: 0 1fr 1fr 0;
  grid-column-gap: 3vw;
  margin-top: 10vh;
}

.contact img {
  grid-column: 2/3;
  width: 100%;
  height: 700px;
}

.contact-text {
  grid-column: 3/4;
  place-self: end center;
}

.contact-text p {
  max-width: 550px;
}

.contact-text a {
  color: #fca901;
}

@media screen and (max-width: 1205px) {
  .contact {
    grid-template-columns: 0 1fr 0;
    grid-row-gap: 7vh;
  }

  .contact-text {
    grid-column: 2/3;
  }
}
</style>
