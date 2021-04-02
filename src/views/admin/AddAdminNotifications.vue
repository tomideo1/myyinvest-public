<template>
  <the-admin-layout>
    <form class="wrapper">
      <fieldset class="input-grp">
        <legend><label for="pname">Post Name</label></legend>
        <input type="text" id="pname" placeholder="How to buy tokens in Myyinvest" />
      </fieldset>

      <fieldset class="input-grp">
        <legend><label for="precepient">Written by</label></legend>
        <input type="text" id="precepient" placeholder="Project One" />
      </fieldset>

      <div class="dropdown-wrap">
        <div class="dropdown">
          <button class="dropbtn">{{ selectedCategory || "Category" }} <img src="@/assets/admin/icons/chevron-down.svg" alt="Dropdown" /></button>
          <div class="dropdown-content">
            <div class="option" v-for="(option, index) in categories" :key="index" @click="newCategory(option.name)">{{ option.name }}</div>
          </div>
        </div>
      </div>

      <div class="upload">
        <div class="upload-window">
          <img src="@/assets/admin/icons/camera.svg" alt="User Image Preview" />
        </div>
        <input type="file" name="" id="" />
      </div>

      <fieldset class="input-grp pcontent">
        <legend><label for="pcontent">Post Content</label></legend>
        <textarea
          name=""
          id="pcontent"
          placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore fugit quibusdam praesentium molestiae debitis autem fugiat iure ratione voluptas fuga, consequuntur dignissimos minima, veniam dolorum! Debitis quae officiis et sint."
          cols="30"
          rows="10"
        ></textarea>
      </fieldset>
      <button>SUBMIT</button>
    </form>
  </the-admin-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Myyinvest - Add Notifications (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      selectedCategory: "",
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
      ]
    };
  },

  methods: {
    newCategory(val) {
      this.selectedCategory = val;
      alert(val);
    }
  }
};
</script>

<style scoped>
*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: var(--base-size) auto 0;
  padding: 1px;
  scrollbar-width: none;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

fieldset {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--myyinvest-red-fade);
  border-radius: 5px;
  stroke-opacity: 0.5;
}

.image-upload-wrapper,
fieldset:not(:last-child) {
  margin-bottom: var(--base-size);
}

fieldset:not(:first-child) {
  margin-top: var(--base-size);
}

legend {
  width: fit-content;
  width: -moz-fit-content;
  width: max-content;
  padding: 0 5px;
  font-size: var(--font-normal);
}

label {
  display: inline-block;
  margin-bottom: 0;
}

input,
select,
textarea {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px;
  font-size: var(--font-md);
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
  -moz-appearance: none;
  -webkit-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
}

textarea {
  height: 200px;
}

input:hover:not(.upload input),
input:focus:not(.upload input),
select:hover,
select:focus,
textarea:hover,
textarea:focus {
  border-color: var(--myyinvest-red-fade);
  outline: none;
}

input,
select::-ms-expand {
  display: none;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
  border: 1px solid transparent;
  border-radius: 5px;
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
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  object-fit: contain;
}

.upload input {
  width: 150px;
  margin-top: 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

.dropdown-wrap {
  width: 100%;
  margin-bottom: var(--base-size);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  margin: 0;
  padding: 5px 10px;
  color: black !important;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 50%;
  left: 100%;
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

.dropdown:hover .dropbtn {
  border-color: var(--myyinvest-red);
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}
</style>
