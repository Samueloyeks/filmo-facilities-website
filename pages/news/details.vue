<template>
  <main v-if="!postLoading">
    <!-- Page title -->
    <section
      id="page-title"
      class="page-title-center text-light background-overlay-dark"
      :style="{
        'background-image': `url('${post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}')`
      }"
    >
      <div class="container">
        <div class="page-title">
          <h1 v-html="post.title.rendered"></h1>
          <div class="small m-b-20">
            {{ post.date | dateFormat }} |
            <a href="#">by {{ post._embedded.author[0].name }}</a>
          </div>
        </div>
      </div>
    </section>
    <!-- end: Page title -->

    <!-- Page Content -->
    <section id="page-content" class="sidebar-right">
      <div class="container">
        <div id="blog" class="single-post col-lg-10 center">
          <!-- Post single item-->
          <div class="post-item">
            <div class="post-item-wrap">
              <div class="post-item-description" v-html="post.content.rendered">
              </div>
            </div>
          </div>
          <!-- end: Post single item-->
        </div>
      </div>
    </section>
    <!-- end: Page Content -->
  </main>
  <loading v-else />
</template>

<script>
import WPAPI from "wpapi";
import loading from "@/components/ui/loading";

export default {
  components: { loading },
  created() {
    this.wp = new WPAPI({ endpoint: process.env.CMS_API_BASE_URL });
    this.setPost(this.$route.query.id);
  },
  data: () => ({
    post: null,
    postLoading: true,
    wp: null
  }),
  methods: {
    async setPost(id) {
      try {
        this.post = await this.wp
          .posts()
          .id(id)
          .embed();
        console.log(this.post);
        this.postLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    $route(to) {
      this.setPost(to.query.id);
    }
  }
};
</script>
