<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>ABOUT US</h1>
        </div>
      </div>
    </header>
    <main class="about-us">
      <section class="container">
        <div class="container row">
          <div class="col-md-7 col-lg-7 about-gist">
            <p>We are a leading proptech and real estate services company in Nigeria. Our bold ideas and determination to continuously add value for our clients, combined with our substantial investment in people and technology is what sets us apart.</p>
            <p>We currently provide services to over 50 clients across 10 states of Nigeria.</p>
          </div>
          <div class="col-md-5 col-lg-5">
            <p>The lack of boundaries to our ideas, and the investment in the right people and latest technology is what sets us apart.</p>

            <ul class="about-links" data-aos="fade-up">
              <li>
                <a href="#our-operations" class="smooth-scroll">Our Operations</a>
              </li>
              <li>
                <a href="#our-technology" class="smooth-scroll">Our Technology</a>
              </li>
              <li>
                <a href="#our-clients" class="smooth-scroll">Our Clients</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="about-details">
        <div id="our-operations" class="container detail alternate heading-left">
          <h1 class="show-small">Our Operations</h1>
          <div class="row">
            <div class="mt-20 col-lg-7 order-lg-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/operations-technician.jpg"
                class="section-image"
                alt="vr viewing"
              >
            </div>
            <div class="mt-20 col-lg-5 order-lg-1">
              <h1 class="show-big">Our Operations</h1>
              <p>
                All core services are provided in-house so that we can control the quality and speed of delivery.
                We have set up strong processes for consistent communication with our clients, and our operations are monitored from our operations control room.
              </p>
            </div>
          </div>
        </div>

        <div id="our-technology" class="container detail alternate heading-left">
          <h1 class="show-small">Our Technology</h1>
          <div class="row">
            <div class="mt-20 col-lg-7" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/tech-control-room.jpg"
                class="section-image"
                alt="vr viewing"
              >
            </div>
            <div class="mt-20 col-lg-5">
              <h1 class="show-big">Our Technology</h1>
              <p class>
                All core services are provided in-house so that we can control the quality and speed of delivery.
                We have set up strong processes for consistent communication with our clients, and our operations are monitored from our operations control room.
              </p>
            </div>
          </div>
        </div>

        <div class="section reviews" id="our-clients">
          <h1 class="text-center hide-very-small">OUR PARTNERS & CLIENTS</h1>
          <section class="customer-logos slider">
            <div class="slide">
              <img
                src="~/assets/img/filmo-clients/brains-and-hammers-logo.png"
                class="section-image"
              >
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/fibre-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/mixtafrica-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/Access-Bank-Logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/dangote-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/schlumberger-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/lagos-state-govt.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/firs-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/kaduna-state-logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/NNPC-Logo.png">
            </div>
            <div class="slide">
              <img src="~/assets/img/filmo-clients/9mobile-logo.png">
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "FilmoRealty · About Us"
    };
  },
  mounted() {
    if (process.client) {
      AOS.init({
        easing: "ease-in-out-sine",
        duration: 800
      });

      $(document).ready(function() {
        $(".customer-logos").slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });

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

<style src="~/assets/css/about-us.css" scoped></style>

