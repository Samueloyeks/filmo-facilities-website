<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>WHATWE DO</h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container">
        <div class="row">
          <div class="col-md-7 col-lg-7">
            <p
              class="service-description"
            >FILMO Facilities Management is a market leader for total property & facilities management services. We are currently providing our services to major commercial and residential properties across 8 states in Nigeria with over 100 full-time technical team. The team have local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
            <p>We are ISO Certified for Property & Facilities Management and our operations are powered by tech.</p>
          </div>
          <div class="col-md-5 col-lg-5" data-aos="fade-down">
            <ul class="list-services">
              <li>
                <a href="#consultancy" class="smooth-scroll">Consultancy</a>
              </li>
              <li>
                <a
                  href="#property-facilities-management"
                  class="smooth-scroll"
                >VAMP FI</a>
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
              <li>
                <a href="#citispace" class="smooth-scroll">CitiSpace</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="container service-details">
        <div id="consultancy" class="container detail alternate">
          <h1 class="show-small">Consultancy</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/bukunmi.jpg"
                alt="Consultancy image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6">
              <h1 class="show-big">Consultancy</h1>
              <p>We have supported landmark projects with our ﬁrst–class development project management & facilities management consulting services for new and existing built environments. We deliver quality solutions and provide process documentation to aid operational efﬁciencies and have a track record for delivering projects to specification and quality, within a budget and specified time.</p>
            </div>
          </div>
        </div>

        <div id="property-facilities-management" class="container detail alternate">
          <h1 class="show-small">VAMP FI</h1>
          <div class="row">
            <div class="mt-20 col-md-6 order-md-1" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/tech-control-room.jpg"
                alt="Property and facilities management image"
                class="section-image"
              />
            </div>
            <div class="mt-20 col-md-6 order-md-2">
              <h1 class="show-big">VAMP Facilities Intelligence</h1>
              <p>VAMP FI enables us to provide business insights for clients and organizations with large real estate portfolios. We collect site and operations data from several channels, analyze in real-time and compare with market standards. Our powerful analytics highlight asset lifecycle and human capital and material assets productivity. With these insights, our clients can optimize business activities by maximizing performance and cutting operating costs.</p>
            </div>
          </div>
        </div>

        <div id="hagul" class="container detail alternate">
          <h1 class="show-small">Hagul</h1>
          <div class="row">
            <div class="mt-20 col-lg-8 order-md-1">
              <h1 class="show-big">Hagul</h1>
              <p>Hagul is a procurement sourcing solution built on business intelligence. Hagul studies and aggregates data on how vendors, technicians and assets are working across sites plugged into VAMP. This provides us with the data necessary to source and supply resources for our clients with the better assurance of fair and accurate pricing and quality.</p>
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
              <p>Resido is an app that provides homeowners with residential home management services by offering direct access to a team of trusted and accredited facility operators and technicians who provide routine and reactive services. Resido offers quick-response 24/7 service monitored by our control room.</p>
              <p>
                Unlike online marketplaces for technicians and vendors, Resido provides homeowners with service providers who have been vetted and trained and are accessible via an easy to use app which features a 24/7 service
                request portal scheduled routine service delivery, data-driven and cost effective equipment fixes and replacement and user ratings of technicians, vendors and suppliers.
              </p>
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
              <p>Through our proprietary platforms, we integrate with other products including RFID people and vehicle control, home security alarm systems, e-payment solutions, and energy and waste management.</p>
            </div>
          </div>
        </div>

        <div id="hagul" class="container detail alternate">
          <h1 class="show-small">CitiSpace</h1>
          <div class="row">
            <div class="mt-20 col-lg-8 order-md-1">
              <h1 class="show-big">CitiSpace</h1>
              <p>As the technology ecosystem continues to grow in Nigeria – the need for specialized spaces dedicated to specific tech innovation will be necessary. This is why we launched CitiSpace – a dedicated community of innovators, startups and investors in the African PropTech and real estate industries. CitiSpace features flexible and collaborative workspace, shared services, training and hackathon events, and access to our network of industry experts, entrepreneurs and investors.</p>
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
