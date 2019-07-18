<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>OUR PRODUCTS</h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container">
        <div class="row">
          <div class="col-md-7 col-lg-7">
            <p
              class="service-description"
            >We are a one-stop-shop for your property service’s needs; whether it is searching for a property, investing in real-estate or seeking strong professional property and facilities management services.</p>
          </div>
          <div class="col-md-5 col-lg-5" data-aos="fade-down">
            <ul class="list-services">
              <li>
                <a
                  href="#property-facilities-management"
                  class="smooth-scroll"
                >Facilities Intelligence</a>
              </li>
              <li>
                <a href="#resido-manager" class="smooth-scroll">Resido</a>
              </li>
              <li>
                <a href="#hagul" class="smooth-scroll">Hagul</a>
              </li>
              <li>
                <a href="#city-operator" class="smooth-scroll">City Operator</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="container service-details">
        <div id="property-facilities-management" class="container detail alternate">
          <h1 class="show-small">Facilities Intelligence</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/tech-control-room.jpg"
                alt="Property and facilities management image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">Facilities Intelligence</h1>
              <p>Our tech is also our enabler to be able to provide insights for business optimization for clients or organizations with large real estate portfolios; we collect site and operations data from several channels, analyze in real-time and compare with market standards. Our analysis will provide insight to optimize facilities management partners, sites, vendors, suppliers, assets, workforce, energy, quality of service and ultimately insights for predictive analytics to advise our clients on strategies to increase revenue and reduce cost</p>
            </div>
          </div>
        </div>

        <div id="hagul" class="container detail alternate">
          <h1 class="show-small">Hagul</h1>
          <div class="row">
            <div class="mt-20 col-lg-8 order-md-1">
              <h1 class="show-big">Hagul</h1>
              <p>Hagul is our procurement sourcing solution built on business intelligence. Hagul studies and aggregates data on how vendors, suppliers, technicians and assets are working across sites plugged into VAMP. This provides us with the data necessary to source and supply resources for our clients with the better assurance of fair and accurate pricing and quality.</p>
            </div>
          </div>
        </div>

        <div id="resido-manager" class="container detail alternate">
          <h1 class="show-small">Resido</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/resido.jpg"
                alt="Resido - image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">Resido</h1>
              <p>Resido is our app that provides homeowners with residential home management services by offering direct access to a team of trusted and accredited facility operators and technicians who provide routine and reactive services. Resido offers quick-response 24/7 service monitored by our control room. Cost and quality is optimized with big data analytics in real time.</p>
            </div>
          </div>
        </div>

        <div id="city-operator" class="container detail alternate">
          <h1 class="show-small">City Operator</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/covers/img-5.jpg"
                class="section-image"
                alt="project management"
              />
            </div>
            <div class="mt-20 col-md-6 order-md-1">
              <h1 class="show-big">City Operator</h1>
              <p>We provide tech solutions for the management of large estates and smart cities.</p>
              <p>Through our proprietary platforms, we are able to integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
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
      title: "FilmoRealty · Services",
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
