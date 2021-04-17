<template>
  <the-admin-layout>
    <form class="wrapper">
      <div class="left-area">
        <section>
          <div class="header">Personal Details</div>
          <div class="personal-details">
            <div class="input-grp">
              <div class="input-wrap">
                <label for="fname">First Name</label>
                <input type="text" id="fname" placeholder="Valentine" />
              </div>
              <div class="input-wrap">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" placeholder="Offiah" />
              </div>
              <div class="input-wrap">
                <label for="Gender">Gender</label>
                <input type="text" id="Gender" placeholder="Male" />
              </div>
              <div class="input-wrap">
                <label for="dob">Date of Birth</label>
                <input type="text" id="dob" placeholder="13th May 1998" />
              </div>
            </div>
            <div class="input-grp">
              <div class="input-wrap">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="voffiah@gmail.com" />
              </div>
              <div class="input-wrap">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="09051843790" />
              </div>
            </div>
            <div class="input-grp">
              <div class="input-wrap">
                <label for="occupations">Occupation</label>
                <input type="text" id="occupations" placeholder="Student" />
              </div>
              <div class="input-wrap">
                <label for="state-origin">State of Origin</label>
                <input type="text" id="state-origin" placeholder="Anambra" />
              </div>
              <div class="input-wrap">
                <label for="marital-status">Marital Status</label>
                <input type="text" id="marital-status" placeholder="Single" />
              </div>
            </div>
            <div class="input-grp">
              <div class="input-wrap">
                <label for="address">Address</label>
                <input type="text" id="address" placeholder="289 Sharingan Rd. Tsukoyomi Town, Konohagakure, Land of Fire." />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="header plan">Investment Plan</div>
          <div class="investment-plan">
            <div class="input-grp investment">
              <div class="input-wrap">
                <label for="reason">What is the primary reason you are interested in investing with Myyinvest?</label>
                <input type="text" id="reason" placeholder="I want to diversify my portfolio." />
              </div>
              <div class="input-wrap">
                <label for="income-range">What is your monthly income range?</label>
                <input type="text" id="income-range" placeholder="Less than 50,000 Naira." />
              </div>
            </div>

            <div class="input-grp investment">
              <div class="input-wrap">
                <label for="investor-type">What kind of Investor are you?</label>
                <input type="text" id="investor-type" placeholder="Conservative" />
              </div>
              <div class="input-wrap">
                <label for="investment">How much do you want to invest in the next 12 months?</label>
                <input type="text" id="investment" placeholder="Less than 50,000 Naira." />
              </div>
            </div>

            <div class="input-grp investment">
              <div class="input-wrap">
                <label for="investor-name">Who advises you on your financial decisions?</label>
                <input type="text" id="investor-name" placeholder="A professional investment advisor" />
              </div>
              <div class="input-wrap">
                <label for="investment-period">What investment holding period do you prefer?</label>
                <input type="text" id="investment-period" placeholder="6 Months - 9 Months" />
              </div>
            </div>

            <div class="input-grp investment">
              <div class="input-wrap">
                <label for="ptitle">Something missing?</label>
                <input type="text" id="ptitle" placeholder="Yes" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="right-area">
        <div class="upload">
          <div class="upload-window">
            <img src="@/assets/admin/images/dummy-img.jpg" alt="User Image" />
          </div>
          <input type="image" src="" alt="Select Image" />
        </div>

        <section>
          <div class="header plan">Next of Kin</div>
          <div class="next-kin">
            <div class="input-grp">
              <div class="input-wrap">
                <label for="kin-fname">First Name</label>
                <input type="text" id="kin-fname" placeholder="Stanley" />
              </div>

              <div class="input-wrap">
                <label for="kin-lname">Last Name</label>
                <input type="text" id="kin-lname" placeholder="Offiah" />
              </div>

              <div class="input-wrap">
                <label for="relationship">Relationship</label>
                <input type="text" id="relationship" placeholder="Brother" />
              </div>

              <div class="input-wrap">
                <label for="kin-phone">Phone Number</label>
                <input type="tel" id="kin-phone" placeholder="09051843790" />
              </div>

              <div class="input-wrap">
                <label for="kin-address">Address</label>
                <textarea name="" id="kin-address" placeholder="289 Sharingan Rd. Tsukoyomi Town, Konohagakure, Land of Fire." cols="15" rows="5"></textarea>
              </div>
            </div>
          </div>
        </section>
        <button>SUBMIT</button>
      </div>
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
  display: grid;
  grid-template-columns: 75% 25%;
  padding: var(--base-size);
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

.personal-details,
.investment-plan,
.next-kin {
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 5px;
}

.header {
  font-size: var(--font-normal);
}

.header.plan {
  margin-top: var(--base-size);
}

.input-grp {
  display: flex;
  flex-direction: row;
}

.input-grp:not(:first-child) {
  margin-top: var(--base-size);
}

.next-kin .input-grp {
  display: flex;
  flex-direction: column;
}

.input-wrap {
  width: 100%;
}

.input-wrap:not(:first-child) {
  margin-left: var(--base-size);
}

.next-kin .input-grp .input-wrap {
  margin-left: 0 !important;
}

label {
  font-size: var(--font-sm);
}

.investment-plan label {
  color: gray;
}

input,
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

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  border-color: var(--myyinvest-red-fade);
  outline: none;
}

.upload {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
}

.upload-window {
  width: 100%;
  height: 160px;
  object-fit: contain;
  border: 1px solid gray;
  border-radius: 10px;
}

.upload-window img {
  width: 100%;
  height: 100%;
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

button {
  float: right;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>
