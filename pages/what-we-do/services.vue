<template>
  <main>
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image text-light"
      data-parallax-image="/img/covers/advisory-2.jpg"
    >
      <div class="container">
        <div class="page-title">
          <h1>Our Services</h1>
        </div>
      </div>
    </section>
    <!-- end: Page title -->

    <section class="background-grey">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <p
              class="lead"
            >We utilize a collaborative and team-based approach to guide and support our clients in developing strategic and operational plans that combines smart people and innovative thinking. Together with our clients, we build strong ideas, thoughtful strategies and powerful executions.</p>
            <p class="lead">Our services are ISO 9001:2015 certified and powered by tech.</p>
          </div>
          <!-- Sidebar-->
          <div class="sidebar col-lg-3">
            <!--widget newsletter-->
            <div class="widget clearfix widget-archive">
              <!-- <h4 class="widget-title">Product categories</h4> -->
              <ul class="list list-lines">
                <li>
                  <a
                    href="#properties-and-facilities-management"
                    class="smooth-scroll"
                  >Properties & Facilities Management</a>
                </li>
                <li>
                  <a
                    href="#development-and-project-management"
                    class="smooth-scroll"
                  >Development & Project Management</a>
                </li>
                <li>
                  <a href="#consultancy-services" class="smooth-scroll">Advisory & Consultancy Services</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- end: Sidebar-->
        </div>
      </div>
    </section>

    <section class="p-t-120 p-b-40" id="properties-and-facilities-management">
      <div class="container xs-text-center sm-text-center">
        <div class="row">
          <div class="col-lg-8 p-b-40">
            <h2>Properties & Facilities Management</h2>
            <p
              class="lead"
            >We are a market leader for total property & facilities management services. We currently provide our services to major commercial and residential properties across 8 states of Nigeria.</p>
            <p
              class="lead"
            >Our team have achieved the highest levels of certification for facilities management and our operations are benchmarked with international standards of maintenance. The technical engineers are equipped with the latest tools and attend 20-hours technical refresher courses annually by industry professionals.</p>
            <p
              class="lead"
            >All operations are monitored at our HQ operations control room and big data is analysed in real time for service optimization. We provide our clients with regular reports of a 360-view of site activities and service delivery. Furthermore, to manage large estates, our platform integrates with other tech products including RFID people and vehicle control, home security alarm systems, e-payment and energy management solutions.</p>
          </div>
          <div class="col-lg-4 m-t-100">
            <img
              src="/img/brochure/operations-technician.jpg"
              alt="Consultancy image"
              class="col-image m-t-50"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="p-t-120 p-b-40 background-grey" id="development-and-project-management">
      <div class="container xs-text-center sm-text-center">
        <div class="row">
          <div class="col-lg-8 p-b-40">
            <h2>Development & Project Management</h2>
            <p
              class="lead"
            >We have delivered landmark projects with our ﬁrst–class development & project management consulting services for new and existing built environments. We deploy site management resources for site activities coordination and use our smart tech platform for work monitoring and progress reporting to ensure that projects are completed to specification and quality, within budget and deadlines.</p>
            <p
              class="lead"
            >We were the development managers for the first high-rise development on Eko Atlantic (Lagos, Nigeria), and have been project managers for many of the residential multi-tenant developments in Victoria Island & Ikoyi (Lagos, Nigeria).</p>
          </div>
          <div class="col-lg-4 m-t-100">
            <img
              src="/img/brochure/eko-atlantic.jpg"
              alt="development and product management image"
              class="col-image"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="p-t-120 p-b-40" id="consultancy-services">
      <div class="container xs-text-center sm-text-center">
        <div class="row">
          <div class="col-lg-8 p-b-40">
            <h2>Advisory & Consultancy Services</h2>
            <p
              class="lead"
            >We have successfully advised for billion naira real estate transactions and we are consultants to private organisations, state and federal governments for impactful solutions to real estate issues.</p>
            <p class="lead">We utilize our vast knowledge and experience in the real estate and tech industries to deliver cutting edge solutions. Our process includes documentation to facilitate operational efﬁciencies and drive short and long-term strategic planning.</p>
          </div>
          <div class="col-lg-4 m-t-50">
            <img src="/img/brochure/bukunmi-flat.jpg" alt="Consultancy image" class="col-image" />
          </div>
        </div>
      </div>
    </section>

    <section class="box-fancy section-fullwidth text-light p-b-0 d-none">
      <div class="row">
        <div style="background-color:rgb(149, 149, 154);" class="col-lg-4">
          <h3>Properties & Facilities Management</h3>
          <p>We are a market leader for total property & facilities management services. We currently provide our services to major commercial and residential properties across 8 states of Nigeria with over 100 full-time technical engineers. Our team has local and international experience in facilities management, and our operations are benchmarked with international standards of maintenance.</p>
        </div>

        <div style="background-color:#a1a1a3" class="col-lg-4">
          <h3>Development & Project Management</h3>
          <p>We have delivered landmark projects with our ﬁrst–class development & project management consulting services for new and existing built environments. We work with our clients from pre-contract to post contract stages to ensure that projects are completed to specification and quality, within budget and on time.</p>
        </div>

        <div style="background-color:rgb(168, 168, 171);" class="col-lg-4">
          <h3>Consultancy Services</h3>
          <p>We have consulted for the public and private sectors, federal and state governments, and major agencies and organisations for impactful solutions to major challenges. We utilize our vast industry knowledge and experience with cutting edge technologies to deliver innovative solutions to our clients. We provide process documentation to facilitate operational efﬁciencies and drive short and long-term strategic planning.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: () => ({ title: "FilmoRealty · Services" })
};
</script>