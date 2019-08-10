<template>
  <main>
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image text-light"
      data-parallax-image="http://127.0.0.1:3000/img/covers/advisory-2.jpg"
    >
      <div class="container">
        <div class="page-title">
          <h1>Management and advisory</h1>
        </div>
      </div>
    </section>
    <!-- end: Page title -->

    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="heading-text heading-section">
              <h2>OUR APPROACH</h2>
            </div>
          </div>
          <div class="col-lg-9">
            <p
              class="lead"
            >We utilize a collaborative and team-based approach to guide and support our clients in developing strategic and operational plans that combine smart people, innovative thinking and technology solutions. We are ISO Certified for Property and Facilities Management and our operations are powered by tech. Through our proprietary platforms, we integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
            <p
              class="lead"
            >Together with our clients, we build strong ideas, thoughtful strategies and powerful executions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="box-fancy section-fullwidth text-light p-b-0">
      <div class="row">
        <div style="background-color:rgb(149, 149, 154);" class="col-lg-4">
          <h3>Properties & Facilities Management</h3>
          <p>We are a market leader for total property & facilities management services. We currently provide our services to major commercial and residential properties across 8 states of Nigeria with over 100 full-time technical engineers. Our team has local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
        </div>

        <div style="background-color:#a1a1a3" class="col-lg-4">
          <h3>Development & Project Management</h3>
          <p>We have delivered landmark projects with our ﬁrst–class development & project management consulting services for new and existing built environments. We work with our clients from pre-contract to post contract stages to ensure that projects are completed to specification and quality, within budget and on time.</p>
        </div>

        <div style="background-color:rgb(168, 168, 171);" class="col-lg-4">
          <h3>Consultancy Services</h3>
          <p>We have consulted for the public and private sectors, federal and state governments, and major agencies and organisations for impactful solutions to major challenges. We utilize our vast industry knowledge and experience with cutting edge technologies to deliver innovative solutions to our clients. We provide process documentation to facilitate operational efﬁciencies and drive short and long-term strategic planning.</p>
        </div>
      </div>
    </section>

    <!-- Client logo -->
    <section>
      <div class="container">
        <h2>Our Clients</h2>
        <div
          class="carousel"
          data-items="6"
          data-items-sm="4"
          data-items-xs="3"
          data-items-xxs="2"
          data-margin="20"
          data-arrows="false"
          data-autoplay="true"
          data-autoplay-timeout="3000"
          data-loop="true"
        >
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/fibre-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/mixtafrica-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/Access-Bank-Logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/dangote-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/schlumberger-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/lagos-state-govt.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/firs-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/kaduna-state-logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/NNPC-Logo.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img alt src="/img/filmo-clients/9mobile-logo.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- end: Client logo -->
  </main>
</template>

<script>
export default {
  head: () => ({ title: "FilmoRealty · Management & Advisory" })
};
</script>
