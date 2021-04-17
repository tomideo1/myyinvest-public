<template>
  <form class="wrapper">
    <div class="left-area">
      <section class="user-details">
        <div class="header">Personal Details</div>
        <div class="personal-details">
          <div class="detail-grp">
            <div class="detail-wrap">
              <label for="fname">First Name</label>
              <div class="detail-field" id="fname">Valentine</div>
            </div>
            <div class="detail-wrap">
              <label for="lname">Last Name</label>
              <div class="detail-field" id="lname">Offiah</div>
            </div>
            <div class="detail-wrap">
              <label for="gender">Gender</label>
              <div class="detail-field" id="gender">Male</div>
            </div>
            <div class="detail-wrap">
              <label for="dob">Date of Birth</label>
              <div class="detail-field" id="dob">13th May 1998</div>
            </div>
          </div>
          <div class="detail-grp">
            <div class="detail-wrap">
              <label for="email">Email Address</label>
              <div class="detail-field" id="ilema">voffiah@gmail.com</div>
            </div>
            <div class="detail-wrap">
              <label for="phone">Phone Number</label>
              <div class="detail-field" id="phone">09051843790</div>
            </div>
          </div>
          <div class="detail-grp">
            <div class="detail-wrap">
              <label for="occupation">Occupation</label>
              <div class="detail-field" id="occupation">Student</div>
            </div>
            <div class="detail-wrap">
              <label for="state-origin">State of Origin</label>
              <div class="detail-field" id="state-origin">Anambra</div>
            </div>
            <div class="detail-wrap">
              <label for="marital-status">Marital Status</label>
              <div class="detail-field" id="marital-status">Single</div>
            </div>
          </div>
          <div class="detail-grp">
            <div class="detail-wrap">
              <label for="address">Address</label>
              <div class="detail-field" id="address">289 Sharingan Rd. Tsukoyomi Town, Konohagakure, Land of Fire.</div>
            </div>
          </div>
        </div>
      </section>

      <section class="user-details">
        <div class="header plan">Investment Plan</div>
        <div class="investment-plan">
          <div class="detail-grp investment label-grp">
            <!-- <div class="detail-wrap"> -->
            <label for="reason">What is the primary reason you are interested in investing with Myyinvest?</label>
            <!-- </div> -->
            <!-- <div class="detail-wrap"> -->
            <label for="income-range">What is your monthly income range?</label>
            <!-- </div> -->
          </div>
          <div class="detail-grp investment">
            <div class="detail-wrap">
              <div class="detail-field" id="reason">What is the primary reason you are interested in investing with Myyinvest?</div>
            </div>
            <div class="detail-wrap">
              <div class="detail-field" id="income-range">Less than 50,000 Naira.</div>
            </div>
          </div>

          <div class="detail-grp investment label-grp">
            <!-- <div class="detail-wrap"> -->
            <label for="investor-type">What kind of Investor are you?</label>
            <!-- </div> -->
            <!-- <div class="detail-wrap"> -->
            <label for="investment">How much do you want to invest in the next 12 months?</label>
            <!-- </div> -->
          </div>
          <div class="detail-grp investment">
            <div class="detail-wrap">
              <div class="detail-field" id="investor-type">What kind of Investor are you?</div>
            </div>
            <div class="detail-wrap">
              <div class="detail-field" id="investment">Less than 50,000 Naira.</div>
            </div>
          </div>

          <div class="detail-grp investment label-grp">
            <!-- <div class="detail-wrap"> -->
            <label for="investor-name">Who advises you on your financial decisions?</label>
            <!-- </div> -->
            <!-- <div class="detail-wrap"> -->
            <label for="investment-period">What investment holding period do you prefer?</label>
            <!-- </div> -->
          </div>
          <div class="detail-grp investment">
            <div class="detail-wrap">
              <div class="detail-field" id="investor-name">A professional investment advisor</div>
            </div>
            <div class="detail-wrap">
              <div class="detail-field" id="investment-period">6 Months - 9 Months</div>
            </div>
          </div>

          <div class="detail-grp investment label-grp">
            <div class="detail-wrap">
              <label for="ptitle">Something missing?</label>
              <div class="detail-field" id="ptitle">Yes</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="right-area">
      <section class="user-details">
        <div class="header plan">Next of Kin</div>
        <div class="next-kin">
          <div class="detail-grp">
            <div class="detail-wrap">
              <label for="kin-fname">First Name</label>
              <div class="detail-field" id="kin-fname">Stanley</div>
            </div>

            <div class="detail-wrap">
              <label for="kin-lname">Last Name</label>
              <div class="detail-field" id="kin-lname">Offiiah</div>
            </div>

            <div class="detail-wrap">
              <label for="relationship">Relationship</label>
              <div class="detail-field" id="relationship">Brother</div>
            </div>

            <div class="detail-wrap">
              <label for="kin-phone">Phone Number</label>
              <div class="detail-field" id="kin-phone">09051843790</div>
            </div>

            <div class="detail-wrap">
              <label for="kin-address">Address</label>
              <div class="detail-field" id="kin-addresss">289 Sharingan Rd. Tsukoyomi Town, Konohagakure, Land of Fire.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  name: "ViewUserDetails",

  metaInfo: {
    title: "Myyinvest - User Details (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
/* *:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
} */

.wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: var(--base-size);
  padding: var(--base-size);
}

.left-area {
  padding-bottom: var(--base-size);
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

.detail-grp {
  display: flex;
  flex-direction: row;
}

.detail-grp:not(:first-child) {
  margin-top: var(--base-size);
}

.detail-grp:not(.label-grp) {
  margin-top: 0;
}

.next-kin .detail-grp {
  display: flex;
  flex-direction: column;
}

.investment-plan label {
  display: inline-block;
}

.investment-plan label,
.detail-wrap {
  width: 100%;
}

.investment-plan label:not(:first-child),
.detail-wrap:not(:first-child) {
  margin-left: var(--base-size);
}

.next-kin .detail-grp .detail-wrap {
  margin-left: 0 !important;
}

label {
  font-size: var(--font-sm);
}

.detail-wrap div {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px;
  font-size: var(--font-md);
  border: 1px solid var(--myyinvest-red-fade);
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.detail-wrap div:hover {
  border-color: var(--myyinvest-red);
  outline: none;
}
</style>
