<script setup>
import Navbar from './components/NavbarNav.vue';
import AppCard from './components/AppCard.vue';
</script>

<template>
  <Navbar />

  <section id="hero" class="hero d-flex align-items-center p-5 mb-5">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative">
      <img src="../public/Images/undraw_feeling_proud_qne1.svg" id="heroImg" class="m-3">
      <h2>Witaj na <span class="text-purple">mzmix.github.io</span></h2>
      <p class="p-1">Zobacz zbiór aplikacji stworonych do pomocy w przeprowadzaniu zajęć <span
          class="text-purple"><strong>STEAM</strong></span></p>
      <div class="d-flex">
        <button class="btn btn-purple btn-lg">Zobacz więcej</button>
      </div>
    </div>
  </section>

  <main>

    <section>

      <div class="container-fluid mt-5">

        <div class="row">

          <!-- <div class="col"></div> -->

          <div class="col-lg-3 col-md-5 col-sm-12 p-2 m-2">
            <AppCard imgSrc="../public/Images/undraw_code_thinking_re_gka2.svg" imgAlt="foto"
              cardTitle="W układzie z klockami" linkHref="https://mzmix.github.io/W-ukladzie-z-klockami/"
              linkText="W układzie z klockami">
              Aplikacja do pracy z klockami
            </AppCard>
          </div>

          <div class="col-lg-3 col-md-5 col-sm-12 p-2 m-2">
            <AppCard imgSrc="../public/Images/undraw_code_thinking_re_gka2.svg" imgAlt="foto"
              cardTitle="Klockowe wieżowce" linkHref="https://mzmix.github.io/W-ukladzie-z-klockami/"
              linkText="Klockowe wieżowce">
              Aplikacja do pracy z klockami
            </AppCard>
          </div>

          <div class="col-lg-3 col-md-5 col-sm-12 p-2 m-2">
            <AppCard imgSrc="../public/Images/undraw_code_thinking_re_gka2.svg" imgAlt="foto"
              cardTitle="Klockowe pociągi" linkHref="https://mzmix.github.io/W-ukladzie-z-klockami/"
              linkText="Klockowe pociągi">
              Aplikacja do pracy z klockami
            </AppCard>
          </div>

          <!-- <div class="col"></div> -->

        </div>

      </div>

    </section>

  </main>

</template>

<style scoped>
.impact {
  color: var(--bs-primary)
}

#hero {
  background: url(../public/Images/heroShadow.png) center center;
  background-size: cover;
}

#heroImg {
  animation: up-down 4s ease-in-out 0s infinite alternate-reverse both;
}

@keyframes up-down {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

@media (min-width: 992px) {
  #heroImg {
    max-width: 35%;
  }

  #hero {
    margin-bottom: 12em;
  }
}

@media (max-width: 991px) {
  #heroImg {
    max-width: 60%;
  }

  #hero {
    margin-bottom: 8em;
  }
}

@media (max-width: 850px) {
  #heroImg {
    max-width: 80%;
  }

  #hero {
    margin-bottom: 4em;
  }
}

@media (max-width: 575px) {
  #heroImg {
    max-width: 100%;
  }
}

.hero {
  min-height: 50vh;
}
</style>
