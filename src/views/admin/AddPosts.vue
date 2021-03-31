<template>
  <the-admin-layout>
    <form class="wrapper">
      <fieldset class="input-grp">
        <legend>Post Name</legend>
        <input type="text" id="pname" placeholder="How to buy tokens in Myyinvest" />
      </fieldset>

      <fieldset class="input-grp">
        <legend>Written by</legend>
        <input type="text" id="pauthor" placeholder="Valentine Offiah" />
      </fieldset>

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
    </form>
  </the-admin-layout>
</template>

<script>
export default {};
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
  /* 200px */
  /* border: 1px solid var(--myyinvest-red-fade); */
}

fieldset {
  width: 100%;
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
  /* float: right !important; */
  margin-top: 10px;
  padding: 5px 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>
