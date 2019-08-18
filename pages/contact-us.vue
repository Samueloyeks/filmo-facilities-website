<template>
  <main>
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image contact-us text-light"
      data-parallax-image="/img/covers/contact-us.jpg"
    >
      <div class="container">
        <div class="page-title">
          <h1>Contact Us</h1>
        </div>
      </div>
    </section>
    <!-- end: Page title -->

    <!-- CONTENT -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <join-community />
          </div>
          <div class="col-sm-6">
            <h3 class="text-uppercase">Address & Map</h3>
            <div class="row">
              <div class="col-lg-6">
                <address>
                  <strong>Lagos Office.</strong>
                  <br />10 Sam Adegbite Close, Off Amodu Ojikutu Street,
                  <br />Victoria Island, Lagos.
                </address>
              </div>
              <div class="col-lg-6">
                <address>
                  <strong>Abuja Office</strong>
                  <br />1 Kandi Close, Off Aminu Kano Crescent, Wuse II,
                  <br />Abuja, FCT.
                </address>
              </div>
              <div class="col m-b-20">
                <address>
                  <span>Phone:</span>
                  <a href="tel:+234(0)1 271 0234">+234(0)1 271 0234</a>
                  <span class="m-l-20">Email:</span>
                  <a href="mailto:info@filmorealty.com">info@filmorealty.com</a>
                </address>
              </div>
            </div>

            <!-- Google map sensor -->
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_canvas_lagos_office"
                  src="https://maps.google.com/maps?q=Filmo%20Group%20Sam%20Adegbite&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://www.bitgeeks.net/embed-google-map/"></a>
              </div>
            </div>
            <!-- Google map sensor -->
          </div>
        </div>
      </div>
    </section>
    <!-- end: CONTENT -->
  </main>
</template>

<script>
import joinCommunity from "@/components/join-community";

export default {
  components: { joinCommunity },
  head: () => ({ title: "FilmoRealty · Contact Us" })
};
</script>
