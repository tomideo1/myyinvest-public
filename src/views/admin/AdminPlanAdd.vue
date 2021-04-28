<template>
  <section class="main-wrapper">
    <div class="plan_header">
      <h1 class="main-title">Existing Plans</h1>
      <button>Add Plan</button>
    </div>

    <section class="available-plans">
      <div class="plan_image income-image">
        <div class="plan-title">Income Plan</div>
      </div>

      <div class="plan_image rental-image">
        <div class="plan-title">Rental Plan</div>
      </div>

      <div class="plan_image special-image">
        <div class="plan-title">Special Plan</div>
      </div>
    </section>

    <section class="form-section">
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
      </article>
    </section>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-form.css";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlanIncomeAdd",

  metaInfo: {
    title: "Myyinvest - Plan > Add Plan (Admin)",
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

      submitStatus: null,
      validForm1: true,
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
    }
  }
};
</script>

<style scoped>
.plan_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan_header button {
  padding: 7.5px 75px;
  font-weight: 600 !important;
  border: 2px solid transparent;
  transition: all 0.5 ease;
}

.plan_header button:hover {
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
  transform: scale(1.02);
}

.available-plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--base-size);
  /* margin: 0 auto; */
}

.plan_image {
  position: relative;
  width: 300px;
  height: 230px;
  border-radius: var(--base-size);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  -webkit-background-origin: border-box;
  -moz-background-origin: border-box;
  background-position: 0 0;
  /* z-index: -1; */
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
}

.plan_image.income-image {
  background-image: url("../../assets/admin/images/income-plan.jpg");
}

.plan_image.rental-image {
  background-image: url("../../assets/admin/images/rental-plan.jpg");
}

.plan_image.special-image {
  background-image: url("../../assets/admin/images/special-plan.jpg");
}

.plan-title {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: fit-content;
  width: -moz-fit-content;
  width: max-content;
  font-size: var(--font-xxl);
  font-weight: 600;
  transform: translate(-50%, -50%);
}

.form-section {
  margin-top: calc(3 * var(--base-size));
}
</style>
