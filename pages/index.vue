<template>
  <div>
    <header>
      <div>
        <b-carousel
          id="header-carousel"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          background="#000"
          :interval="4000"
          img-width="1024"
          img-height="480"
          v-model="slide"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            img-src="~/assets/img/grey-covers/home-cover.jpg"
            id="header-image-evolution"
            class="header-image"
          >
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>
                    The Evolution Of
                    <br>Real Estate Services
                  </h1>
                </div>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide img-src="~/assets/img/grey-covers/img-6.jpg" class="header-image">
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>Property and Facilities Management</h1>
                  <p>Each property is unique; we develop a strategic and operational plan that combines people, process and technology.</p>
                  <nuxt-link
                    class="btn btn-lg btn-default"
                    to="/services#property-facilities-management"
                  >Learn More &rarr;</nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="~/assets/img/grey-covers/vr.jpg"
            id="header-image-evolution"
            class="header-image"
          >
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>Letting and Sales</h1>
                  <p>
                    Our marketing strategies could involve conventional and unconventional approaches.
                    We utilise virtual reality for client inspections, and partner with property developers to showcase their existing and future projects.
                  </p>
                  <nuxt-link
                    class="btn btn-lg btn-default"
                    to="/services#letting-and-sales"
                  >Learn More &rarr;</nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="~/assets/img/grey-covers/lakowe.jpg"
            id="header-image-evolution"
            class="header-image"
          >
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>Real-Estate Advisory &amp; Investments</h1>
                  <p>We provide advice and opportunities for small or large investment in real-estate.</p>
                  <nuxt-link
                    class="btn btn-lg btn-default"
                    to="/services#real-estate-advisory-and-investments"
                  >Learn More &rarr;</nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="~/assets/img/grey-covers/img-5.jpg"
            id="header-image-evolution"
            class="header-image"
          >
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>Project Management</h1>
                  <p>We provide project management, development management and development advisory services to ensure that projects are delivered to specification and quality, within budget, at the specified time.</p>
                  <nuxt-link
                    class="btn btn-lg btn-default"
                    to="/services#project-management"
                  >Learn More &rarr;</nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="~/assets/img/grey-covers/bukunmi.jpg"
            id="header-image-evolution"
            class="header-image"
          >
            <div class="header-image">
              <div class="header-text">
                <div class="container col-md-8 offset-md-2">
                  <h1>Consultancy</h1>
                  <p>We deliver quality solutions and provide process documentation to aid operational efﬁciencies.</p>
                  <nuxt-link
                    class="btn btn-lg btn-default"
                    to="/services#consultancy"
                  >Learn More &rarr;</nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </header>
    <main id="home-products">
      <div class="section home-products" v-if="properties.length > 1">
        <h1 class="text-center">OUR PRODUCTS</h1>
        <h2 class="text-center sub-title">Lakowe Lakes Experiences</h2>
        <section class="products">
          <div class="container">
            <div class="row d-f-s-a">
              <div
                class="col-lg-3 col-md-4 col-sm-6 col-xs-12 product"
                v-for="property in properties"
                :key="property.id"
              >
                <div class="card chamfered-right">
                  <a :href="'https://escapetolakowe.com'">
                    <div
                      class="img"
                      :style="{ 'background-image': 'url(' + property.picture_path + ')' }"
                      :aria-label="property.name"
                    >
                      <!-- <img src="" alt="{{ $property->name }}"> -->
                    </div>
                    <div class="container product-info">
                      <small class="category-info">
                        <b v-text="property.category.name"></b>
                      </small>
                      <p class="callout">
                        <b v-text="property.callout .slice(0, 30)">
                          <span v-if="property.callout.lenth > 30">,,,</span>
                        </b>
                      </p>
                      <!-- <p v-text="property.price"></p> -->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section community" id="our-community">
        <h1 class="text-center">JOIN OUR COMMUNITY</h1>
        <form class="col-md-6 offset-md-3" id="community-subscription">
          <span class="text-success" v-text="communityRequestSuccessMessage"></span>

          <div class="row">
            <div class="form-group col-lg-8 offset-lg-2">
              <label for="name">
                Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                v-model="community.name"
                class="form-control"
                placeholder="Name"
                required
              >
              <small
                class="text-danger"
                v-if="communityRequestErrors.name"
                v-text="communityRequestErrors.name"
              ></small>
            </div>
            <div class="form-group col-lg-8 offset-lg-2">
              <label for="name">
                Company Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="company_name"
                v-model="community.company_name"
                class="form-control"
                placeholder="Company Name"
                required
              >
              <small
                class="text-danger"
                v-if="communityRequestErrors.company_name"
                v-text="communityRequestErrors.company_name"
              ></small>
            </div>
            <div class="form-group col-lg-8 offset-lg-2">
              <label for="email">
                Email
                <span class="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                v-model="community.email"
                class="form-control"
                placeholder="Email Address"
                required
              >
              <small
                class="text-danger"
                v-if="communityRequestErrors.email"
                v-text="communityRequestErrors.email"
              ></small>
            </div>

            <div class="form-group col-lg-8 offset-lg-2">
              <label for="industry_id">
                Industry
                <span class="text-danger">*</span>
              </label>
              <select
                name="industry_id"
                v-model="community.industry_id"
                id
                class="form-control"
                required
              >
                <option value>Select an Industry</option>
                <option
                  v-for="industry in industries"
                  :key="industry.id"
                  :value="industry.id"
                  v-text="industry.name"
                ></option>
              </select>
              <small
                class="text-danger"
                v-if="communityRequestErrors.industry_id"
                v-text="communityRequestErrors.industry_id"
              ></small>
            </div>
          </div>
          <div class="form-group text-center">
            <button
              class="btn btn-default"
              :disabled="communityRequestSubmitting"
              @click.prevent="submitCommunityRequest()"
            >
              <span v-if="communityRequestSubmitting">Submitting...</span>
              <span v-else>JOIN</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import formMixin from "~/mixins/forms";

export default {
  mixins: [formMixin],
  components: {
    "b-carousel": () => import("bootstrap-vue/es/components/carousel/carousel"),
    "b-carousel-slide": () =>
      import("bootstrap-vue/es/components/carousel/carousel-slide")
  },
  data() {
    return {
      properties: [],
      industries: [],
      communityRequestSuccessMessage: null,
      communityRequestSubmitting: false,
      community: {
        name: "",
        company_name: "",
        email: "",
        industry_id: "",
        nigerian_state_id: ""
      },
      communityRequestErrors: {
        name: null,
        company_name: null,
        communityEmail: null,
        nigerian_state_id: null,
        industry_id: null
      },
      slide: 0,
      sliding: null
    };
  },
  methods: {
    getProperties() {
      axios
        .get(this.bookingApiUrl + "/properties", {
          params: {
            associations: ["Category"]
          }
        })
        .then(response => {
          this.properties = response.data.data;
        });
    },
    getIndustries() {
      axios.get(this.bookingApiUrl + "/industries").then(response => {
        this.industries = response.data.data;
      });
    },
    submitCommunityRequest() {
      if (
        this.validateForm("community-subscription", "communityRequestErrors")
      ) {
        this.communityRequestSubmitting = true;
        axios
          .post(this.bookingApiUrl + "/community-membership", this.community)
          .then(response => {
            if (response.data.status == true) {
              this.communityRequestSubmitting = false;
              this.communityRequestSuccessMessage =
                "Thank you for subscribing to our community. We are glad to have you on board";
              this.community = {
                name: "",
                email: "",
                location: "",
                industry_id: "",
                nigerian_state_id: null
              };
            }
          });
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  computed: {
    bookingApiUrl() {
      return this.$store.state.bookingApiUrl;
    }
  },
  watch: {
    bookingApiUrl() {
      this.getProperties();
      this.getIndustries();
    }
  },
  head() {
    return {
      title: "FilmoRealty · Home"
    };
  },
  created() {
    if (this.bookingApiUrl) {
      this.getProperties();
      this.getIndustries();
    }
  },
  mounted() {
    if (process.client) {
      $(document).ready(function() {
        $(".smooth-scroll").click(function() {
          $("html, body").animate(
            {
              scrollTop: $($.attr(this, "href")).offset().top - 100
            },
            500
          );
          return false;
        });
      });
    }
  }
};
</script>

<style src="~/assets/css/home-page.css" scoped></style>
