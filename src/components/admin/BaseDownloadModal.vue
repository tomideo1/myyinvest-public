<template>
  <div :class="[!validForm ? 'invalid-form' : '', 'download-overlay']">
    <div class="download-modal">
      <p>Kindly select range</p>

      <div class="date-range">
        <label for="start-date">From</label>
        <input type="date" name="start-date" id="start-date" :min="minDate" :max="maxDate" required v-model.trim.lazy="startDate" />
        <span class="error" v-if="!$v.startDate.required">this field is required</span>
        <!-- <span class="validity" v-if="!$v.startDate.between">Can only be between {{ minDate }} and {{ maxDate }}.</span> -->
        <!-- <span class="validity" v-if="!$v.startDate.minValue">Cannot be before {{ minDate }}.</span> -->
        <!-- <span class="validity" v-if="!$v.startDate.isDate">Enter a valid date.</span> -->
        <!-- <span class="validity" v-if="!$v.startDate.$invalid">Enter a valid date.</span> -->
        <!-- <span class="validity" v-if="$v.startDate.$error">Enter a valid date.</span> -->

        <label for="end-date" class="to-date">To</label>
        <input type="date" name="end-date" id="end-date" :min="minDate" :max="maxDate" required v-model.trim.lazy="endDate" />
        <span class="error" v-if="!$v.endDate.required">this field is required</span>
        <!-- <span class="validity" v-if="!$v.endDate.between">Can only be between {{ minDate }} and {{ maxDate }}.</span>
          <span class="validity" v-if="!$v.endDate.maxValue">Cannot be beyound today.</span>
          <span class="validity" v-if="!$v.startDate.isDate">Enter a valid date.</span> -->
      </div>

      <div>
        <button @click="cancelDownload">Cancel</button>
        <button @click="proceedDownload">Proceed</button>
      </div>

      <p v-if="!validForm">Kindly fill the form correctly.</p>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    noDownloadModal: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      startDate: "",
      minDate: "2021-01-02",
      endDate: "",
      maxDate: "2022-12-31",
      submitStatus: null,
      validForm: true
    };
  },

  validations: {
    startDate: {
      required
      // between: between(this.minDate, this.maxDate)
      // minValue: minValue(this.minDate)
      // minValue: minValue => minValue > new Date().toISOString()
      // minValue: value => value > new Date().toISOString()
    },

    endDate: {
      required
      // between: between(this.minDate, this.maxDate)
      // maxValue: maxValue(this.maxDate)
      // How would one call minValue inside function?
      // min: (value, model) => model.tomorrow ? false : minValue(1)(value)
      // maxValue: minValue => minValue > new Date().toISOString()
    }
  },

  methods: {
    cancelDownload() {
      this.$emit("closeModal");
    },

    proceedDownload() {
      // alert("What next?");
      // this.$emit("pagePreview");

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
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.download-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.download-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 350px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.download-modal p {
  font-size: var(--font-sm);
  font-weight: 600;
  text-align: center;
}

.download-modal label {
  font-weight: 600;
}

.download-modal div label.to-date {
  margin-top: 10px;
}

.download-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.download-modal div.date-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.download-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.download-modal div button:hover,
.download-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

p {
  font-size: 14px !important;
  color: var(--myyinvest-danger);
}
</style>
