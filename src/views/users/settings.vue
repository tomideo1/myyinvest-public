<template>
  <div>
    <h4 class="ft-16 font-weight-normal p-4 ">Change Password</h4>
    <section class="m-lg-3 p-lg-3">
      <!-- <main-card class="form-border p-4"> -->
      <main-card class="form-border change-password">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <main-input type="password" class="col-md-12" label="Password" v-model="password" />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <main-input type="password" class="col-md-12" label="Confirm Password" v-model="confirm_password" />
            </div>
          </div>
        </div>
        <main-button :disable="isLoading" @click="changePassword" :text="changePasswordText" type="filled" class="float-right" />
      </main-card>
    </section>

    <!-- <h4 class="ft-16 font-weight-normal p-4 ">Upload Profile Image</h4> -->
    <h4 class="ft-16 font-weight-normal p-4" style="margin-top: 1.5em !important;">Upload Profile Image</h4>
    <section class="m-lg-3 p-lg-3">
      <main-card class="form-border p-4 upl-image">
        <div class="container-fluid ">
          <div class="control-group file-upload" id="file-upload1">
            <div class="image-box ">
              <div class="content">
                <div v-if="!preview">
                  <main-icon name="camera" size="retain" />
                  <p class="text-black mt-4 text-center">No Image</p>
                </div>
                <img class="img-fluid" v-if="preview" :src="preview" alt="" />
              </div>
            </div>
            <!-- <label class="btn btn-block btn-sm btn-filled mt-3 col-md-4"> -->
            <label class="btn btn-block btn-filled mt-3 col-md-4 upl-image__select-btn">
              <span>
                <main-icon name="attachment" class="mr-2" size="sm" />
                Select Image
              </span>
              <input type="file" @change="onFileChange" />
            </label>
          </div>
        </div>
        <main-button @click="uploadImage" :disable="isLoading" :text="profileImageText" type="filled" class="float-right mt-3" />
      </main-card>
    </section>
  </div>
</template>

<script>
import MainCard from "../../components/Shared/mainCard";
import mainInput from "../../components/form/mainInput";
import MainButton from "../../components/form/MainButton";
import MainIcon from "../../components/Shared/mainIcon";
import { mapActions } from "vuex";
import validations from "@/mixins/validations";
import notify from "@/mixins/notify";
export default {
  mixins: [validations, notify],
  name: "settings.vue",
  data() {
    return {
      changePasswordText: "Change",
      profileImageText: "Upload",
      isLoading: false,
      preview: null,
      image: null,
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["uploadUserAvatar", "changeUserPassword"]),
    onFileChange(e) {
      let input = e.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = e => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },

    async changePassword() {
      try {
        const data = {
          password: this.password,
          confirm_password: this.confirm_password
        };
        if (!this.handleValidation(data)) {
          return;
        }
        this.changePasswordText = "loading..";
        this.isLoading = true;
        let res = await this.changeUserPassword(data);
        if (res.status === 200 || res.status === 201) {
          this.profileImageText = "Change";
          this.isLoading = false;

          this.handleNotify({
            message: "Password changed succesfully",
            status: "Success"
          });
        } else {
          this.profileImageText = "Change";
          this.isLoading = false;
          this.handleNotify({
            message: res.data.message,
            status: "Error"
          });
        }
      } catch (e) {
        this.profileImageText = "Change";
        this.isLoading = false;
        this.handleNotify({
          message: e,
          status: "Error"
        });
      }
    },
    async uploadImage() {
      try {
        this.isLoading = true;
        this.profileImageText = "loading..";
        const imageFormData = new FormData();
        imageFormData.append("image", this.image);
        let res = await this.uploadUserAvatar(imageFormData);
        if (res.status && (res.status === 200 || res.status === 201)) {
          this.profileImageText = "Upload";
          this.isLoading = false;
          console.log(res.data.message);
          this.handleNotify({
            message: res.data.message,
            status: "Success"
          });
        } else {
          this.profileImageText = "Upload";
          this.isLoading = false;
          this.handleNotify({
            message: res.data.message,
            status: "Error"
          });
        }
      } catch (e) {
        this.profileImageText = "Upload";
        this.isLoading = false;
        this.handleNotify({
          message: "Something went wrong",
          status: "Error"
        });
      }
    }
  },

  components: { MainIcon, MainButton, MainCard, mainInput }
};
</script>

<style scoped lang="scss">
.form-border {
  border: 1px solid color(main-red) !important;
}

.change-password {
  padding: 2em;

  @include breakpoint(mobile-only) {
    padding: 1.5em 0;

    button {
      margin-right: 1.25em;
    }
  }
}

.file-upload {
  .image-box {
    // height: 250px;
    // width: 250px;
    height: 15.5rem;
    width: 15.5rem;
    cursor: pointer;
    position: relative;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='black' stroke-width='3' stroke-dasharray='6%2c 24' stroke-dashoffset='49' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 23px;
    /*img {*/
    /*  height: 100%;*/
    /*}*/

    p {
      color: #fff;
    }
  }

  .content {
    /* Center vertically and horizontally */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input[type="file"] {
    display: none;
  }

  button,
  .btn {
    font-family: fonts(main-poppins), serif;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    border: 1px solid color(main-red);
    font-size: 0.9rem;
    font-weight: normal;
    cursor: pointer !important;
    outline: none;
    position: relative;

    &.btn-filled {
      color: color(bv-white);
      background-color: color(main-red);
      border: 1px solid color(main-red);
      &:hover {
        background-color: darken(color(main-red), 5%);
        border-color: darken(color(main-red), 5%);
      }
    }
  }
}

.upl-image {
  @include breakpoint(mobile-only) {
    display: flex;
    align-items: center;
  }

  &__select-btn {
    max-width: 15.5rem;
    padding: 0.55em 0.25em !important;
  }
}
</style>
