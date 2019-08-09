<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>Who We Are</h1>
        </div>
      </div>
    </header>
    <main class="about-us container">
      <section id="management" class="detail people heading-left">
        <h1 class="text-center">Management</h1>
        <div class="row managers">
          <div class="management-member row">
            <div class="management-image-container col-lg-5">
              <img
                src="~/assets/img/brochure/luqman.jpg"
                alt="Luqman Edu - CHIEF VISIONARY OFFICER AND MANAGING DIRECTOR"
              />
            </div>
            <div class="col-lg-7">
              <p></p>
              <h5>Luqman Edu</h5>
              <span class="person-title">CHIEF VISIONARY OFFICER AND MANAGING DIRECTOR</span>
              <p></p>
              <div data-aos="fade-up">
                <p>Luqman worked in the United Kingdom for leading companies in Technology, Oil & Gas and Banking before moving back to Nigeria. He has experience in business strategy, performance management and financial modelling, and has been leading FilmoRealty with his team of millennials since 2015. The company has seen massive growth under his leadership.</p>
                <p>He holds a BSc in Applied Business Management from Imperial College, an Msc in Global Management from London School of Economics and a Certificate in Finance from The European School of Economics. He also received the traditional title of 'Dan Masanin Sarkin Musulmi' (Friend to the King and Leader of the Learned) from the 18th Sultan of Sokoto.</p>
                <p>Furthermore, Luqman is passionate about the development of Nigeria and is a founding trustee of The 67 Million Youth Initiative - a coalition of Nigerians with the mandate to galvanize active youth participation in politics and leadership of Nigeria.</p>
              </div>
            </div>
          </div>

          <div class="management-member row">
            <div class="management-image-container col-lg-5">
              <img
                src="~/assets/img/brochure/tosin.jpg"
                alt="Luqman Edu - CHIEF VISIONARY OFFICER AND MANAGING DIRECTOR"
              />
            </div>
            <div class="col-lg-7">
              <p></p>
              <h5>Tosin Durotoye</h5>
              <span class="person-title">CHIEF OPERATING OFFICER</span>
              <p></p>
              <div data-aos="fade-up">
                <p>Tosin has more than 15 years of experience in both the public and private sectors. Prior to joining FilmoRealty, Tosin served as the Director of GreenHouse Lab where she led the establishment of the first female-focused tech accelerator program in Nigeria and the only "Powered by Google" accelerator program in Africa. Prior to this, Tosin worked as the Director of Strategic Partnerships at Framework – an edutech company focused on affordable housing and based in Boston, USA. She also served for 8 years as a Manager at NeighborWorks America – an NGO founded by the United States Congress and focused on affordable housing and community development. In this role, she managed programs and special projects for 250 NeighborWorks’ network organizations and grants totaling over $10M.</p>
                <p>Tosin is an Atlantic Dialogues Emerging Leader, Women in Africa Ambassador and Princeton Alumnicorps Emerging Leader. She holds a Bachelor of Arts in Political Science from Wake Forest University and a Masters of Urban Planning (Housing, Community and Economic Development) degree from New York University’s Wagner School of Public Service.</p>
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
  head: () => ({ title: "FilmoRealty · Who We Are" }),
  mounted() {
    AOS.init({
      easing: "ease-in-out-sine",
      duration: 800
    });
  }
};
</script>

<style src="~/assets/css/our-people.css" scoped></style>
