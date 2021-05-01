<template>
  <div>
    <insight-details :insight="getSingleInsight" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import InsightDetails from "@/components/Shared/insight/insightDetails";
export default {
  components: { InsightDetails },
  data() {
    return {
      insight: null
    };
  },
  computed: {
    ...mapGetters(["getSingleInsight"])
  },
  methods: {
    ...mapActions(["fetchSingleInsight"])
  },
  async mounted() {
    await this.fetchSingleInsight({
      id: this.$route.params.id
    });
  }
};
</script>

<style></style>
