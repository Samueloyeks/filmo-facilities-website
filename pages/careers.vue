<template>
  <div>
    <header>
      <div class="header-image">
        <div class="header-text">
          <h1>Careers</h1>
        </div>
      </div>
    </header>
    <main class="policy-statement">
      <section class="container">
        <div class="container row">
          <div class="col-md-6 offset-md-3 policy-gist">
            <p>We currently do not have any career openings. Kindly join our mailing list to be notified of future opportunities.</p>
          </div>
        </div>
      </section>

      <div class="col-md-6 offset-md-3" id="our-community">
        <h1 class="text-center">Join Our Community</h1>
        <form id="community-subscription">
          <span class="text-success" v-text="communityRequestSuccessMessage"></span>
          <div class="row">
            <div class="form-group col-lg-10 offset-lg-1">
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
            <div class="form-group col-lg-10 offset-lg-1">
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
            <div class="form-group col-lg-10 offset-lg-1">
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

            <div class="form-group col-lg-10 offset-lg-1">
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
  head() {
    return {
      title: "FilmoRealty · Careers"
    };
  },
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
    if (process.client) {
      AOS.init({
        easing: "ease-in-out-sine",
        duration: 800
      });

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
  },
  watch: {
    bookingApiUrl() {
      this.getIndustries();
    }
  }
};
</script>

<style src="~/assets/css/careers.css" scoped/>
