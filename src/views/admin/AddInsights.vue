<template>
  <the-admin-layout>
    <form class="wrapper">
      <div class="left-area">
        <fieldset class="input-grp">
          <legend><label for="ptitle">Post Title</label></legend>
          <input type="text" id="ptitle" placeholder="How to invest in Real Estates Seamlessly" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pauthor">Post Author</label></legend>
          <input type="text" id="pauthor" placeholder="Valentine Offiah" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="ptags">Post Tags</label></legend>
          <input type="text" id="ptags" placeholder="Investments, Finance, Money, Real Estates" />
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pstatus">Post Status</label></legend>
          <select name="" id="pstatus">
            <option key="category.value" value="category.value">Option</option>
          </select>
        </fieldset>

        <fieldset class="input-grp">
          <legend><label for="pcategory">Post Category</label></legend>
          <select name="" id="pcategory">
            <option key="category.value" value="category.value">Option</option>
          </select>
        </fieldset>
      </div>
      <div class="right-area">
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
      </div>
    </form>
  </the-admin-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Myyinvest - Add Insights (Admin)",
    titleTemplate: null
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
  display: grid;
  grid-template-columns: 60% 40%;
  padding: var(--base-size);
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

fieldset {
  padding: 10px;
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

.upload {
  width: 150px;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
}

.upload-window {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  object-fit: contain;
}

.upload input,
button {
  margin-top: 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

.pcontent {
  width: 100%;
  height: 300px;
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
</style>
