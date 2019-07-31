<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>FACILITIES MANAGEMENT</h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <p
              class="service-description"
            >Filmo Facilities Management is a market leader for total property and facilities management services. We currently provide our services to major commercial and residential properties across 8 states in Nigeria with over 100 full-time technical staff. Our team has local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
            <p>We are ISO Certified for Property and Facilities Management and our operations are powered by tech.</p>
          </div>
        </div>
      </section>
      <section class="container service-details">
        <div id="consultancy" class="container detail alternate">
          <h1 class="show-small">Consultancy Services</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/bukunmi.jpg"
                alt="Consultancy image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6">
              <h1 class="show-big">Consultancy Services</h1>
              <p>We have supported landmark projects with our ﬁrst–class project management and facilities management consulting services for new and existing built environments. We deliver quality solutions and provide process documentation to facilitate operational efﬁciencies and have a strong track record of delivering projects to specification and quality within budget and on time.</p>
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
