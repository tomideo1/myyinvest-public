<template>
  <form :class="[!validForm ? 'invalid-form' : '', '']" @submit.prevent="submit">
    <div class="section-wrapper">
      <section>
        <fieldset class="input-grp">
          <legend><label for="pname">Question</label></legend>
          <input type="text" id="pname" placeholder="How to buy tokens in Myyinvest" minlength="3" required v-model.trim.lazy="post_name" />
        </fieldset>

        <fieldset class="input-grp pcontent">
          <legend><label for="pcontent">Answer</label></legend>
          <textarea
            name=""
            id="pcontent"
            placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore fugit quibusdam praesentium molestiae debitis autem fugiat iure ratione voluptas fuga, consequuntur dignissimos minima, veniam dolorum! Debitis quae officiis et sint."
            cols="30"
            rows="10"
            minlength="3"
            required
            v-model.trim.lazy="post_content"
          ></textarea>
        </fieldset>
      </section>

      <section>
        <fieldset class="input-grp">
          <legend><label for="pcategory">Post Category</label></legend>
          <div class="dropdown-wrap">
            <div class="dropdown">
              <div class="dropbtn">{{ selectedCategory || "Category" }} <img src="@/assets/admin/icons/caret-down.svg" /></div>
              <div class="dropdown-content" :style="[selected === true ? { display: 'none' } : '']">
                <div class="option" v-for="(option, index) in categories" :key="index" @click="newCategory(option.name)">{{ option.name }}</div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pauthor">Written by</label></legend>
          <input type="text" id="pauthor" placeholder="Valentine Offiah" minlength="3" required v-model.trim.lazy="post_author" />
        </fieldset>
      </section>
    </div>

    <div class="submit-area">
      <p v-if="!validForm">Kindly fill the form correctly.</p>
      <button type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">{{ btn_msg }}</button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddAdminFaqs",

  metaInfo: {
    title: "Myyinvest - Add FAQs (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      post_name: "",
      post_author: "",
      selectedCategory: "",
      post_content: "",
      selected: false,
      categories: [
        {
          name: "General"
        },
        {
          name: "Investment"
        },
        {
          name: "Payment"
        },
        {
          name: "Security"
        }
      ],

      submitStatus: null,
      validForm: true,
      btn_msg: "SUBMIT"
    };
  },

  validations: {
    post_name: {
      required
    },

    post_author: {
      required
    },

    selectedCategory: {
      required
    },

    post_content: {
      required
    }
  },

  methods: {
    newCategory(val) {
      this.selectedCategory = val;
      this.selected = true;

      setTimeout(() => {
        this.selected = false;
      }, 500);
    },

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
.section-wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 120px;
}

.submit-area {
  position: relative;
  display: flex;
}

p {
  position: absolute;
  width: 100%;
  font-size: 14px !important;
  color: var(--myyinvest-danger);
  text-align: center;
}

button {
  width: 50%;
  margin: 50px auto;
  padding: 10px;
}
</style>
