<template>
  <form :class="[!validForm ? 'invalid-form' : '', 'wrapper']" @submit.prevent="submit">
    <fieldset class="input-grp">
      <legend><label for="pname">Post Name</label></legend>
      <input type="text" id="pname" placeholder="How to buy tokens in Myyinvest" minlength="3" required v-model.trim.lazy="post_name" />
    </fieldset>

    <fieldset class="input-grp">
      <legend><label for="precepient">Recipient</label></legend>
      <div class="dropdown-wrap">
        <div class="dropdown">
          <div class="dropbtn">{{ selectedProject || "Category" }} <img src="@/assets/admin/icons/caret-down.svg" /></div>
          <div class="dropdown-content" :style="[selected === true ? { display: 'none' } : '']">
            <div class="option" v-for="(option, index) in newProjectNames" :key="index" @click="newProjectName(option.name)">{{ option.name }}</div>
          </div>
        </div>
      </div>
    </fieldset>

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

        <p class="file-name">{{ selectedFilename || "No file selected" }}</p>
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
        required
        v-model.trim.lazy="post_content"
      ></textarea>
    </fieldset>

    <p v-if="!validForm">Kindly fill the form correctly.</p>
    <button type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">{{ btn_msg }}</button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddAdminNotification",

  metaInfo: {
    title: "Myyinvest - Add Notifications (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      post_name: "",
      post_content: "",

      selectedProject: "",
      selected: false,
      newProjectNames: [
        {
          name: "General"
        },
        {
          name: "Income Plan for 6 months"
        },
        {
          name: "Income plan 12 months"
        },
        {
          name: "Rental Plan"
        },
        {
          name: "Special Plan"
        }
      ],

      post_imgURL: "",
      selectedFilename: "",

      submitStatus: null,
      validForm: true,
      btn_msg: "SUBMIT"
    };
  },

  validations: {
    post_name: {
      required
    },

    post_imgURL: {
      required
    },

    post_content: {
      required
    },

    selectedProject: {
      required
    }
  },

  methods: {
    newProjectName(val) {
      this.selectedProject = val;
      this.selected = true;

      setTimeout(() => {
        this.selected = false;
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: var(--base-size) auto 0;
}

.image-upload-wrapper,
fieldset:not(:last-child) {
  margin-bottom: var(--base-size);
}

.dropdown-content {
  width: 200px;
}

.upload {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
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
  font-size: var(--font-normal) !important;
  color: #555;
}

p {
  font-size: 14px !important;
  color: var(--myyinvest-danger);
}

button {
  padding: 10px calc(3 * var(--base-size));
}
</style>
