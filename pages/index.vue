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
          <div class="col-lg-7 p-b-40">
            <h2>Real estate services re-imagined</h2>
            <p
              class="lead"
            >We are a leading real estate services and proptech company in Nigeria with a focus in property & facilities management, development & project management and advisory & consultancy services. With over 25 years of industry experience, we now stand at the forefront of proptech in Africa.</p>
            <p
              class="lead"
            >Our track record of delivering real estate services to individuals and companies spanning 12 states in Nigeria uniquely positions us to develop targeted and innovative technology solutions to drive the real estate industry into the future.</p>
            <p
              class="lead"
            >At FilmoRealty, we are invested in technology and big data analysis. In 2019 we established PropLab.Africa, a subsidiary of FilmoRealty which develops and invests in PropTech solutions.</p>
          </div>
          <div class="col-lg-5 m-t-100">
            <img src="/img/brochure/office.jpg" alt="Filmo Head Office" class="col-image" />
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
            >We are a team of over 100 real estate experts, engineers & tech entrepreneurs that work in synergy to provide optimal value to our clients. We have a vigorous selection process that considers technical and problem-solving capacity, and we continuously invest in capacity building across technical and life development skills.</p>
            <p
              class="lead"
            >VAMP, our flagship proprietary software, is the engine that drives all of our technology platforms and supports on-site teams in their daily operations. Our people are equipped with the latest tools for operations and communication, and HQ control room monitors and assesses operational big data in real time across different matrixes for optimal service delivery.</p>
            <p
              class="lead"
            >We are an advocate for working smart in a paperless environment, and with use of tech we have designed all our admin and daily processes to achieve this goal.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end: Our numbers -->

    <!-- Client logo -->
    <section>
      <div class="container">
        <h2>Major Clients</h2>
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
