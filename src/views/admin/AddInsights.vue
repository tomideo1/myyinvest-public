<template>
  <the-admin-layout>
    <form class="wrapper">
      <div class="left-area">
        <fieldset class="input-grp">
          <legend>Post Title</legend>
          <input type="text" id="ptitle" placeholder="How to invest in Real Estates Seamlessly" />
        </fieldset>

        <fieldset class="input-grp">
          <legend>Post Author</legend>
          <input type="text" id="pauthor" placeholder="Valentine Offiah" />
        </fieldset>

        <fieldset class="input-grp">
          <legend>Post Tags</legend>
          <input type="text" id="ptags" placeholder="Investments, Finance, Money, Real Estates" />
        </fieldset>

        <fieldset class="input-grp">
          <legend>Post Status</legend>
          <select name="" id="pstatus">
            <option key="category.value" value="category.value">Option</option>
          </select>
        </fieldset>

        <fieldset class="input-grp">
          <legend>Post Category</legend>
          <select name="" id="pcategory">
            <option key="category.value" value="category.value">Option</option>
          </select>
        </fieldset>
      </div>
      <div class="right-area">
        <div class="upload">
          <div class="upload-window">
            <svg width="56" height="49" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#6b6a6a">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="49">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M55.018 12.807v30.75a5.127 5.127 0 0 1-5.125 5.126H5.475A5.126 5.126 0 0 1 .35 43.558V12.807a5.125 5.125 0 0 1 5.125-5.125h9.396l1.313-3.513A5.119 5.119 0 0 1 20.978.848h13.4a5.118 5.118 0 0 1 4.795 3.32l1.324 3.514h9.396a5.126 5.126 0 0 1 5.125 5.125zM40.497 28.182c0-7.068-5.745-12.813-12.813-12.813-7.07 0-12.813 5.745-12.813 12.813 0 7.069 5.744 12.813 12.813 12.813 7.068 0 12.813-5.744 12.813-12.813zm-3.417 0c0 5.179-4.218 9.396-9.396 9.396-5.18 0-9.396-4.217-9.396-9.396 0-5.178 4.217-9.396 9.396-9.396 5.178 0 9.396 4.218 9.396 9.396z"
                />
              </svg>
            </svg>
          </div>
          <input type="image" src="" alt="Select Image" />
        </div>

        <fieldset class="input-grp pcontent">
          <legend>Post Content</legend>
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
export default {};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  /* grid-template-columns: repeat(2, 50%); */
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
  /* border: 1px solid red; */
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

*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

/* option:hover {
  padding: 5px;
  background-color: var(--myyinvest-red-fade);
} */

.upload {
  width: 150px;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
}

.upload-window {
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
}

.upload input,
button {
  margin-top: 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

.upload input {
  background-image: url("/assets/admin/icons/clip.svg");
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
