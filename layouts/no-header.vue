<template>
  <!-- Body Inner -->
  <div class="body-inner">
    <!-- Header -->
    <header id="header" class="header-plain">
      <header-menu />
    </header>
    <!-- end: Header -->
    <nuxt />
    <!-- Footer -->
    <layout-footer />
    <!-- end: Footer -->

    <!-- Scroll top -->
    <a id="scrollTop">
      <i class="icon-chevron-up1"></i>
      <i class="icon-chevron-up1"></i>
    </a>
    <!--Plugins-->
  </div>
  <!-- end: Body Inner -->
</template>

<script>
import headerMenu from "@/components/layout/header-menu";
import layoutFooter from "@/components/layout/footer";
import layoutMixin from "@/mixins/layout";

export default {
  components: { headerMenu, layoutFooter },
  mixins: [layoutMixin]
};
</script>