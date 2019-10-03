<template>
  <main>
    <!-- Content -->
    <section id="page-content" v-show="!postsLoading">
      <div class="container">
        <!-- post content -->

        <!-- Page title -->
        <div class="page-title text-center">
          <h2>Corporate Policy</h2>
        </div>
        <!-- end: Page title -->
        <p></p>
        <p></p>
        <p></p>
        <!-- Blog -->
        <div id="blog" class="col-md-12 p-10">
          <h3>CORPORATE QUALITY OBJECTIVES</h3>
          <p class="lead">At Filmo Holdings Limited, we commit to:</p>
          <p
            class="lead"
          >a. Improve communication with our Customers and handling of Customers complaints.</p>
          <p class="lead">b. Improve on Customer satisfaction monitoring.</p>
          <p class="lead">c. Improve the performance of external service providers.</p>

          <h3>CUSTOMER FOCUS POLICY</h3>
          <p
            class="lead"
          >At Filmo Holdings Limited, our Customers are the basis for our corporate existence and continuity in the business</p>
          <p class="lead">
            We do all we can to attract and retain the confidence/patronage of our Customers by understanding and meeting their requirements; strive to
            exceed their expectations and put our Customers at the heart of the business.
          </p>
          <p class="lead">
            All employees are expected to provide excellent services to Customers in a corporate and professional manner, ensuring Customers are treated fairly
            and with respect in order to sustain the success of the organization, retain existing Customers and also to win new customers.
          </p>

          <h3>QUALITY POLICY STATEMENT</h3>
          <p class="lead">At Filmo Holdings Limited, we are committed to:</p>
          <p class="lead">
            a. The provision of quality and affordable real estate services such as property management and facility maintenance in order to meet our clients/customers, relevant regulatory,
            statutory and other interested parties' requirements.
          </p>
          <p class="lead">
            b. Compliance with organizational requirements, practices, processes and procedures through an effective implementation of ISO 9001:2015
            Quality Management System;
          </p>
          <p
            class="lead"
          >c. Periodic review and continuous improvement of the company's quality management system in order to achieve its strategic goals.</p>
          <p
            class="lead"
          >d. Effective implementation of measurable quality objectives at relevant levels and functions to track the organization's performance.</p>
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