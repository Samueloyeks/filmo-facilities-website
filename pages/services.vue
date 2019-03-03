<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>OUR SERVICES</h1>
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
                >Smart Property and Facilities Management</a>
              </li>
              <li>
                <a href="#resido-manager" class="smooth-scroll">Resido Manager</a>
              </li>
              <li>
                <a href="#letting-and-sales" class="smooth-scroll">Letting and Sales</a>
              </li>
              <li>
                <a href="#consultancy" class="smooth-scroll">Consultancy</a>
              </li>
              <li>
                <a
                  href="#real-estate-advisory-and-investments"
                  class="smooth-scroll"
                >Real-Estate Advisory and Investments</a>
              </li>
              <li>
                <a href="#project-management" class="smooth-scroll">Project Management</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="container service-details">
        <div class="property-facilities-management" id="property-facilities-management">
          <h1 class="show-small">Smart Property and Facilities Management</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/covers/img-6.jpg"
                alt="Property and facilities management image"
                class="section-image"
              >
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">Property and Facilities Management</h1>
              <p>
                Each property is unique; we develop a strategic and operational plan that combines people, process and technology for optimal efficiency and value. The agreed service level agreements are then closely monitored with regular reporting and communication with client.
                In Residential properties, our service goes beyond communal areas management; as a value-add to our tenants, we provide home management services that is also accessible via our client interface app – Resido Manager
              </p>
            </div>
          </div>
        </div>

        <div id="resido-manager" class="container detail alternate heading-left">
          <h1 class="show-small">Resido Manager</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-lg-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/resido.jpg"
                alt="Resido - image"
                class="section-image"
              >
            </div>
            <div class="mt-20 col-lg-6 order-lg-1">
              <h1 class="show-big">Resido Manager</h1>
              <p>
                We are at the fore front of the technologically driven property economy, by providing a convenient, cost-effective total home management and maintenance solution to our tenants.
                The Resido Manager service can be accessed through an App.
              </p>
            </div>
          </div>
        </div>

        <div class="letting-and-sales" id="letting-and-sales">
          <h1 class="show-small">Letting &amp; Sales</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/vr.jpg"
                style="height: 450px;"
                class="section-image"
                alt="vr viewing"
              >
            </div>
            <div class="mt-20 col-md-7 col-lg-6 order-md-2">
              <h1 class="show-big">Letting &amp; Sales</h1>
              <p>
                The 20+ years of experience in the market has earned us a vast network of HNIs, local and international organisations. We implement aggressive marketing strategies which could involve conventional and unconventional approaches for optimal response.
                We also utilise virtual reality for client inspections, and partner with property developers to showcase their existing and future projects.
              </p>
            </div>
          </div>
        </div>

        <div class="real-estate-advisory heading-left" id="real-estate-advisory-and-investments">
          <h1 class="show-small">Real-Estate Advisory &amp; Investments</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/lakowe.jpg"
                class="section-image"
                alt="real estate advisory and investments - lakowe"
              >
            </div>
            <div class="mt-20 col-md-5 col-lg-6 order-md-1">
              <h1 class="show-big">Real-Estate Advisory &amp; Investments</h1>
              <p>We provide advice and opportunities for small or large investment in real-estate.</p>
            </div>
          </div>
        </div>

        <div class="consultancy" id="consultancy">
          <h1 class="show-small">Consultancy</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/bukunmi.jpg"
                style="height: 500px;"
                class="section-image"
                alt="Consultancy - Bukunmi"
              >
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">Consultancy</h1>
              <p>Our ﬁrst–class facilities management, property management and health & safety professionals provide consulting services for new and existing built environments. We deliver quality solutions and provide process documentation to aid operational efﬁciencies.</p>
            </div>
          </div>
        </div>

        <div class="project-management" id="project-management">
          <h1 class="show-small">Project Management</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/covers/img-5.jpg"
                class="section-image"
                alt="project management"
              >
            </div>
            <div class="mt-20 col-md-6 order-md-1">
              <h1 class="show-big">Project Management</h1>
              <p>We provide project management, development management and development advisory services. We work with the client from pre-contract to post contract stages to ensure that projects are delivered to specification and quality, within budget, at the specified time.</p>
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
