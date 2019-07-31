<template>
  <div class="news" v-if="!postsLoading">
    <div
      class="jumbotron p-4 p-md-5 mb-0 text-white rounded bg-dark featured-post"
      :style="{ 
        'background-image': `url('${featuredPost._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}')` 
      }"
      v-if="featuredPost"
    >
      <div class="col-md-6 px-0 featered-post-content">
        <h1 class="display-4 font-italic" v-html="featuredPost.title.rendered"></h1>
        <p class="lead my-3" v-html="featuredPost.excerpt.rendered"></p>
        <p class="lead mb-0">
          <!-- <a href="#" class="text-white font-weight-bold">Continue reading...</a> -->
        </p>
      </div>
    </div>

    <div class="container pt-md-5">
      <div class="row mb-2">
        <div class="col-md-6" v-for="post in posts" :key="post.id">
          <div
            class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary"></strong>
              <h3 class="mb-0" v-html="post.title.rendered"></h3>
              <div class="mb-1 text-muted">{{ post.date | dateFormat }}</div>
              <p
                class="card-text mb-auto"
                v-html="`${post.excerpt.rendered.slice(0, 70)}${(post.excerpt.rendered.length > 70) ? '[&hellip;]' : null}`"
              ></p>
              <!-- <a href="#" class="stretched-link">Continue reading</a> -->
            </div>
            <div class="col-auto d-none d-lg-block">
              <div
                class="post-thumbnail"
                :style="{ 
        'background-image': `url('${post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}')` 
      }"
              ></div>
              <!-- <img
                class="bd-placeholder-img"
                width="200"
                height="250"
                :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url"
                :alt="`${post.title.rendered} image`"
              />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <main role="main" class="container" v-if="false">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>

          <div class="blog-post">
            <h2 class="blog-post-title">Sample blog post</h2>
            <p class="blog-post-meta">
              January 1, 2014 by
              <a href="#">Mark</a>
            </p>

            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
            <hr />
            <p>
              Cum sociis natoque penatibus et magnis
              <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <blockquote>
              <p>
                Curabitur blandit tempus porttitor.
                <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </blockquote>
            <p>
              Etiam porta
              <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
          </div>
          <!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">Another blog post</h2>
            <p class="blog-post-meta">
              December 23, 2013 by
              <a href="#">Jacob</a>
            </p>

            <p>
              Cum sociis natoque penatibus et magnis
              <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <blockquote>
              <p>
                Curabitur blandit tempus porttitor.
                <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </blockquote>
            <p>
              Etiam porta
              <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
          <!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">New feature</h2>
            <p class="blog-post-meta">
              December 14, 2013 by
              <a href="#">Chris</a>
            </p>

            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Etiam porta
              <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          </div>
          <!-- /.blog-post -->

          <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a
              class="btn btn-outline-secondary disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >Newer</a>
          </nav>
        </div>
        <!-- /.blog-main -->

        <aside class="col-md-4 blog-sidebar">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">
              Etiam porta
              <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>
        </aside>
        <!-- /.blog-sidebar -->
      </div>
      <!-- /.row -->
    </main>
  </div>
  <div class="loading" v-else>
    <loading />
  </div>
</template>

<script>
import WPAPI from "wpapi";

import loading from "@/components/ui/loading";

export default {
  components: { loading },
  computed: {
    featuredPost() {
      return this.posts.find(post => post.sticky == true);
    }
  },
  created() {
    this.wp = new WPAPI({ endpoint: process.env.CMS_API_BASE_URL });
    this.getPosts();
  },
  data: () => ({
    posts: [],
    postsLoading: true,
    wp: null
  }),
  head: () => ({ title: "FilmoRealty · News" }),
  methods: {
    async getPosts() {
      try {
        this.posts = await this.wp.posts().embed();
        this.postsLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.news {
  margin: 60px 0px;
}

.featured-post {
  background-position: center;
  background-size: cover;
  filter: grayscale(0.5);
}
.featered-post-content {
  padding: 20px !important;
  background-color: rgba(0, 0, 0, 0.7);
}
.post-thumbnail {
  background-position: center;
  background-size: cover;
  height: 210px;
  width: 200px;
}
.loading {
  height: 400px;
  padding-top: 100px;
}
</style>
