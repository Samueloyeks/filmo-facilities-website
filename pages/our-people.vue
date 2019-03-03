<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>OUR PEOPLE</h1>
        </div>
      </div>
    </header>
    <main class="about-us">
      <section class="container about-details">
        <div id="our-people" class="detail our-people alternate heading-right">
          <div class="row">
            <div
              class="mt-20 col-md-6 offset-md-3 order-1 order-lg-2 text-center"
              data-aos="fade-up"
            >
              <p>We invest heavily in the sourcing, well-being and training of all our people. We have a rigorous recruitment process, and our property managers and technicians attend our bespoke 20 hours in-house training course annually. We currently have a work force of over 200 full time staff</p>
            </div>
          </div>
        </div>
        <div id="management" class="detail people heading-left">
          <h1>Management</h1>
          <div class="row managers">
            <div class="management-member row">
              <div class="management-image-container col-lg-5">
                <img
                  src="~/assets/img/brochure/luqman.jpg"
                  alt="Luqman Edu - CHIEF VISIONARY OFFICER AND MANAGING DIRECTOR"
                >
              </div>
              <div class="col-lg-7">
                <p></p>
                <h5>Luqman Edu</h5>
                <span class="person-title">CHIEF VISIONARY OFFICER AND MANAGING DIRECTOR</span>
                <p></p>
                <div data-aos="fade-up">
                  <p>Luqman worked in the United Kingdom for leading companies in Technology, Oil & Gas and Banking before moving back to Nigeria to work for Oando Plc. He has been leading FILMO in an acting capacity since 2015.</p>
                  <p>He holds a Bsc in Applied Business Management from Imperial College, London, an Msc in Global Management from London School of Economics, London and a Certificate in Finance from The European School of Economics. He also recieved the traditional title of 'Dan Masanin Sarkin Musulmi' (Friend to the King and Leader of the Learned) from the 18th Sultan of Sokoto.</p>
                  <p>Furthermore, Luqman is passionate about the development of Nigeria and is a founding trustee of The 67 Million Youth Initiative</p>
                </div>
              </div>
            </div>
            <div class="management-member row">
              <div class="management-image-container col-lg-5">
                <img
                  src="~/assets/img/brochure/ann-marie.jpg"
                  style="height:220px"
                  alt="Ann Marie - Chief experience officer and head of operations"
                >
              </div>
              <div class="col-lg-7">
                <p></p>
                <h5>Ann-Marie Onubogu-Opara</h5>
                <span class="person-title">Chief Experience Officer and head of operations</span>
                <p></p>
                <div data-aos="fade-up">
                  <p>Ann-Marie has worked in International Real Estate for over 8 years. She has experience working for both Landlords and Tenants across various skill lines, including Property Management, Occupier Management, Transaction Management and Lease Advisory.</p>
                  <p>Before joining FILMO she was based in the United Kingdom and worked with Cushman & Wakefield (one of the largest global real estate services company), Source8 and Broadgate Estates. She has expertise in working with clients across the Europe, Middle East and Africa regions, ensuring strategies are optimised and opportunities are maximised.</p>
                  <p>She holds postgraduate degree in Real Estate from London South Bank University and is a Member of the Royal Institute of Chartered Surveyors.</p>
                </div>
              </div>
            </div>
            <div class="management-member">
              <div class="row">
                <div class="management-image-container col-lg-5">
                  <img
                    src="~assets/img/brochure/abiodun.jpg"
                    alt="Abiodun Mamora - Chief Finance Officer & Head of Corporate Services"
                  >
                </div>
                <div class="col-lg-7">
                  <p></p>
                  <h5>Abiodun Mamora</h5>
                  <span class="person-title">Chief Finance Officer & Head of Corporate Services</span>
                  <p></p>
                  <div data-aos="fade-up">
                    <p>Abiodun is a seasoned finance professional with experience cutting across financial reporting, management accounting, auditing, internal control, business process management and regulatory compliance. Her outstanding professional skill and leadership ability has earned her a track record of achievements in previous roles spanning Banking, ICT, Audit/Professional Services and several small and medium scale enterprises where she provided start up financial advisory services.</p>
                    <p>She is a member of the Association of Chartered Certified Accountants (ACCA), holds a first class Bachelor degree in Applied Accounting from Oxford Brookes University and currently is undertaking a Master's degree in Professional Accountancy from University of London.</p>
                    <p>She enjoys reading and actively supports social causes with focus on leadership development for young finance professionals</p>
                  </div>
                </div>
              </div>
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
      title: "FilmoRealty · Our People"
    };
  },
  mounted() {
    if (process.client) {
      AOS.init({
        easing: "ease-in-out-sine",
        duration: 800
      });
    }
  }
};
</script>

<style src="~/assets/css/our-people.css" scoped></style>
