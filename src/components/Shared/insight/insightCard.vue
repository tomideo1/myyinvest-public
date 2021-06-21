<template>
  <div v-if="typeof insight.category !== 'undefined'">
    <div @click="$router.push({ path: `blogs/single/${insight._id}` })" class="single-blog-post" v-if="category === 'all' || insight.category.toLowerCase() === category.toLowerCase()">
      <!-- Post Thumbnail -->
      <div class="post-thumbnail">
        <img :src="insight.image" alt="insight_image" />
        <!-- Catagory -->
        <!-- <div class="post-cta"><a href="#">travel</a></div> -->
      </div>
      <!-- Post Content -->
      <div class="post-content">
        <p class="ft-18 font-weight-bold">{{ insight.postTitle }}</p>
        <p class="truncate truncate-3">{{ insight.postContent }}</p>
        <!-- Post Meta -->
        <div class="post-meta">
          <p>
            <a class="post-author text-dark">{{ insight.authoredBy }} on</a> <a class="post-date text-cs-mred">{{ formatDate }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "insightCard",
  props: {
    insight: {
      type: Object
    },
    category: {
      type: String
    }
  },
  computed: {
    formatDate() {
      return moment(this.insight.createdAt).format("MMMM Do YYYY, h:mm:ss a");
    }
  }
};
</script>

<style scoped></style>
