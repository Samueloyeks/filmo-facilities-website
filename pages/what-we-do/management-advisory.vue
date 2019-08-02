<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>Management & Advisory</h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container">
        <div class="row">
          <div class="col-md-10">
            <p
              class="service-description"
            >We utilize a collaborative and team-based approach to guide and support our clients in developing strategic and operational plans that combine smart people, innovative thinking and technology solutions. Together with our clients, we build strong ideas, thoughtful strategies and powerful executions.</p>
          </div>
        </div>
      </section>
      <section class="container service-details">
        <div id="property-and-facility-management" class="container detail alternate">
          <h1 class="show-small">Properties & Facilities Management</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/operations-technician.jpg"
                alt="Consultancy image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6">
              <h1 class="show-big">Properties & Facilities Management</h1>
              <p>We are a market leader for total property & facilities management services. We currently provide our services to major commercial and residential properties across 8 states of Nigeria with over 100 full-time technical engineers. Our team has local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
              <p>We are ISO Certified for Property and Facilities Management and our operations are powered by tech. Through our proprietary platforms, we integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
            </div>
          </div>
        </div>

        <div id="development-and-project-management" class="container detail alternate">
          <h1 class="show-small">Development & Project Management</h1>
          <div class="row">
            <div class="mt-20 col-md-6" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/city-operator.jpg"
                alt="Consultancy image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6">
              <h1 class="show-big">Development & Project Management</h1>
              <p>We are a market leader for total property & facilities management services. We currently provide our services to major commercial and residential properties across 8 states of Nigeria with over 100 full-time technical engineers. Our team has local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
              <p>We are ISO Certified for Property and Facilities Management and our operations are powered by tech. Through our proprietary platforms, we integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
            </div>
          </div>
        </div>

        <div id="consultancy" class="container detail alternate">
          <h1 class="show-small">Consultancy Services</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/bukunmi-flat.jpg"
                alt="Consultancy image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6">
              <h1 class="show-big">Consultancy Services</h1>
              <p>We have consulted for the public and private sectors, federal and state governments, and major agencies and organisations for impactful solutions to major challenges. We utilize our vast industry knowledge and experience with cutting edge technologies to deliver innovative solutions to our clients. We provide process documentation to facilitate operational efﬁciencies and drive short and long-term strategic planning.</p>
            </div>
          </div>
        </div>

        <div id="city-operator" class="container detail alternate">
          <h1 class="show-small">City Operator</h1>
          <div class="row">
            <div class="mt-20 col-md-6" data-aos="zoom-in">
              <img
                src="~/assets/img/covers/img-5.jpg"
                class="section-image"
                alt="project management"
              />
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">City Operator</h1>
              <p>We provide tech solutions for the management of large estates and smart cities.</p>
              <p>Through our proprietary platforms, we integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "FilmoRealty · What We Do",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/aos@2.3.1/dist/aos.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        }
      ],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        },
        {
          src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
        }
      ]
    };
  },
  mounted() {
    if (process.client) {
      AOS.init({
        easing: "ease-in-out-sine",
        duration: 800
      });

      $(document).ready(function() {
        $(".smooth-scroll").click(function() {
          $("html, body").animate(
            {
              scrollTop: $($.attr(this, "href")).offset().top - 100
            },
            500
          );
          return false;
        });
      });
    }
  }
};
</script>

<style src="~/assets/css/services.css" scoped></style>
