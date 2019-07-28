<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>WHO WE ARE</h1>
        </div>
      </div>
    </header>
    <main class="about-us container">
      <section class="sister-companies">
        <h1 class="text-center">Sister Companies</h1>
        <div class="company">
          <h3 class="text-center">PropLab Africa</h3>
          <div class="row">
            <div class="mt-20 col-md-8 offset-md-2 text-center" data-aos="fade-up">
              <p>As the technology ecosystem continues to grow in Nigeria – the need for specialized spaces dedicated to specific tech innovation will be necessary. This is why we launched PropLab.Africa – a dedicated community of innovators, startups and investors in the African PropTech and real estate industries. PropLab.Africa features flexible and collaborative workspace, shared services, training and hackathon events, and access to our network of industry experts, entrepreneurs and investors.</p>
            </div>
          </div>
        </div>

        <div class="company">
          <h3 class="text-center">Filmo Facilities Management</h3>
          <div class="row">
            <div class="mt-20 col-md-8 offset-md-2 text-center" data-aos="fade-up">
              <p>A market leader in providing tech facilities management services to commercial and residential properties across 8 states of Nigeria. The team have international and local education and experience in facilities management and operations are benchmarked with the British standards or maintenance.</p>
            </div>
          </div>
        </div>

        <div class="company">
          <h3 class="text-center">Filmo Development</h3>
          <div class="row">
            <div class="mt-20 col-md-8 offset-md-2 text-center" data-aos="fade-up">
              <p>A real estate development and advisory company. Over the years, earned a reputation for delivering quality real estate advisory and development management services to private and public sector clients throughout Nigeria.</p>
            </div>
          </div>
        </div>
      </section>

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
                <p>Luqman worked in the United Kingdom for leading companies in Technology, Oil & Gas and Banking before moving back to Nigeria to work for Oando Plc. He has been leading FILMO in an acting capacity since 2015.</p>
                <p>He holds a Bsc in Applied Business Management from Imperial College, London, an Msc in Global Management from London School of Economics, London and a Certificate in Finance from The European School of Economics. He also recieved the traditional title of 'Dan Masanin Sarkin Musulmi' (Friend to the King and Leader of the Learned) from the 18th Sultan of Sokoto.</p>
                <p>Furthermore, Luqman is passionate about the development of Nigeria and is a founding trustee of The 67 Million Youth Initiative</p>
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
