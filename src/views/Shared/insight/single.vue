<template>
  <div>
    <insight-details :insight="insight" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import InsightDetails from "@/components/Shared/insight/insightDetails";
export default {
  components: { InsightDetails },
  data() {
    return {
      insight: null
    };
  },
  methods: {
    ...mapActions(["fetchSingleInsight"])
  },
  async mounted() {
    this.insight = await this.fetchSingleInsight({
      id: this.$route.params.id
    });
  }
};
</script>

<style></style>
