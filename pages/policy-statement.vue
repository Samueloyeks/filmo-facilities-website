<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>Policy Statement</h1>
        </div>
      </div>
    </header>
    <main class="policy-statement">
      <section class="container">
        <div class="container row">
          <div class="col-md-7 col-lg-7 policy-gist">
            <p>
              We ensure our clients are up to date with our
              corporate quality objectives, customer focus policy and
              quality policy statement.
            </p>
          </div>
          <div class="col-md-5 col-lg-4 offset-1">
            <ul class="policy-links" data-aos="fade-up">
              <li>
                <a
                  href="#corporate-quality-objectives"
                  class="smooth-scroll"
                >Corporate Quality Objectives</a>
              </li>
              <li>
                <a href="#customer-focus-policy" class="smooth-scroll">Customer Focus Policy</a>
              </li>
              <li>
                <a href="#quality-policy-statement" class="smooth-scroll">Quality Policy Statement</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="policy-details">
        <div id="corporate-quality-objectives" class="container detail alternate heading-left">
          <h1 class="show-small">Corporate Quality Objectives</h1>
          <div class="row">
            <div class="mt-20 col-lg-4 order-lg-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/tech-control-room.jpg"
                class="section-image"
                alt="vr viewing"
              >
            </div>
            <div class="mt-20 col-lg-8 order-lg-1">
              <h1 class="show-big">Corporate Quality Objectives</h1>
              <p class="ml-2">At Filmo Holdings Limited, We commit to:</p>
              <ul>
                <li>Improve communications with our customers and handling of customers compliants.</li>
                <li>Improve on customer satisfaction monitoring.</li>
                <li>Improve the performance of external service providers.</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="customer-focus-policy" class="container detail alternate heading-left">
          <h1 class="show-small">Customer Focus Policy</h1>
          <div class="row">
            <div class="mt-20 col-lg-4" data-aos="zoom-in">
              <img src="~/assets/img/brochure/resido.jpg" class="section-image" alt="vr viewing">
            </div>
            <div class="mt-20 col-lg-8">
              <h1 class="show-big">Customer Focus Policy</h1>
              <p class>
                At Filmo Holdings Limited, Our Customers are the basis of our corporate existence
                and continuity in business.
              </p>
              <p>
                We do all we can to attract and retain the confidence/patronage of our
                customers by understanding and meeting their requirements; strive to
                exceed their expectations and put our customers at the heart of the
                business.
              </p>
              <p>
                All employees are expected to provide excellent services to customers in
                a corporate and professional manner, ensuring customers are treated
                fairly and with respect in order to sustain the success of the organization,
                retain existing customers and also to win new customers.
              </p>
            </div>
          </div>
        </div>

        <div id="quality-policy-statement" class="container detail alternate heading-left">
          <h1 class="show-small">Quality Policy Statement</h1>
          <div class="row">
            <div class="mt-20 col-lg-4 order-lg-2" data-aos="zoom-in">
              <img src="~/assets/img/covers/img-2.png" class="section-image" alt="vr viewing">
            </div>
            <div class="mt-20 col-lg-8 order-lg-1">
              <h1 class="show-big">Quality Policy Statement</h1>
              <p class="ml-2">At Filmo Holdings Limited, We are committed to:</p>
              <ul>
                <li>
                  The provision of quality and affordable real estate services such as
                  property management and facility maintenance in order to meet our
                  clients/customers, relevant regulatory, statutory and other interested
                  parties' requirements.
                </li>
                <li>
                  Compliance with organizational requirements, practices, processes and
                  procedures through an effective implementation of ISO 9001:2015 Quality
                  Management System;
                </li>
                <li>
                  Periodic review and continuous improvement of the company's quality management
                  system in order to achieve its strategic goals.
                </li>
                <li>
                  Effective implementation of measurable quaility objectives at relevant levels
                  and fuctions to track the organization's performance.
                </li>
              </ul>
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
      title: "FilmoRealty · Policy Statement"
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
}
</script>


<style src="~/assets/css/policy-statement.css" scoped>

