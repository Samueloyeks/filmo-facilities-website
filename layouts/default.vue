<template>
  <div id="app">
    <div class="container-fluid row top-header" id="top-header">
      <div class="col-5 col-md-4">
        <nuxt-link to="/">
          <img
            class="header-logo"
            id="header-logo"
            src="/img/filmorealty-logo.png"
            alt="FilmoRealty Logo"
          >
        </nuxt-link>
      </div>
      <div class="menu-bar" :class="{change: showNav}" @click="toggleNav()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="nav-container col-md-8" v-cloak>
          <nav class="main-nav float-right" id="main-nav" v-show="showNav">
            <ul class="row nav-list float-right" v-if="showNav" @click="toggleNav()">
              <nuxt-link tag="li" exact-active-class="active" class="top-of-list" to="/">
                <a>HOME</a>
              </nuxt-link>
              <nuxt-link tag="li" exact-active-class="active" to="/about-us">
                <a>ABOUT US</a>
              </nuxt-link>
              <nuxt-link tag="li" exact-active-class="active" to="/our-people">
                <a>OUR PEOPLE</a>
              </nuxt-link>
              <nuxt-link tag="li" exact-active-class="active" to="/services">
                <a>OUR SERVICES</a>
              </nuxt-link>
              <li v-show="$router.currentRoute.path == '/'">
                <a href="#our-community" class="smooth-scroll">OUR COMMUNITY</a>
              </li>
              <li v-show="$router.currentRoute.path != '/'">
                <nuxt-link to="/#our-community">OUR COMMUNITY</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
    <nuxt/>
    <footer>
      <div class="footer-items container row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-6">
          <ul>
            <li>
              <nuxt-link to="/services">Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about-us">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/policy-statement">Policy Statement</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/careers">Careers</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-6">
          <ul>
            <li>
              <a :href="$store.state.bookingWebUrl+'/login'">Staff Login</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-8 offset-md-2 offset-lg-0 col-sm-12 col-12">
          <ul>
            <li>
              <a href="tel:+2347065923918" class="row">
                <i class="col-1 fa fa-phone"></i>
                <span class="col-10">+234(0)1 271 0234, +234(0)7013923495</span>
              </a>
            </li>
            <li>
              <a href="mail:info@filmorealty.com" class="row">
                <i class="col-1 fa fa-envelope"></i>
                <span class="col-10">info@filmorealty.com</span>
              </a>
            </li>
            <li class="row">
              <i class="col-1 fa fa-map-marker"></i>
              <span class="col-10">
                <b>Lagos:</b>
                <br>
                <span>10 Sam Adegbite Close, Off Amodu Ojikutu Street, Victoria Island, Lagos.</span>
                <br>

                <b>Abuja:</b>
                <br>
                <span>1 Kandi Close, Off Aminu Kano Crescent, Wuse II, Abuja, FCT.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <br>
      <div class="footer-bottom text-center">
        <span class="text-center">
          &copy; 2019 All rights reserved.
          <b>FilmoRealty Limited. A subsidiary of Filmo Holdings Limited</b>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav() {
      if (screen.width <= 768) {
        this.showNav = !this.showNav;
      }
    }
  },
  created() {
    this.$store.dispatch("getConfig");
  },
  mounted() {
    if (process.client) {
      if (screen.width > 768) {
        this.showNav = true;
      }

      var mainNav = document.getElementById("main-nav");
      var sticky = mainNav.offsetTop;

      window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
          this.addSticky = true;
        } else {
          this.addSticky = false;
        }
      };
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
  },
  head() {
    return {
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
    };
  }
};
</script>