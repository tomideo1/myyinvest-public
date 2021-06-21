<template>
  <the-admin-layout>
    <form style="overflow-y: aut" id="overflow-wrapper">
        <div class="row">
            <div class="mb-5 col-md-6">
                <fieldset class="input-grp">
                    <legend><label for="ptitle">Post Title</label></legend>
                    <input type="text" class="form-control" id="ptitle" placeholder="How to invest in Real Estates Seamlessly" />
                </fieldset>
                <fieldset class="input-grp">
                    <legend><label for="pauthor">Post Author</label></legend>
                    <input type="text" class="form-control" id="pauthor" placeholder="Valentine Offiah" />
                </fieldset>
                <fieldset class="input-grp">
                    <legend><label for="ptags">Post Tags</label></legend>
                    <input type="text" class="form-control" id="ptags" placeholder="Investments, Finance, Money, Real Estates" />
                </fieldset>
                <fieldset class="input-grp">
                    <legend><label for="pstatus">Post Status</label></legend>
                    <select name="" class="form-control" id="">
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                </fieldset>
                 <fieldset class="input-grp">
                    <legend><label for="pcategory">Post Category</label></legend>
                    <select name="" class="form-control" id="">
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                    </select>
                 </fieldset>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-8">
                        <div class="upload">
                            <div class="upload-window">
                                <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width:230px; object-fit:cover" alt="User Image Preview" class="img-fluid" />
                                <img :src="imgURL" v-else  alt="User Image Preview" class="img-fluid" />
                            </div>

                            <div class="file-input">
                                <input type="file" accept="image/*" id="file" class="file" @change="updateFilename" />
                                <label for="file">
                                Select file
                                </label>

                                <p class="file-name">{{ selectedFilename }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <fieldset class="input-grp pcontent">
                    <legend><label for="pcontent">Post Content</label></legend>
                    <textarea
                        class="form-control"
                        i="pcontent"
                        placeholder="Post Content"
                        cols="4"
                        rows="5"
                    ></textarea>
                </fieldset>
                 <button class="m-2" type="submit">Submit</button>
            </div>
        </div>
    </form>
  </the-admin-layout>
</template>

<script>
export default {
  name: "AddInsights",

  metaInfo: {
    title: "Myyinvest - Add Insights (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      selectedPostStatus: "",
      postStatuses: [
        {
          name: "Published"
        },
        {
          name: "Unpublished"
        },
        {
          name: "Scheduled/Delayed"
        }
      ],

      selectedCategory: "",
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

      imgURL: require("../../assets/admin/icons/camera.svg"),
      selectedFilename: "No file selected"
    };
  },

  methods: {
    newPostStatus(val) {
      this.selectedPostStatus = val;
      alert(val);
    },

    newCategory(val) {
      this.selectedCategory = val;
      alert(val);
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
          this.imgURL = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
};
</script>

<style scoped>
#overflow-wrapper::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#overflow-wrapper::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#overflow-wrapper::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #D62929;
}
*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

fieldset {
  padding: 5px;
  border: 1px solid var(--myyinvest-red-fade);
  border-radius: 5px;
  stroke-opacity: 0.5;
}

fieldset:not(:last-child) {
  margin-bottom: var(--base-size);
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
/* select, */
textarea {
  /* width: 100%; */
  /* height: fit-content;
  height: -moz-fit-content;
  height: max-content; */
  /* padding: 5px; */
  font-size: var(--font-md);
  /* border: 1px solid transparent; */
  /* border-radius: 5px; */
  background-color: var(--myyinvest-white);
  /* -moz-appearance: none;
  -webkit-appearance: none; */
  /* text-indent: 0.01px; */
  /* text-overflow: ""; */
}

input:hover:not(.upload input),
input:focus:not(.upload input),
/* select:hover,
select:focus, */
textarea:hover,
textarea:focus {
  border-color: var(--myyinvest-red-fade);
  outline: none;
}

button {
  margin-top: 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

.pcontent {
  max-width: 100%;
  /* height: 300px; */
  margin-top: var(--base-size);
}

.pcontent input {
  height: 100%;
}

button {
  float: right;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.dropdown-wrap {
  width: 100%;
  margin-bottom: var(--base-size);
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  margin: 0;
  padding: 5px 10px;
  color: black !important;
  border: 1px solid gray;
  border-radius: 5px;
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
  /* width: 150px; */
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

.file-name {
  font-size: var(--font-sm) !important;
  color: #555;
}
</style>
