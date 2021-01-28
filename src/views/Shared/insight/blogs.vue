<template>
  <div>
    <!-- Catagory Area -->
    <div class="world-catagory-area">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link ins active text-cs-mred nav-bold-insights cursor-pointer" id="tab1" data-toggle="tab" @click="toggleTab('all')" role="tab" aria-controls="world-tab-1" aria-selected="true"
            >ALL</a
          >
        </li>

        <li class="nav-item">
          <a class="nav-link ins text-cs-mred  nav-bold-insights cursor-pointer" id="tab2" data-toggle="tab" @click="toggleTab('news')" role="tab" aria-controls="world-tab-2" aria-selected="true"
            >NEWS</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link ins text-cs-mred nav-bold-insights cursor-pointer"
            id="tab3"
            @click="toggleTab('blog')"
            data-toggle="tab"
            href="#world-tab-3"
            role="tab"
            aria-controls="world-tab-3"
            aria-selected="false"
            >BLOG</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link ins text-cs-mred nav-bold-insights cursor-pointer"
            @click="toggleTab('research')"
            id="tab4"
            data-toggle="tab"
            href="#world-tab-4"
            role="tab"
            aria-controls="world-tab-4"
            aria-selected="false"
            >RESEARCH</a
          >
        </li>
      </ul>

      <transition name="fade">
        <div class="tab-content" v-if="activeTab === 'all'">
          <div>
            <div class="row">
              <div class="col-12 col-md-6 insight-col" v-for="i in 4" :key="i">
                <router-link :to="{ name: 'single-blog' }" class="headline">
                  <div>
                    <!-- Single Blog Post -->
                    <div class="single-blog-post">
                      <!-- Post Thumbnail -->
                      <div class="post-thumbnail">
                        <img src="@/assets/images/g.jpg" alt="" />
                        <!-- Catagory -->
                        <!-- <div class="post-cta"><a href="#">travel</a></div> -->
                      </div>
                      <!-- Post Content -->
                      <div class="post-content">
                        <p class="ft-18 font-weight-bold">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                        <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                        <!-- Post Meta -->
                        <div class="post-meta">
                          <p><a href="single2.html" class="post-author text-dark">Katy Liu</a> on <a href="single.html" class="post-date text-cs-mred">Sep 29, 2017 at 9:48 am</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { activeTab: "all" };
  },
  methods: {
    toggleTab(tab) {
      this.activeTab = tab;
    }
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
