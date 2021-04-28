<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm1 ? 'invalid-form' : '', 'plan_form-area add-form']" @submit.prevent="submitFormPlan">
        <p class="add-project">Add Plan</p>
        <section class="add-form-wrapper">
          <div>
            <fieldset class="input-grp">
              <label for="plan_name">Name of Plan</label>
              <input type="text" id="plan_name" placeholder="Name of Plan" minlength="3" required v-model.trim.lazy="formPlan.planName" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="p_returns">Returns</label>
              <input type="text" id="p_returns" placeholder="Returns" minlength="3" required v-model.trim.lazy="formPlan.retturns" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="investment_purpose">Investment Purpose</label>
              <input type="text" id="investment_purpose" placeholder="Investment Purpose" minlength="3" required v-model.trim.lazy="formPlan.investPurpose" />
            </fieldset>
          </div>

          <div>
            <fieldset class="input-grp">
              <label for="gov_body">Governance Body</label>
              <input type="text" id="gov_body" placeholder="Governance Body" minlength="3" required v-model.trim.lazy="formPlan.govBody" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="min_investment">Minimum Investment</label>
              <input type="text" id="min_investment" placeholder="Minimum Investment" minlength="3" required v-model.trim.lazy="formPlan.minInvestment" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="holding_period">Holding Period</label>
              <input type="text" id="holding_period" placeholder="Holding Period" minlength="3" required v-model.trim.lazy="formPlan.holdingPeriod" />
            </fieldset>
          </div>

          <div>
            <fieldset class="input-grp">
              <label for="document1">Document 1</label>
              <input type="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="document1" required />
            </fieldset>

            <fieldset class="input-grp">
              <label for="document2">Document 2</label>
              <input type="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="document2" required />
            </fieldset>

            <fieldset class="input-grp">
              <label for="upload-image">Upload Image</label>
              <input type="file" accept="image/*" id="upload-image" required @change="formPlan.image" />
            </fieldset>
          </div>
        </section>

        <section>
          <fieldset class="input-grp">
            <label for="about">About</label>
            <textarea name="" id="about" placeholder="About" cols="30" rows="10" minlength="3" required v-model.trim.lazy="formPlan.about"></textarea>
          </fieldset>
        </section>

        <div class="submit-area">
          <p class="warning" v-if="!validForm1">Kindly fill the form correctly.</p>
          <button class="submit" type="submit" @click.prevent="submitFormPlan" :disabled="submitStatus === 'PENDING'">{{ btnMsg }}</button>
        </div>
      </form>

      <form :class="[!validForm2 ? 'invalid-form' : '', 'plan_form-area add-form']" @submit.prevent="submitFormProject">
        <section>
          <p class="add-project">Add Project</p>

          <div class="plan_add-project">
            <div>
              <fieldset class="input-grp">
                <label for="project_name">Project Name</label>
                <input type="text" id="project_name" placeholder="Project Name" minlength="3" required v-model.trim.lazy="formProject.projectName" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="plan_name">Start Date</label>
                <input type="text" id="plan_name" placeholder="Start Date" minlength="3" required v-model.trim.lazy="formProject.startDate" />
              </fieldset>
            </div>

            <div>
              <fieldset class="input-grp">
                <label for="plan_name">ROI</label>
                <input type="text" id="plan_name" placeholder="ROI" minlength="3" required v-model.trim.lazy="formProject.roi" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="plan_name">End Date</label>
                <input type="text" id="plan_name" placeholder="End Date" minlength="3" required v-model.trim.lazy="formProject.endDate" />
              </fieldset>
            </div>

            <div class="large-grid">
              <fieldset class="input-grp">
                <label for="plan_name">Holding Period</label>
                <input type="text" id="plan_name" placeholder="Holding Period" minlength="3" required v-model.trim.lazy="formProject.holdingPeriod" />
              </fieldset>
            </div>
          </div>
        </section>

        <div class="submit-area">
          <p class="warning" v-if="!validForm2">Kindly fill the form correctly.</p>
          <button class="submit" type="submit" @click.prevent="submitFormProject" :disabled="submitStatus === 'PENDING'">{{ btnMsg }}</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlanSpecialAdd",

  metaInfo: {
    title: "Myyinvest - Plan > Add Special (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      formPlan: {
        planName: "",
        returns: "",
        investPurpose: "",
        govBody: "",
        minInvestment: "",
        holdingPeriod: "",
        about: "",
        image: "",
        doc1: "",
        doc2: ""
      },

      formProject: {
        projectName: "",
        startDate: "",
        endDate: "",
        roi: "",
        holdingPeriod: ""
      },

      submitStatus: null,
      validForm1: true,
      validForm2: true,
      btnMsg: "ADD"
    };
  },

  validations: {
    formPlan: {
      planName: {
        required
      },

      returns: {
        required
      },

      investPurpose: {
        required
      },

      govBody: {
        required
      },

      minInvestment: {
        required
      },

      holdingPeriod: {
        required
      },

      about: {
        required
      },

      image: {
        required
      },

      doc1: {
        required
      },

      doc2: {
        required
      }
    },

    formProject: {
      projectName: {
        required
      },

      startDate: {
        required
      },

      endDate: {
        required
      },

      roi: {
        required
      },

      holdingPeriod: {
        required
      }
    }
  },

  methods: {
    submitFormPlan() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm1 = false;

        setTimeout(() => {
          this.validForm1 = true;
        }, 2000);
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.btn_msg = "SUBMITTING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },

    submitFormProject() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm2 = false;

        setTimeout(() => {
          this.validForm2 = true;
        }, 2000);
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.btn_msg = "SUBMITTING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.add-project:first-child {
  margin-bottom: 0 !important;
}
</style>
