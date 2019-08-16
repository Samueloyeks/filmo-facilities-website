<template>
  <main>
    <!-- Slider with Particles -->
    <section class="fullscreen background-colored">
      <div class="container">
        <div class="container-fullscreen">
          <div class="text-middle text-center text-light">
            <!-- Captions -->
            <h1 data-animate="fadeIn">The evolution of real estate services</h1>
          </div>
        </div>
      </div>
      <!-- Particles Scripts -->
      <div id="particles-js" class="particles"></div>
    </section>
    <!-- end:  Slider with Particles -->

    <!-- Our numbers -->
    <section class="p-t-120 p-b-40">
      <div class="container xs-text-center sm-text-center">
        <div class="row">
          <div class="col-lg-8 p-b-40">
            <h2>Real estate services re-imagined</h2>
            <p
              class="lead"
            >We are a leading PropTech and real estate services company with a focus on real estate management, advisory and consultancy services. With over 25 years of industry experience, we now stand at the forefront of PropTech in Nigeria.</p>
            <p
              class="lead"
            >Our track record of delivering real estate services to individuals and companies spanning 12 states in Nigeria uniquely positions us to develop targeted and innovative technology solutions to drive the real estate industry into the future. At Filmo, we are dedicated to using technology and data to deliver more value to our clients.</p>
            <p
              class="lead"
            >In 2019, we established PropLab.Africa, a subsidiary of FilmoRealty which develops and invests in PropTech solutions.</p>
          </div>
          <div class="col-lg-4 m-t-100">
            <img src="/img/brochure/office.jpg" alt="Filmo Head Office" class="col-image">
          </div>
        </div>
      </div>
    </section>
    <!-- end: Our numbers -->

    <!-- Our numbers -->
    <section class="p-t-60 p-b-40 background-grey">
      <div class="container xs-text-center sm-text-center">
        <div class="row">
          <div class="col-12 p-b-40">
            <h2>How We Work</h2>
            <p
              class="lead"
            >We are partners not contractors. We invest in and utilize big data analysis and predictive analytics to optimize running costs and sustain quality in the management of our clients’ real estate portfolio no matter the size.</p>
            <p
              class="lead"
            >VAMP, our flagship proprietary software, is the engine that drives all of our technology platforms and supports on-site teams in their daily operations. Our control room monitors and assesses operations, and collects operational data across different matrixes for ongoing analyses of patterns, anomalies and market comparison of quality and costs.</p>
            <p
              class="lead"
            >We are able to provide our clients with a 360-view of activities and the performance of their facilities in real-time compared to historical trends in the market which then equips them to make informed management and strategic decisions to drive their businesses forward.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end: Our numbers -->

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
          data-autoplay-timeout="2000"
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
  head: () => ({
    title: "FilmoRealty · The Evolution Of Real Estate Services"
  }),
  mounted() {
    setTimeout(function() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "edge",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 231.44271031594977,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }, 0);
  }
};
</script>
