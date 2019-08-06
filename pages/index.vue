<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>
            The Evolution Of
            <br />Real Estate Services
          </h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container">
        <div class="heading-right">
          <div class="row">
            <div class="mt-20 col-md-10 offset-md-1" data-aos="fade-up">
              <p>We are a leading PropTech and real estate services company with a focus on real estate management, advisory and consultancy services. With over 25 years of industry experience, we now stand at the forefront of PropTech in Nigeria.</p>
              <p>Our track record of delivering real estate services to individuals and companies spanning 12 states in Nigeria uniquely positions us to develop targeted and innovative technology solutions to drive the real estate industry into the future. In 2019, we established PropLab.Africa, a subsidiary of FilmoRealty which develops and invests in PropTech solutions.</p>
              <p>At Filmo, we are dedicated to using technology and data to deliver more value to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="section" id="how-we-work">
          <h1 class="text-center">How We Work</h1>
          <div class="row">
            <div class="mt-20 col-md-10 offset-md-1" data-aos="fade-up">
              <p>We are partners not contractors. We invest in and utilize big data analysis and predictive analytics to optimize running costs and sustain quality in the management of our clients’ real estate portfolio no matter the size.</p>

              <p>VAMP, our flagship proprietary software, is the engine that drives all of our technology platforms and supports on-site teams in their daily operations. Our control room monitors and assesses operations, and collects operational data across different matrixes for ongoing analyses of patterns, anomalies and market comparison of quality and costs.</p>

              <p>We are able to provide our clients with a 360-view of activities and the performance of their facilities in real-time compared to historical trends in the market which then equips them to make informed management and strategic decisions to drive their businesses forward.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section community d-none" id="our-community">
        <h1 class="text-center">Join Our Community</h1>
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
              />
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
              />
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
              />
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

      <div class="section reviews" id="our-clients">
        <h1 class="text-center hide-very-small">OUR PARTNERS & CLIENTS</h1>
        <section class="customer-logos slider">
          <div class="slide">
            <img src="~/assets/img/filmo-clients/brains-and-hammers-logo.png" class="section-image" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/fibre-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/mixtafrica-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/Access-Bank-Logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/dangote-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/schlumberger-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/lagos-state-govt.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/firs-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/kaduna-state-logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/NNPC-Logo.png" />
          </div>
          <div class="slide">
            <img src="~/assets/img/filmo-clients/9mobile-logo.png" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import formMixin from "~/mixins/forms";
import { orderBy } from "lodash";

export default {
  computed: {
    bookingApiUrl() {
      return this.$store.state.bookingApiUrl;
    }
  },
  created() {
    if (this.bookingApiUrl) this.getIndustries();
  },
  data: () => ({
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
  }),
  head: () => ({
    title: "FilmoRealty · The Evolution of Real Estate Services"
  }),
  methods: {
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
    }
  },
  mixins: [formMixin],
  mounted() {
    AOS.init({
      easing: "ease-in-out-sine",
      duration: 800
    });

    $(document).ready(function() {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });

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
  },
  watch: {
    bookingApiUrl() {
      this.getIndustries();
    }
  }
};
</script>

<style src="~/assets/css/home-page.css" scoped></style>