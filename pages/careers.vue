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
          >We currently do not have any career openings but you can join our community to be notified of PropTech opportunities.</p>
        </div>
        
        <div class="col-md-6 offset-md-3 m-t-60" id="our-community">
          <join-community />
        </div>
      </section>
    </main>
  </main>
</template>

<script>
import axios from "axios";
import joinCommunity from "@/components/join-community";
import formMixin from "~/mixins/forms";
import { orderBy } from "lodash";

export default {
  components: { joinCommunity },
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
  watch: {
    bookingApiUrl() {
      this.getIndustries();
    }
  }
};
</script>
