<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm ? 'invalid-form' : '', 'plan_form-area view-form']" @submit.prevent="submit">
        <section class="plan_image rental-image">
          <!-- <img src="" alt="Plan Image" /> -->
        </section>

        <section class="plan_inputs-group">
          <div>
            <fieldset class="input-grp">
              <label for="min_investment">Minimum Investment</label>
              <input type="text" id="min_investment" placeholder="Minimum Investment" minlength="3" required v-model.trim.lazy="min_investment" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="holding_period">Holding/Ownership Period</label>
              <input type="text" id="holding_period" placeholder="Holding/Ownership Period" minlength="3" required v-model.trim.lazy="holding_period" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="gov_body">Governance Body</label>
              <input type="text" id="gov_body" placeholder="Governance Body" minlength="3" required v-model.trim.lazy="gov_body" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="document1">Document 1</label>
              <input type="file" id="document1" placeholder="Document 1" minlength="3" required />
            </fieldset>

            <fieldset class="input-grp">
              <label for="document2">Document 2</label>
              <input type="file" id="document2" placeholder="Document 2" minlength="3" required />
            </fieldset>
          </div>

          <div>
            <fieldset class="input-grp">
              <label for="p_returns">Rental Income</label>
              <input type="text" id="p_returns" placeholder="Rental Income" minlength="3" required v-model.trim.lazy="p_returns" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="investment_purpose">Investment Purpose</label>
              <input type="text" id="investment_purpose" placeholder="Investment Purpose" minlength="3" required v-model.trim.lazy="investment_purpose" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="about">About</label>
              <textarea name="" id="about" placeholder="About" cols="30" rows="10" minlength="3" required v-model.trim.lazy="about"></textarea>
            </fieldset>

            <div class="submit-area">
              <p class="warning" v-if="!validForm">Kindly fill the form correctly.</p>
              <button class="submit" type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">Edit</button>
            </div>
          </div>
        </section>
      </form>
    </article>

    <article class="new-table">
      <p class="new-title">Projects</p>
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="property-name">Full Name</div>
          <div class="roi">ROI</div>
          <div class="ownership-period">Ownership Period</div>
          <div class="payout-duration">Project Duration</div>
          <div class="payout-roi">Yearly Payout Duration</div>
          <div class="tokens-count">Yearly Payout ROI</div>
          <div class="options"></div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="roi">5</div>
          <div class="ownership-period">{{ x }} Year<span v-if="x > 1">s</span></div>
          <div class="payout-duration">1 year</div>
          <div class="payout-roi">{{ x }}%</div>
          <div class="tokens-count">{{ x }}</div>
          <div class="options">
            <img src="@/assets/admin/icons/edit-alt.svg" alt="Edit Icon" />
            <img src="@/assets/admin/icons/trash-alt.svg" alt="Delete Icon" />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-form.css";
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminPlanRentalView",

  metaInfo: {
    title: "Myyinvest - Plan > View Rental (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
/* .plan_image { */
  /* background-image: url("../images/rental-plan.jpg"); */
  /* src/assets/admin/images/rental-plan.jpg */
/* } */

.new-table .table-row div {
  width: 12.5%;
  text-align: center;
}

.table-row div.sn {
  width: 5%;
}

.table-row div.project-name {
  width: 20%;
}
</style>
