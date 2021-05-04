<template>
  <div>
    <main class=" p-lg-5 p-1 p-md-3">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- ============= Post Content Area Start ============= -->
          <div class="col-12 col-md-12 col-lg-8 ">
            <router-view />
          </div>

          <!-- COL-8 ENDS -->

          <!-- ========== Sidebar Area ========== -->
          <aside class="col-12 col-md-8 col-lg-4 ">
            <div class="container-fluid ">
              <div class="d-flex flex-column">
                <p class="ft-18  font-weight-bold title">Top Stories</p>
                <hr class="mt-n1" />
              </div>
              <div class="d-flex flex-column">
                <div v-for="(story, index) in topStories" :key="index" class="single-blog-post post-style-2 d-flex mb-3 align-items-center widget-post side-port p-lg-2 ">
                  <!-- Post Thumbnail -->
                  <div class="post-thumbnail">
                    <img :src="story.image" alt="" />
                  </div>
                  <!-- Post Content -->
                  <div class="post-cntent">
                    <router-link to="single2.html" class="text-black w-100">
                      <p class="mb-0">{{ story.postTitle }}</p>
                    </router-link>
                  </div>
                </div>
              </div>

              <hr class="font-weight-lighter" />

              <div class="sidebar-widget-area">
                <p class="title">Stay Connected</p>
                <div class="widget-content">
                  <div class="social-area d-flex justify-content-between">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                    <a href="#"><i class="fa fa-vimeo"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchTopStories"])
  },
  computed: {
    ...mapGetters(["getTopStories"]),
    topStories() {
      return this.getTopStories.slice(0, 5).reverse();
    }
  },
  async mounted() {
    await this.fetchTopStories();
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
