<template>
  <section class="main-wrapper">
    <article class="form">
      <form :class="[!validForm ? 'invalid-form' : '', 'plan_form-area add-form']" @submit.prevent="submit">
        <section class="add-form-wrapper">
          <div>
            <fieldset class="input-grp">
              <label for="plan_name">Name of Plan</label>
              <input type="text" id="plan_name" placeholder="Name of Plan" minlength="3" required v-model.trim.lazy="min_investment" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="p_returns">Returns</label>
              <input type="text" id="p_returns" placeholder="Returns" minlength="3" required v-model.trim.lazy="p_returns" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="investment_purpose">Investment Purpose</label>
              <input type="text" id="investment_purpose" placeholder="Investment Purpose" minlength="3" required v-model.trim.lazy="gov_body" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="gov_body">Governance Body</label>
              <input type="text" id="gov_body" placeholder="Governance Body" minlength="3" required v-model.trim.lazy="gov_body" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="min_investment">Minimum Investment</label>
              <input type="text" id="min_investment" placeholder="Minimum Investment" minlength="3" required v-model.trim.lazy="gov_body" />
            </fieldset>

            <fieldset class="input-grp">
              <label for="holding_period">Holding Period</label>
              <input type="text" id="holding_period" placeholder="Holding Period" minlength="3" required v-model.trim.lazy="gov_body" />
            </fieldset>
          </div>

          <div>
            <fieldset class="input-grp">
              <label for="about">About</label>
              <textarea name="" id="about" placeholder="About" cols="30" rows="10" minlength="3" required v-model.trim.lazy="about"></textarea>
            </fieldset>

            <div class="upload-wrapper">
              <label for="upload-image" class="main-label">Upload Image</label>
              <input type="upload-image" accept="image/*" id="upload-image" class="upload-image" required @change="updateFilename" />
              <label for="upload-image" class="styled-label"></label>
            </div>
          </div>

          <div>
            <div class="upload-wrapper">
              <label for="upload-document1" class="main-label">Upload Document 1</label>
              <input type="upload-document1" accept="image/*" id="upload-document1" class="upload-document1" required @change="updateFilename" />
              <label for="upload-document1" class="styled-label"></label>
            </div>

            <div class="upload-wrapper">
              <label for="upload-document2" class="main-label">Upload Document 2</label>
              <input type="upload-document2" accept="image/*" id="upload-document2" class="upload-document2" required @change="updateFilename" />
              <label for="upload-document2" class="styled-label"></label>
            </div>
          </div>
        </section>

        <section>
          <p class="add-project">Add Project</p>

          <div class="plan_add-project">
            <div>
              <fieldset class="input-grp">
                <label for="project_name">Project Name</label>
                <input type="text" id="project_name" placeholder="Project Name" minlength="3" required v-model.trim.lazy="min_investment" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="plan_name">Start Date</label>
                <input type="text" id="plan_name" placeholder="Start Date" minlength="3" required v-model.trim.lazy="min_investment" />
              </fieldset>
            </div>

            <div>
              <fieldset class="input-grp">
                <label for="plan_name">ROI</label>
                <input type="text" id="plan_name" placeholder="ROI" minlength="3" required v-model.trim.lazy="min_investment" />
              </fieldset>

              <fieldset class="input-grp">
                <label for="plan_name">End Date</label>
                <input type="text" id="plan_name" placeholder="End Date" minlength="3" required v-model.trim.lazy="min_investment" />
              </fieldset>
            </div>

            <div>
              <fieldset class="input-grp">
                <label for="plan_name">Holding Period</label>
                <input type="text" id="plan_name" placeholder="Holding Period" minlength="3" required v-model.trim.lazy="min_investment" />
              </fieldset>
            </div>
          </div>
        </section>

        <div class="submit-area">
          <p class="warning" v-if="!validForm">Kindly fill the form correctly.</p>
          <button class="submit" type="submit" @click.prevent="submit" :disabled="submitStatus === 'PENDING'">Edit</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  name: "AdminPlanRentalAdd",

  metaInfo: {
    title: "Myyinvest - Plan > Add Rental (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped></style>
