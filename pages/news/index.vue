<template>
  <main>
    <!-- Content -->
    <section id="page-content" v-show="!postsLoading">
      <div class="container">
        <!-- post content -->

        <!-- Page title -->
        <div class="page-title">
          <h1>News</h1>
        </div>
        <!-- end: Page title -->

        <!-- Blog -->
        <div id="blog" class="grid-layout post-3-columns m-b-30" data-item="post-item">
          <!-- Post item-->
          <div class="post-item border" v-for="post in posts" :key="post.id">
            <div class="post-item-wrap">
              <div
                class="post-image"
                :style="{
                  'background-image': `url('${post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}')`
                }"
              ></div>
              <div class="post-item-description">
                <span class="post-meta-date">
                  <i class="fa fa-calendar-o"></i>
                  {{ post.date | dateFormat }}
                </span>
                <h2>
                  <nuxt-link :to="`/news/details?id=${post.id}`" v-html="post.title.rendered"></nuxt-link>
                </h2>
                <p
                  v-html="`${post.excerpt.rendered.slice(0, 70)}${(post.excerpt.rendered.length > 70) ? '[&hellip;]' : null}`"
                ></p>
                <nuxt-link :to="`/news/details?id=${post.id}`" class="item-link">
                  Read More
                  <i class="fa fa-arrow-right"></i>
                </nuxt-link>
                <a href="#" class="item-link"></a>
              </div>
            </div>
          </div>
          <!-- end: Post item-->
        </div>
        <!-- end: Blog -->
      </div>
      <!-- end: post content -->
    </section>
    <!-- end: Content -->
    <loading v-show="postsLoading" />
  </main>
</template>

<script>
import { get } from "axios";

import loading from "@/components/ui/loading";

export default {
  components: { loading },
  computed: {
    featuredPost() {
      return this.posts.find(post => post.sticky == true);
    }
  },
  created() {
    this.getPosts();
  },
  data: () => ({
    posts: [],
    postsLoading: true,
    wp: null
  }),
  head: () => ({ title: "FilmoRealty · News" }),
  layout: () => "no-header",
  methods: {
    async getPosts() {
      try {
        this.posts = (await get(
          process.env.CMS_API_BASE_URL + "/wp/v2/posts?_embed"
        )).data;
        this.postsLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>