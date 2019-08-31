<template>
  <div>
    <h6>Enchanté</h6>
    <div class="contact">
      <img src="@/assets/images/me.png" />
      <div class="contact-text">
        <p>Un jour, mon cerveau gauche et mon cerveau droit ont signé un pacte de coopération.</p>
        <p>Depuis je développe et design des sites, d'abord à Toulouse, mais aussi partout en France.</p>
        <p>Dans une précédente vie, j'étudiais la sociologie et l'anthropologie. J'aime tenir compte de ce que nous apprennent les sciences humaines sur nos façons de penser et de faire des choix.</p>
        <p>Ravi de vous rencontrer.</p>
        <p style="padding-top: 2rem;">Agence, freelance, particulier, dites-moi tout et lançons-le, ce projet.<a class="link" href="mailto:bertolinonicolas@gmail.com"><br />bertolinonicolas@gmail.com</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h6 {
  font-family: "Freight Text";
  font-size: 22.6vw;
  font-weight: normal;
  margin: 10vh auto 0;
  width: 95%;
}

.contact {
  display: grid;
  grid-template-columns: 0 1fr 1fr 0;
  grid-column-gap: 3vw;
}

.contact img {
  grid-column: 2/3;
  width: 100%;
}

.contact-text {
  grid-column: 3/4;
  place-self: center start;
}

.contact-text p {
  max-width: 550px;
}

.contact-text a {
  color: #d06255;
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
