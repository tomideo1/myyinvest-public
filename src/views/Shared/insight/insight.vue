<template>
  <div class="p-3">
    <main class="container">
      <div class="row justify-content-center">
        <!-- ============= Post Content Area Start ============= -->
        <div class="col-12 col-md-12 col-lg-8 mt-3">
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
              <div v-for="i in 6" :key="i" class="single-blog-post post-style-2 d-flex mb-3 align-items-center widget-post side-port p-lg-2 ">
                <!-- Post Thumbnail -->
                <div class="post-thumbnail">
                  <img src="@/assets/images/f.jpg" alt="" />
                </div>
                <!-- Post Content -->
                <div class="post-cntent">
                  <router-link to="single2.html" class="text-black w-100">
                    <p class="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</p>
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

      <footer>
        <div id="footer" class="container-fluid footer-img bottom-0">
          <div class="social-icons">
            <ul>
              <li>
                <a class="whatsapp" href="#"><i class="fa fa-whatsapp"></i></a>
              </li>
              <li>
                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a class="instagram" href="#"><i class="fa fa-instagram"></i></a>
              </li>
              <li>
                <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a class="youtube" href="#"><i class="fa fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {};
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
