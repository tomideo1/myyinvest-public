<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm ? 'invalid-form' : '', 'plan_form-area view-form']" @submit.prevent="submit">
        <section class="plan_image special-image">
          <!-- <img src="@/assets/admin/images/special-plan.jpg" alt="Plan Image" /> -->
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
              <label for="p_returns">Fixed ROI/Rental Income</label>
              <input type="text" id="p_returns" placeholder="Fixed ROI/Rental Income" minlength="3" required v-model.trim.lazy="p_returns" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="investment_purpose">Investment Purpose</label>
              <input type="text" id="investment_purpose" placeholder="Investment Purpose" minlength="3" required v-model.trim.lazy="investment_purpose" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="about">About</label>
              <textarea name="" id="about" placeholder="About" cols="30" rows="10" minlength="3" required v-model.trim.lazy="about"></textarea>
            </fieldset>

            <!-- <button class="button-edit">Edit</button> -->
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
          <div class="project-name">Name of Project</div>
          <div class="roi">ROI</div>
          <div class="holding-period">Holding Period</div>
          <div class="date-start">Start Date</div>
          <div class="date-end">End Date</div>
          <div class="tokens-count">Number of Tokens</div>
          <div class="options"></div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="project-name">John Doe</div>
          <div class="roi">{{ x }}%</div>
          <div class="holding-period">{{ x }} year<span v-if="x > 1">s</span></div>
          <div class="date-start">Start Date</div>
          <div class="date-end">End Date</div>
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
  name: "AdminPlanSpecialView",

  metaInfo: {
    title: "Myyinvest - Plan > View Special (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.plan_image {
  /* background-image: url("../assets/admin/images/special-plan.jpg"); */
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  -webkit-background-origin: border-box;
  -moz-background-origin: content-box;
  background-position: 0 100%;
  /* src/assets/admin/images/nav-background.svg */
}

.new-table .table-row div {
  width: 12.5%;
  text-align: center;
  /* border: 1px solid red; */
}

.table-row div.sn {
  width: 5%;
}

.table-row div.project-name {
  width: 20%;
}
</style>
