<template>
  <div>
    <main class=" faq-header mt-5" style="height: 100%!important;">
      <div class="row">
        <div class="col-md-6 mb-4">
          <h3 class="text-main-red" style="margin-top: 100px!important;">FREQUENTLY ASKED QUESTIONS</h3>
          <p>Here are answers to some of your most pressing questions and concerns</p>
        </div>
        <div class="col-md-6 f-h-img">
          <img width="350" height="350" src="https://res.cloudinary.com/myyinvest/image/upload/v1614039876/mmyyinvest-2.0/images/faq_i8ci7h.svg" alt="" />
        </div>
      </div>
      <div class="input-box">
        <input type="text" class="form-control" placeholder="Search for a question..." v-model="filter" />
      </div>
      <div class="row">
        <div class="col-md-12 faq-tabs">
          <div class="tabs">
            <input v-for="(category, index) in categories" :key="index" type="radio" :id="`tab-${index}`" name="tab-control" :checked="category.toLowerCase() === 'general'" />
            <ul>
              <li :title="category" v-for="(category, index) in categories" :key="index">
                <label :for="`tab-${index}`" role="button"
                  ><i class="fa fa-list"></i><br /><span>{{ category.toUpperCase() }}</span></label
                >
              </li>
            </ul>
            <div class="slider">
              <div class="indicator"></div>
            </div>

            <div class="content">
              <section v-for="(category, index) in categories" :key="index">
                <div class="p-lg-5 container-fluid m-lg-5">
                  <div class="accordion " id="accordionExample">
                    <faq-card :index="index" :category="category" :faq="faq" v-for="(faq, index) in allFaqs" :key="index" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FaqCard from "../../components/Shared/faqCard";

export default {
  data() {
    return {
      filter: ""
    };
  },
  components: { FaqCard },
  computed: {
    ...mapGetters(["fetchFaqs"]),
    allFaqs() {
      return this.fetchFaqs.filter(faq => {
        return faq.question.toLowerCase().match(this.filter.toLowerCase()) || faq.answer.toLowerCase().match(this.filter.toLowerCase());
      });
    },
    categories() {
      let defaultCategory = ["General", "investments", "payments", "safety and security"];
      return defaultCategory;
      // const pluckedCategories = this.fetchFaqs.map(faq => faq.category);
      // const categories = [...defaultCategory, ...pluckedCategories];
      // return new Set(categories);
    }
  },
  methods: {
    ...mapActions(["fetchAllFaqs"])
  },

  async mounted() {
    await this.fetchAllFaqs({
      page: 1,
      per_page: 100
    });
  }
};
</script>

<style>
/*  *{*/
/*background-color: red!important;*/
/* }*/
</style>
