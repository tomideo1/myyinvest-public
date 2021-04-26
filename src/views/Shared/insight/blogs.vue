<template>
  <div>
    <!-- Catagory Area -->
    <div class="world-catagory-area">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" v-for="(category, index) in categories" :key="index">
          <a
            :class="['nav-link  ins text-cs-mred nav-bold-insights cursor-pointer', category.toLowerCase() === activeTab ? 'active' : '']"
            id="tab3"
            @click="toggleTab(category.toLowerCase())"
            data-toggle="tab"
            role="tab"
            aria-controls="world-tab-3"
            aria-selected="true"
            >{{ category.toUpperCase() }}</a
          >
        </li>
      </ul>

      <transition name="fade" v-for="(category, index) in categories" :key="index">
        <div class="tab-content container-fluid" v-if="activeTab.toLowerCase() === category.toLowerCase()">
          <div class="row">
            <insight-card :category="activeTab" class="cursor-pointer col-12 col-md-6 col-lg-6 insight-col" v-for="(insight, index) in fetchInsights" :insight="insight" :key="index" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import InsightCard from "../../../components/Shared/insight/insightCard";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { InsightCard },
  data() {
    return {
      activeTab: "all"
    };
  },
  computed: {
    ...mapGetters(["fetchInsights"]),
    categories() {
      return ["ALL", "NEWS", "BLOG", "RESEARCH"];
    }
  },
  methods: {
    ...mapActions(["fetchAllInsights"]),
    toggleTab(tab) {
      this.activeTab = tab;
    }
  },
  async mounted() {
    await this.fetchAllInsights({
      page: 1,
      per_page: 10
    });
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
