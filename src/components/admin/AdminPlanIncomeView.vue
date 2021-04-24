<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm ? 'invalid-form' : '', 'plan_form-area  view-form']" @submit.prevent="submit">
        <section class="plan_image income-image">
          <!-- <img src="@/assets/admin/images/income-plan.jpg" alt="Plan Image" /> -->
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
              <label for="p_returns">Returns</label>
              <input type="text" id="p_returns" placeholder="Returns" minlength="3" required v-model.trim.lazy="p_returns" />
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
          <div class="project-start">Start Date</div>
          <div class="project-end">End Date</div>
          <div class="tokens-count">Number of Tokens</div>
          <div class="options"></div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="project-name">John Doe</div>
          <div class="roi">₦70000</div>
          <div class="holding-period">5</div>
          <div class="project-start">Project {{ x }}</div>
          <div class="project-end">1 year</div>
          <div class="tokens-count">Once</div>
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
  name: "AdminPlanIncomeView",

  metaInfo: {
    title: "Myyinvest - Plan > View Income (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.plan_image {
  background-image: url("/images/income-plan.jpg");
}

.new-table .table-row div {
  width: 14%;
  text-align: center;
}

.table-row div.sn {
  width: 4%;
}

.table-row div.project-name {
  width: 20%;
}

.table-row div.tokens-count,
.table-row div.roi {
  width: 10%;
}
</style>
