<template>
  <main>
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image text-light"
      data-parallax-image="/img/covers/contact-us-two.jpg"
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
            <h3 class="text-uppercase">Get In Touch</h3>
            <div class="m-t-30">
              <form
                class="widget-contact-form"
                action="include/contact-form.php"
                role="form"
                method="post"
              >
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      aria-required="true"
                      name="widget-contact-form-name"
                      class="form-control required name"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      aria-required="true"
                      name="widget-contact-form-email"
                      class="form-control required email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-12">
                    <label for="subject">Your Subject</label>
                    <input
                      type="text"
                      name="widget-contact-form-subject"
                      class="form-control required"
                      placeholder="Subject..."
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    type="text"
                    name="widget-contact-form-message"
                    rows="5"
                    class="form-control required"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>

                <div class="form-group" v-if="false">
                  <script src="https://www.google.com/recaptcha/api.js"></script>
                  <div class="g-recaptcha" data-sitekey="6LddCxAUAAAAAKOg0-U6IprqOZ7vTfiMNSyQT2-M"></div>
                </div>

                <button class="btn" type="submit" id="form-submit">
                  <i class="fa fa-paper-plane"></i>&nbsp;Send message
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-6">
            <h3 class="text-uppercase">Address & Map</h3>
            <div class="row">
              <div class="col-lg-6">
                <address>
                  <strong>Lagos Office.</strong>
                  <br />10 Sam Adegbite Close, Off Amodu Ojikutu Street,
                  <br />Victoria Island, Lagos.
                  <br />
                  <abbr title="Phone">P:</abbr> +234(0)1 271 0234
                </address>
              </div>
              <div class="col-lg-6">
                <address>
                  <strong>Abuja Office</strong>
                  <br />1 Kandi Close, Off Aminu Kano Crescent, Wuse II,
                  <br />Abuja, FCT.
                  <br />
                  <abbr title="Phone">P:</abbr> +234(0)1 271 0234
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