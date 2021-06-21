<template>
  <div class="header-options">
    <button class="download" @click="previewDownload" v-if="requireDownload() === true">Download</button>

    <base-download-modal :noDownloadModal="noDownloadModal" @closeModal="closeModal" v-if="!noDownloadModal" />

    <!-- <div class="input-grp"> -->
    <input type="text" name="search" id="search_query" placeholder="Search" />

    <div class="dropdown">
      <div class="current-option">{{ selectedOption || "Sort by" }} <img src="@/assets/admin/icons/chevron-down.svg" alt="Dropdown" /></div>
      <div class="dropdown-content" :style="[selected === true ? { display: 'none' } : '']">
        <div class="option" v-for="(option, index) in selectOptions" :key="index" @click="filterBy(option.name)">{{ option.name }}</div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import BaseDownloadModal from "@/components/admin/BaseDownloadModal.vue";
// , isDate
// import { required, minValue, maxValue, between } from "vuelidate/lib/validators";
// import { required } from "vuelidate/lib/validators";
// import BaseDownloadModal from './BaseDownloadModal.vue';

export default {
  name: "TheHeaderOptions",

  // components: { BaseDownloadModal },

  data() {
    return {
      noDownloadModal: true,
      // noUserDetails: true,
      // startDate: "",
      // minDate: "2021-01-02",
      // endDate: "",
      // maxDate: "2022-12-31",
      selectedOption: "",
      selected: false,
      selectOptions: [
        {
          name: "Sort by Date"
        },
        {
          name: "Sort A-Z"
        },
        {
          name: "Sort Z-A"
        }
      ]

      // submitStatus: null,
      // validForm: true
    };
  },

  // validations: {
  //   startDate: {
  //     required
  //     // between: between(this.minDate, this.maxDate)
  //     // minValue: minValue(this.minDate)
  //     // minValue: minValue => minValue > new Date().toISOString()
  //     // minValue: value => value > new Date().toISOString()
  //   },

  //   endDate: {
  //     required
  //     // between: between(this.minDate, this.maxDate)
  //     // maxValue: maxValue(this.maxDate)
  //     // How would one call minValue inside function?
  //     // min: (value, model) => model.tomorrow ? false : minValue(1)(value)
  //     // maxValue: minValue => minValue > new Date().toISOString()
  //   }
  // },

  methods: {
    requireDownload() {
      // const user_d = /^\/admin\/users\/[1-9][0-9]*$/gim;
      // const user_t = /^\/admin\/users\/[1-9][0-9]*\/transactions$/gim;

      const currentRoute = this.$route.fullPath;
      const routes = ["-insights", "-notifications", "-faqs"];

      // if (currentRoute.match(user_d)) {
      if (routes.some(i => currentRoute.includes(i))) {
        //   return true;
        // } else if (currentRoute.match(user_t)) {
        return false;
      } else return true;
    },

    previewDownload() {
      if (!this.$route.path.includes("/admin/users/")) {
        this.noDownloadModal = !this.noDownloadModal;
        // alert(this.$route.path)
      } else {
        this.$emit("printCurrentUser");
      }
    },

    closeModal() {
      this.noDownloadModal = !this.noDownloadModal;
    },

    // proceedDownload() {
    //   // alert("What next?");
    //   // this.$emit("pagePreview");

    //   console.log("submitting...");
    //   this.$v.$touch();
    //   if (this.$v.$invalid) {
    //     this.submitStatus = "ERROR";
    //     this.validForm = false;

    //     setTimeout(() => {
    //       this.validForm = true;
    //     }, 2000);
    //   } else {
    //     // do your submit logic here
    //     this.submitStatus = "PENDING";
    //     setTimeout(() => {
    //       this.submitStatus = "OK";
    //     }, 500);
    //   }
    // },

    filterBy(val) {
      this.selectedOption = val;
      this.selected = true;

      setTimeout(() => {
        this.selected = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.header-options {
  display: flex;
  margin-bottom: var(--base-size);
}

.header-options button.download {
  margin: 0 !important;
  padding: 5px 10px;
  color: var(--myyinvest-white);
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
}

.header-options button.download:hover,
.header-options button.download:focus {
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.header-options button.download:focus {
  outline: none;
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}

.header-options .input-grp {
  margin-left: auto;
  border: 2px solid purple;
}

input {
  margin-left: auto !important;
}

.current-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  max-width: 120px !important;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 20%;
  width: 120px;
  background-color: var(--myyinvest-white);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .option {
  display: block;
  padding: 12px 16px;
  color: black;
  text-decoration: none;
}

.dropdown-content .option:hover {
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red-fade);
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .current-option {
  border-color: var(--myyinvest-red);
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}

.header-options input {
  width: 300px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  -moz-appearance: none;
  -webkit-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
}

.header-options input:not(:first-child),
.header-options .dropdown {
  margin-left: var(--base-size);
}

.header-options input:focus {
  outline: none;
  border-color: var(--myyinvest-red);
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}
</style>
