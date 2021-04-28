<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm ? 'invalid-form' : '', '']" @submit.prevent="submit">
        <section class="plan_form-area view-form">
          <div class="plan_image income-image">
            <div class="plan-title">Income Plan</div>
          </div>

          <div class="plan_inputs-group">
            <div>
              <fieldset class="input-grp">
                <label for="min_investment">Minimum Investment</label>
                <input type="text" id="min_investment" placeholder="Minimum Investment" minlength="3" required v-model.trim.lazy="minInvestment" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="holding_period">Holding/Ownership Period</label>
                <input type="text" id="holding_period" placeholder="Holding/Ownership Period" minlength="3" required v-model.trim.lazy="holdingPeriod" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="gov_body">Governance Body</label>
                <input type="text" id="gov_body" placeholder="Governance Body" minlength="3" required v-model.trim.lazy="govBody" />
              </fieldset>
            </div>

            <div>
              <fieldset class="input-grp plan_view">
                <label for="document1">Document 1</label>
                <input
                  type="file"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  id="document1"
                  class="custom-file_upload"
                  placeholder="Document 1"
                  minlength="3"
                  required
                  @change="updateFilename1"
                />
                <label for="document1" class="custom-file_label">
                  <img src="@/assets/admin/icons/image.svg" alt="Image icon" />
                  <span class="file-name">{{ selectedFilename1 }}</span>
                </label>
              </fieldset>

              <fieldset class="input-grp plan_view">
                <label for="document2">Document 2</label>
                <input
                  type="file"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  id="document2"
                  class="custom-file_upload"
                  placeholder="Document 2"
                  minlength="3"
                  required
                  @change="updateFilename2"
                />
                <label for="document2" class="custom-file_label">
                  <img src="@/assets/admin/icons/image.svg" alt="Image icon" />
                  <span class="file-name">{{ selectedFilename2 }}</span>
                </label>
              </fieldset>

              <fieldset class="input-grp">
                <label for="p_returns">Returns</label>
                <input type="text" id="p_returns" placeholder="Returns" minlength="3" required v-model.trim.lazy="pReturns" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="investment_purpose">Investment Purpose</label>
                <input type="text" id="investment_purpose" placeholder="Investment Purpose" minlength="3" required v-model.trim.lazy="investmentPurpose" />
              </fieldset>
            </div>
          </div>
        </section>

        <section class="plan_form-area view-form">
          <div></div>
          <div>
            <fieldset class="input-grp">
              <label for="about">About</label>
              <textarea name="" id="about" placeholder="About" cols="30" rows="10" minlength="3" required v-model.trim.lazy="about"></textarea>
            </fieldset>

            <div class="submit-area">
              <p class="warning" v-if="!validForm">Kindly fill the form correctly.</p>
              <button class="submit" type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">{{ btnMsg }}</button>
            </div>
          </div>
        </section>
      </form>
    </article>

    <article class="new-table">
      <p class="new-title">Projects</p>
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="project-name">Name of Project</div>
          <div class="roi">ROI</div>
          <div class="holding-period">Holding Period</div>
          <div class="project-start">Start Date</div>
          <div class="project-end">End Date</div>
          <div class="tokens-count">Number of Tokens</div>
          <div class="options"></div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="project-name">John Doe</div>
          <div class="roi">₦70000</div>
          <div class="holding-period">5</div>
          <div class="project-start">Project {{ x }}</div>
          <div class="project-end">1 year</div>
          <div class="tokens-count">Once</div>
          <div class="options">
            <img src="@/assets/admin/icons/edit-alt.svg" alt="Edit Icon" />
            <img src="@/assets/admin/icons/trash-alt.svg" alt="Delete Icon" />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-form.css";
import "@/assets/admin/styles/new-table.css";

import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlanIncomeView",

  metaInfo: {
    title: "Myyinvest - Plan > View Income (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      minInvestment: "",
      holdingPeriod: "",
      govBody: "",
      // updateFilename1: "",
      // updateFilename2: "",
      pReturns: "",
      investmentPurpose: "",
      about: "",

      selectedFilename: "No file selected",
      selectedFilename1: "No file selected",
      selectedFilename2: "No file selected",

      submitStatus: null,
      validForm: true,
      btnMsg: "ADD"
    };
  },

  validations: {
    minInvestment: {
      required
    },

    holdingPeriod: {
      required
    },

    govBody: {
      required
    },

    updateFilename1: {
      required
    },

    updateFilename2: {
      required
    },

    pReturns: {
      required
    },

    investmentPurpose: {
      required
    },

    about: {
      required
    }
  },

  methods: {
    updateFilename1(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename1 = fileNameAndSize;
      }
    },

    updateFilename2(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename2 = fileNameAndSize;
      }
    },

    // async updateFilename1() {
    //   try {
    //     await this.updateFilename();
    //     // this.selectedFilename1 = this.newFilename;
    //     alert("Hello");
    //   } catch (e) {
    //     alert(e);
    //   }
    // },

    submit() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm = false;

        setTimeout(() => {
          this.validForm = true;
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
.plan_image.income-image {
  background-image: url("../../assets/admin/images/income-plan.jpg");
}

.plan_view.input-grp {
  position: relative;
  /* z-index: -1; */
}

.plan_view .custom-file_upload {
  position: absolute;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  /* z-index: -1; */
}

.plan_view .custom-file_label {
  position: relative;
  width: 100%;
  /* height: 100%; */
  height: 30px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  /* z-index: -1; */
}

.custom-file_upload:hover + label,
.custom-file_upload:focus + label {
  border-color: var(--myyinvest-red);
}

.plan_view .file-name {
  font-size: var(--font-normal) !important;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 400;
}

.new-table .table-row div {
  width: 14%;
  text-align: center;
}

.table-row div.sn {
  width: 4%;
}

.table-row div.project-name {
  width: 20%;
}

.table-row div.tokens-count,
.table-row div.roi {
  width: 10%;
}
</style>
