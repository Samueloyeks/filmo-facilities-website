<template>
  <main class="prop-lab">
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image text-light"
      data-parallax-image="/img/covers/proplab-africa.jpg"
    >
      <div class="container">
        <div class="page-title">
          <h1>PropLab.Africa</h1>
        </div>
      </div>
    </section>
    <!-- end: Page title -->

    <section>
      <div class="container">
        <div class="heading-text heading-section text-center col-md-8 offset-md-2">
          <p
            class="lead"
          >We are committed to leveraging tech to innovatively solve challenges in real estate and city management. PropLab.Africa is a subsidiary of FilmoRealty established to develop and invest in start-up companies driving proptech forward in Nigeria.</p>
          <h2 class="m-t-50">Portfolio</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="icon-box effect medium border center">
              <div
                class="product-logo"
                style="background-image: url('/img/brochure/vampfi-logo.jpg')"
              >
                <img src="/img/brochure/vampfi-logo.jpg" alt="VAMP Logo" class="d-none" />
              </div>
              <p>VAMP FI</p>
              <span>VAMP Facilities Intelligence is our smart solution for data-driven facilities management optimization. The tool manages and analyses big data from sites and the market in realtime to drive facility operating costs, asset health and user experience to their optimal levels.</span>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="icon-box effect medium border center">
              <div
                class="product-logo"
                style="background-image: url('/img/brochure/resido-logo.png')"
              >
                <img src="/img/brochure/resido-logo.png" alt="Resido Logo" class="d-none" />
              </div>
              <p>Resido</p>
              <span>Resido is an app that provides clients with home management services by offering direct access to a Resido Home Manager and a 24/7 team of certified technicians.</span>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="icon-box effect medium border center">
              <div
                class="product-logo citispace"
                style="background-image: url('/img/brochure/citispace-logo.svg');"
              >
                <img src="/img/brochure/citispace-logo.svg" alt="CitiSpace Logo" class="d-none" />
              </div>
              <p>CitiSpace</p>
              <span>A dedicated community of proptech innovators, startups and investors in the tech and real estate industries. CitiSpace features flexible and collaborative workspaces, shared services, training and hackathon events, and access to our network of industry experts, entrepreneurs and investors.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: () => ({ title: "FilmoRealty · PropLab.Africa" })
};
</script>

