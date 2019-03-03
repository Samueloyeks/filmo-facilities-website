<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>Careers</h1>
        </div>
      </div>
    </header>
    <main class="policy-statement">
      <section class="container">
        <div class="container row">
          <div class="col-md-7 col-lg-7 policy-gist">
            <p>The FilmoRealty experience is unique because of the rich human resources that constitute our workforce.
              <br>Every member of staff has been carefully picked to fit into our rich culture & values.
            </p>
          </div>
          <div class="col-md-5 col-lg-4 offset-1">
            <ul class="policy-links" data-aos="fade-up">
              <li>
                <a href="#hospitality-manager" class="smooth-scroll">Hospitality Manager</a>
              </li>
              <li>
                <a href="#client-manager" class="smooth-scroll">Client Manager</a>
              </li>
              <li>
                <a href="#general-skill-sets" class="smooth-scroll">General Skill Sets</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="policy-details">
        <div id="hospitality-manager" class="container detail alternate heading-left">
          <h1 class="show-small">Hospitality Manager</h1>
          <div class="row">
            <div class="mt-20 col-lg-4 order-lg-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/client-manager-flier.jpeg"
                class="section-image"
                alt="vr viewing"
              >
            </div>
            <div class="mt-20 col-lg-8 order-lg-1">
              <h1 class="show-big">Hospitality Manager</h1>
              <p class="ml-2">Requirements:</p>
              <ul>
                <li>Minimum of 2-3 years' experience</li>
                <li>Proficient with Microsoft Office</li>
                <li>Must be available to work during weekends & holidays (if necessary)</li>
                <li>Prove of experience in an hospitality role</li>
                <li>Customer service orientations</li>
                <li>Team player with leadership Skills.</li>
              </ul>

              <p>Offer Type: Full-time</p>
              <p>Salary: Attractive</p>
              <p>Application closes 21
                <sup>st</sup> January, 2019.
              </p>
            </div>
          </div>
        </div>

        <div id="client-manager" class="container detail alternate heading-left">
          <h1 class="show-small">Client Manager</h1>
          <div class="row">
            <div class="mt-20 col-lg-4 order-lg-2" data-aos="zoom-in">
            </div>
            <div class="mt-20 col-lg-8 order-lg-1">
              <h1 class="show-big">Client Manager</h1>
              <p class="ml-2">Requirements:</p>
              <ul>
                <li>Minimum of 2-3 years' experience</li>
                <li>Customer service orientations</li>
                <li>Prove of experience in a similar role</li>
                <li>Proficient with Microsoft Office</li>
              </ul>

              <p>Offer Type: Full-time</p>
              <p>Salary: Attractive</p>
              <p>Application closes 21
                <sup>st</sup> January, 2019.
              </p>
            </div>
          </div>
        </div>

        <div id="general-skill-sets" class="container detail alternate heading-left">
          <h1 class="show-small">General Skill Sets</h1>
          <div class="row">
            <div class="mt-20 col-lg-4 order-lg-2" data-aos="zoom-in">
              <img
                src="~/assets/img/brochure/filmo-careers.jpeg"
                class="section-image"
                alt="general skill sets"
              >
            </div>
            <div class="mt-20 col-lg-8 order-lg-1">
              <h1 class="show-big">General Skill Sets</h1>
              <p class="ml-2">At FilmoRealty we value:</p>
              <ul>
                <li>Creativity & Innovation</li>
                <li>Professionalism</li>
                <li>Commitment</li>
                <li>Attendance/Punctuality</li>
                <li>Planning/Organizing</li>
                <li>Sound Judgement</li>
                <li>Excellent Communication</li>
              </ul>
            </div>
          </div>

          <div class="mb-20 col-md-6 offset-md-3 order-1 order-lg-2 text-center">
            <p>If you think you are a perfect fit for these roles send your CV to
              <b>careers@filmo-group.com</b>.
            </p>
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
      title: "FilmoRealty · Careers"
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

<style src="~/assets/css/careers.css" scoped/>
