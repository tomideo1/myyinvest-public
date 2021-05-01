<template>
  <div class="container " style="height: 100%!important;">
    <div class="post blog-post ">
      <div class="post-single">
        <div class="post-thumbnail"><img :src="insight.image" alt="insight_image" class="img-fluid" /></div>
        <div class="post-details">
          <div class="user_details">
            <div class="float-left">
              <a href="#">Views: {{ insight.view }}</a>
              <!-- <a href="#">Gadget</a> -->
            </div>
            <div class="float-right">
              <div class="media">
                <div class="media-body">
                  <h5>{{ insight.authoredBy }}</h5>
                  <p>{{ formatDate }}</p>
                </div>
                <div class="d-flex">
                  <img :src="insight.image" width="50" height="50" class="img-fluid" alt="image-small" />
                </div>
              </div>
            </div>
          </div>

          <h3>{{ insight.postTitle }}</h3>

          <div class="post-body">
            <p class="lead">
              {{ insight.postContent }}
            </p>
            <!--            <blockquote class="blockquote">-->
            <!--              <p>-->
            <!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco-->
            <!--                laboris nisi ut aliquip.-->
            <!--              </p>-->
            <!--              <footer class="blockquote-footer">-->
            <!--                Someone famous in-->
            <!--                <cite title="Source Title">Source Title</cite>-->
            <!--              </footer>-->
            <!--            </blockquote>-->

            <div class="post-tags container">
              <a href="#" class="tag"> #{{ insight.category }} </a>
            </div>
          </div>

          <div class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
            <a @click="go(insights.previousPost._id)" v-if="insights.previousPost !== null" href="javascript:void(0)" class="prev-post text-left d-flex align-items-center">
              <div class="icon prev"><i class="fa fa-angle-left"></i></div>
              <div class="text">
                <strong class="text-primary">Previous Post </strong>
                <h6>{{ insights.previousPost.postTitle }}</h6>
              </div>
            </a>
            <a @click="go(insights.nextPost._id)" href="javascript:void(0)" v-if="insights.nextPosts !== null" class="next-post text-right d-flex align-items-center justify-content-end">
              <div class="text">
                <strong class="text-primary">Next Post </strong>
                <h6>{{ insights.nextPost.postTitle }}</h6>
              </div>
              <div class="icon next"><i class="fa fa-angle-right"> </i></div>
            </a>
          </div>

          <div class="post-comments">
            <header>
              <h3>
                Post Comments<span class="no-of-comments">({{ insight.comments.length }})</span>
              </h3>
            </header>

            <div class="comment-items-wrap">
              <carousel :perPage="1">
                <slide class="p-2" v-for="(comment, index) in insight.comments" :key="index">
                  <ul class="comment-items">
                    <li class="comment-item clearfix" id="comment-2">
                      <div class="area">
                        <div class="content">
                          {{ comment.commentText }}
                        </div>
                        <div class="bottom">
                          <h5 class="ft-12 text-lowercase font-weight-light">- {{ comment.commentEmail }}</h5>
                        </div>
                      </div>
                    </li>
                    <!-- .children -->
                    <!-- #comment-## -->
                  </ul>
                </slide>
              </carousel>
            </div>
          </div>

          <div class="add-comment">
            <header>
              <h3 class="h6">Leave a reply</h3>
            </header>
            <form @submit.prevent>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="email" v-model="form.commentEmail" placeholder="Email Address (will not be published)" class="form-control" />
                </div>
                <div class="form-group col-md-12">
                  <textarea name="usercomment" v-model="form.commentText" id="usercomment" placeholder="Type your comment" class="form-control"></textarea>
                </div>
                <div class="form-group col-md-12">
                  <main-button :disabled="isLoading" @click="onSubmit" :text="buttonText" type="filled" class="col-md-12 mt-3" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/form/MainButton";
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      isLoading: false,
      buttonText: "Post Comment",
      form: { commentEmail: "", commentText: " ", id: this.$route.params.id }
    };
  },
  props: {
    insight: {
      type: Object
    }
  },
  components: { MainButton, Slide, Carousel },
  methods: {
    ...mapActions(["postComment", "fetchSingleInsight"]),
    async onSubmit() {
      this.isLoading = true;
      this.buttonText = "Posting..";
      const res = await this.postComment(this.form);
      if (res) {
        this.isLoading = false;
        this.buttonText = "Post Comment";

        this.form = {};
      } else {
        this.buttonText = "Post Comment";

        this.isLoading = false;
      }
    },
    async go(id) {
      await this.fetchSingleInsight({ id: id });
      await this.$router.replace({ path: `${id}` });
    }
  },
  computed: {
    ...mapGetters(["fetchInsights"]),
    formatDate() {
      return moment(this.insight.createdAt).format("MMMM Do YYYY, h:mm:ss a");
    },
    insights() {
      const insights = this.fetchInsights;
      let insightPost = { previousPost: null, nextPost: null };
      for (let id = 0; id < insights.length; id++) {
        if (insights[id]._id === this.$route.params.id) {
          if (id === 0) {
            insightPost = { previousPost: null, nextPost: insights[id + 1] };
          } else if (id + 1 === this.fetchInsights.length) {
            insightPost = { previousPost: insights[id - 1], nextPost: null };
          } else {
            insightPost = { previousPost: insights[id - 1], nextPost: insights[id + 1] };
          }
        }
      }
      return insightPost;
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
