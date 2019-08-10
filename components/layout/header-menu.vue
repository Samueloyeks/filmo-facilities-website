<template>
  <div class="header-inner">
    <div class="container">
      <!--Logo-->
      <div id="logo">
        <nuxt-link to="/" class="logo" data-src-dark="/img/filmorealty-logo-light.png">
          <img
            style="margin-top: 15px; height: 45px;"
            src="/img/filmorealty-logo.png"
            alt="FilmoRealty Logo"
          />
        </nuxt-link>
      </div>
      <!--End: Logo-->

      <!--Navigation Resposnive Trigger-->
      <div id="mainMenu-trigger">
        <button class="lines-button x">
          <span class="lines"></span>
        </button>
      </div>
      <!--end: Navigation Resposnive Trigger-->

      <!--Navigation-->
      <div id="mainMenu" class="light">
        <div class="container">
          <nav>
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li class="dropdown" :class="{active: (currentActiveRoutes.includes('what-we-do'))}">
                <a href="#">What We Do</a>
                <ul class="dropdown-menu">
                  <li>
                    <nuxt-link to="/what-we-do/management-advisory">Management & Advisory</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/what-we-do">Proplab.Africa</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/who-we-are">Who We Are</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/news">News</nuxt-link>
              </li>
              <li>
                <a href="index.html">Careers</a>
              </li>
              <li>
                <nuxt-link to="/contact-us">Contact Us</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!--end: Navigation-->
    </div>
  </div>
</template>

<script>
import layoutMixin from "@/mixins/layout";

export default {
  mixins: [layoutMixin]
};
</script>

