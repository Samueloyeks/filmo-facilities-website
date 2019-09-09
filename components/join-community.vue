<template>
  <div>
    <h3 class="text-uppercase">Join Our Community</h3>
    <div>
      <form class="widget-contact-form" id="community-subscription" role="form" method="post">
        <h4 class="text-success m-b-20" v-text="communityRequestSuccessMessage"></h4>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="name">
              Name
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              aria-required="true"
              name="name"
              v-model="community.name"
              class="form-control required name"
              placeholder="Enter your name"
              required
            />
            <small class="text-danger" v-if="validationErrors.name" v-text="validationErrors.name"></small>
          </div>
          <div class="form-group col-md-6">
            <label for="company_name">
              Company Name
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              aria-required="true"
              name="company_name"
              v-model="community.company_name"
              class="form-control required company-name"
              placeholder="Enter your company name"
              required
            />
            <small
              class="text-danger"
              v-if="validationErrors.company_name"
              v-text="validationErrors.company_name"
            ></small>
          </div>
        </div>

        <div class="row">
          <div class="form-grpup col-md-6">
            <label for="email">
              Email
              <span class="text-danger">*</span>
            </label>
            <input
              type="email"
              aria-required="true"
              name="email"
              v-model="community.email"
              class="form-control required email"
              placeholder="Enter your email"
              required
            />
            <small
              class="text-danger"
              v-if="validationErrors.email"
              v-text="validationErrors.email"
            ></small>
          </div>

          <div class="form-grpup col-md-6">
            <label for="industry">
              Industry
              <span class="text-danger">*</span>
            </label>
            <select name="industry_id" class="form-control required industry" v-model="community.industry_id" required>
              <option :value="null">Select an industry</option>
              <option
                v-for="industry in industries"
                :key="industry.id"
                :value="industry.id"
                v-text="industry.name"
              ></option>
            </select>
            <small
              class="text-danger"
              v-if="validationErrors.industry_id"
              v-text="validationErrors.industry_id"
            ></small>
          </div>
        </div>

        <div class="form-grooup m-t-20 text-center">
          <button
            class="btn btn-lg"
            type="submit"
            :disabled="communityRequestSubmitting"
            @click.prevent="submitCommunityRequest()"
          >
            <span v-if="communityRequestSubmitting">Submitting...</span>
            <span v-else>JOIN</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import formMixin from "@/mixins/forms";

export default {
  created() {
    this.getIndustries();
  },
  data: () => ({
    community: {
      name: "",
      company_name: "",
      email: "",
      industry_id: null,
      nigerian_state_id: null
    },
    communityRequestSuccessMessage: null,
    communityRequestSubmitting: false,
    industries: [],
    validationErrors: {}
  }),
  methods: {
    async getIndustries() {
      const response = await axios.get(
        process.env.BOOKING_API_URL + "/industries"
      );
      this.industries = response.data.data;
    },
    async submitCommunityRequest() {
      if (!this.validateForm("community-subscription")) return false;

      this.communityRequestSubmitting = true;

      try {
        const response = await axios.post(
          process.env.BOOKING_API_URL + "/community-membership",
          this.community
        );
        if (!response.data.status == true) return false;
        this.communityRequestSubmitting = false;
        this.communityRequestSuccessMessage =
          "Thank you for subscribing to our community. We are glad to have you on board!";
        this.community = {
          name: null,
          email: null,
          location: null,
          industry_id: null,
          nigerian_state_id: null
        };
      } catch (error) {
        console.log(error);
        this.communityRequestSubmitting = false;
      }
    }
  },
  mixins: [formMixin]
};
</script>