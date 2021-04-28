<template>
  <form :class="[!validForm ? 'invalid-form' : '', '']" @submit.prevent="submit">
    <div class="section-wrapper">
      <div class="left-area">
        <fieldset class="input-grp">
          <legend><label for="ptitle">Post Title</label></legend>
          <input type="text" id="ptitle" placeholder="How to invest in Real Estates Seamlessly" minlength="3" required v-model.trim.lazy="post_title" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pauthor">Post Author</label></legend>
          <input type="text" id="pauthor" placeholder="Valentine Offiah" minlength="3" required v-model.trim.lazy="post_author" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="ptags">Post Tags</label></legend>
          <input type="text" id="ptags" placeholder="Investments, Finance, Money, Real Estates" minlength="3" required v-model.trim.lazy="post_tags" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pstatus">Post Status</label></legend>
          <div class="dropdown-wrap">
            <div class="dropdown">
              <div class="dropbtn">{{ selectedPostStatus || "Category" }} <img src="@/assets/admin/icons/caret-down.svg" /></div>
              <div class="dropdown-content" :style="[selectedPS === true ? { display: 'none' } : '']">
                <div class="option" v-for="(option, index) in postStatuses" :key="index" @click="newPostStatus(option.name)">{{ option.name }}</div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pcategory">Post Category</label></legend>
          <div class="dropdown-wrap">
            <div class="dropdown">
              <div class="dropbtn">{{ selectedCategory || "Category" }} <img src="@/assets/admin/icons/caret-down.svg" /></div>
              <div class="dropdown-content" :style="[selectedC === true ? { display: 'none' } : '']">
                <div class="option" v-for="(option, index) in categories" :key="index" @click="newCategory(option.name)">{{ option.name }}</div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="right-area">
        <div class="upload">
          <div class="upload-window">
            <img :src="post_imgURL || require('@/assets/admin/icons/camera.svg')" alt="User Image Preview" class="img-fluid" />
          </div>

          <div class="file-input">
            <input type="file" accept="image/*" id="file" class="file" required @change="updateFilename" />
            <label for="file">
              <img src="@/assets/admin/icons/clip.svg" />
              Select file
            </label>

            <p class="file-name">{{ selectedFilename }}</p>
          </div>
        </div>

        <fieldset class="input-grp pcontent">
          <legend><label for="pcontent">Post Content</label></legend>
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
      </div>
    </div>

    <div class="submit-area">
      <p class="warning" v-if="!validForm">Kindly fill the form correctly.</p>
      <button class="submit" type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">{{ btn_msg }}</button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminInsightAdd",

  metaInfo: {
    title: "Myyinvest - Add Insights (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      post_title: "",
      post_author: "",
      post_tags: [],
      post_content: "",

      selectedPostStatus: "",
      selectedPS: false,
      postStatuses: [
        {
          name: "Published"
        },
        {
          name: "Unpublished"
        },
        {
          name: "Scheduled / Delayed"
        }
      ],

      selectedCategory: "",
      selectedC: false,
      categories: [
        {
          name: "News"
        },
        {
          name: "Blog"
        },
        {
          name: "Research"
        }
      ],

      post_imgURL: "",
      selectedFilename: "No file selected",

      submitStatus: null,
      validForm: true,
      btn_msg: "SUBMIT"
    };
  },

  validations: {
    post_title: {
      required
    },

    post_author: {
      required
    },

    post_tags: {
      required
    },

    post_content: {
      required
    },

    selectedPostStatus: {
      required
    },

    selectedCategory: {
      required
    },

    post_imgURL: {
      required
    }
  },

  methods: {
    newPostStatus(val) {
      this.selectedPostStatus = val;
      this.selectedPS = true;

      setTimeout(() => {
        this.selectedPS = false;
      }, 500);
    },

    newCategory(val) {
      this.selectedCategory = val;
      this.selectedC = true;

      setTimeout(() => {
        this.selectedC = false;
      }, 500);
    },

    updateFilename(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename = fileNameAndSize;

        const reader = new FileReader();
        reader.onload = e => {
          this.post_imgURL = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
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
  grid-template-columns: 2fr 3fr;
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

.pcontent {
  width: 100%;
  height: 300px;
  margin-top: var(--base-size);
}

.pcontent input {
  height: 100%;
}

.upload {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding-bottom: 10px;
}

.upload-window {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  object-fit: contain;
}

.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input {
  position: relative;
}

.file-input label {
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

input:hover + label,
input:focus + label {
  transform: scale(1.02);
}

.file-input label img {
  height: 15px;
  padding-right: 10px;
}

.file-name {
  font-size: var(--font-sm) !important;
  color: #555;
}

.submit-area {
  position: relative;
  display: flex;
}

/* p {
  position: absolute;
  color: var(--myyinvest-danger);
}

.submit-area p {
  text-align: center;
  width: 100%;
  font-size: 14px !important;
}

button {
  width: 50%;
  margin: 30px auto;
  padding: 10px;
  transition: transform 0.2s ease-out;
}

.submit-area button:hover {
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transform: scale(1.02);
} */
</style>
