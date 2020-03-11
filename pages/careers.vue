<template>
  <main>
    <!-- Page title -->
    <section
      id="page-title"
      class="header-image text-light"
      data-parallax-image="/img/covers/careers.jpg"
    >
      <div class="container">
        <div class="page-title">
          <h1>Careers</h1>
        </div>
      </div>
    </section>
    <!-- end: Page title -->
    <main class="policy-statement">
      <section>
        <div class="col-md-6 offset-md-3">
          <p
            class="lead"
          >We currently do not have any career openings but you can join our community to be notified of future opportunities.</p>
        </div>

        <div class="col-md-6 offset-md-3 m-t-60" id="our-community">
          <join-community />
        </div>
      </section>
    </main>
  </main>
</template>

<script>
import joinCommunity from "@/components/join-community";

export default {
  components: { joinCommunity },
  head: () => ({ title: "FilmoRealty · Careers" })
};
</script>
