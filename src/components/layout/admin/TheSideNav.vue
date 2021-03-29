<template>
  <div>
    <aside class="user">
      <img src="@/assets/admin/images/profile-pic.svg" alt="User Profile Picture" />
      <p class="welcome">Welcome, Valentine</p>
    </aside>
    <div class="menu">
      <router-link to="/admin" class="main-route">
        <span>Overview</span>
      </router-link>
      <router-link to="/admin/statistics" class="main-route">
        <svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M13.25 8.333H2V.417A.416.416 0 0 0 1.583 0H.75a.417.417 0 0 0-.417.417v8.75c0 .46.374.833.834.833H13.25c.23 0 .417-.186.417-.417V8.75a.417.417 0 0 0-.417-.417zM11.5 6.667h1c.167 0 .333-.167.333-.334v-6A.358.358 0 0 0 12.5 0h-1a.358.358 0 0 0-.333.333v6c0 .167.166.334.333.334zm-7.5 0h1c.167 0 .333-.167.333-.334V4.5A.357.357 0 0 0 5 4.167H4a.357.357 0 0 0-.333.333v1.833c0 .167.166.334.333.334zm2.5 0h1c.167 0 .333-.167.333-.334V1.167C7.833 1 7.667.833 7.5.833h-1c-.167 0-.333.167-.333.334v5.166c0 .167.166.334.333.334zm2.5 0h1c.167 0 .333-.167.333-.334v-3.5A.358.358 0 0 0 10 2.5H9a.358.358 0 0 0-.333.333v3.5c0 .167.166.334.333.334z"
            />
          </svg>
        </svg>
        <span>Statistics</span>
      </router-link>
      <router-link to="/admin/user" class="main-route">
        <svg width="10" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M7.225 6.53c-.593 0-.878.345-1.85.345-.972 0-1.255-.344-1.85-.344C1.993 6.53.75 7.825.75 9.419v.55c0 .569.444 1.03.99 1.03H9.01c.547 0 .99-.461.99-1.03v-.55C10 7.825 8.758 6.53 7.226 6.53zM9.009 9.97H1.74v-.55c0-1.023.8-1.857 1.784-1.857.3 0 .79.344 1.85.344 1.067 0 1.546-.344 1.85-.344.983 0 1.784.834 1.784 1.857v.55zM5.375 6.188c1.64 0 2.973-1.386 2.973-3.094S7.016 0 5.375 0C3.734 0 2.402 1.386 2.402 3.094s1.332 3.094 2.973 3.094zm0-5.157c1.092 0 1.982.926 1.982 2.063 0 1.136-.89 2.062-1.982 2.062S3.393 4.23 3.393 3.094c0-1.137.89-2.063 1.982-2.063z"
            />
          </svg>
        </svg>
        <span>User</span>
      </router-link>
      <router-link to="/admin/projects" class="main-route">
        <span>Projects</span>
      </router-link>
      <router-link to="/admin/transactions" class="main-route">
        <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M11.4.4H.6A.6.6 0 0 0 0 1v6c0 .33.269.6.6.6h10.8A.6.6 0 0 0 12 7V1a.6.6 0 0 0-.6-.6zm-.3 5.1a1.2 1.2 0 0 0-1.2 1.2H2.1A1.2 1.2 0 0 0 .9 5.5v-3a1.2 1.2 0 0 0 1.2-1.2h7.8a1.2 1.2 0 0 0 1.2 1.2v3zM6 1.9c-.994 0-1.8.94-1.8 2.1 0 1.16.806 2.1 1.8 2.1S7.8 5.16 7.8 4c0-1.16-.806-2.1-1.8-2.1zm.75 3.15a.15.15 0 0 1-.15.15H5.4a.15.15 0 0 1-.15-.15v-.3a.15.15 0 0 1 .15-.15h.3V3.56l-.01.006a.15.15 0 0 1-.207-.041l-.166-.25a.15.15 0 0 1 .04-.208l.289-.191a.446.446 0 0 1 .249-.076h.255a.15.15 0 0 1 .15.15V4.6h.3a.15.15 0 0 1 .15.15v.3z"
            />
          </svg>
        </svg>
        <span>Transactions</span>
      </router-link>
      <div :class="[myPath('-insights'), 'main-route']" @click="noInsight = !noInsight">
        <svg width="15" height="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M14.375 0H2.917c-.544 0-1.007.348-1.18.833H.626A.625.625 0 0 0 0 1.458v7.084C0 9.347.653 10 1.458 10h12.917c.345 0 .625-.28.625-.625V.625A.625.625 0 0 0 14.375 0zM1.25 8.542v-6.46h.417v6.46a.209.209 0 0 1-.417 0zm12.5.208H2.902c.009-.068.015-.138.015-.208V1.25H13.75v7.5zM4.479 5.625H8.02c.172 0 .312-.14.312-.312v-2.5A.313.313 0 0 0 8.02 2.5H4.479a.313.313 0 0 0-.312.313v2.5c0 .172.14.312.312.312zm.729-2.083h2.084v1.04H5.208v-1.04zM4.167 7.188v-.625c0-.173.14-.313.312-.313H8.02c.172 0 .312.14.312.313v.625c0 .172-.14.312-.312.312H4.479a.312.312 0 0 1-.312-.312zm5 0v-.625c0-.173.14-.313.312-.313h2.709c.172 0 .312.14.312.313v.625c0 .172-.14.312-.312.312h-2.71a.312.312 0 0 1-.311-.312zm0-3.75v-.625c0-.173.14-.313.312-.313h2.709c.172 0 .312.14.312.313v.625c0 .172-.14.312-.312.312h-2.71a.312.312 0 0 1-.311-.312zm0 1.875v-.625c0-.173.14-.313.312-.313h2.709c.172 0 .312.14.312.313v.625c0 .172-.14.312-.312.312h-2.71a.312.312 0 0 1-.311-.312z"
            />
          </svg>
        </svg>
        <span>Insights</span>
      </div>
      <div class="sub-nav" v-if="!noInsight">
        <transition name="expand-fly">
          <router-link to="/admin/view-insights"> <span></span> View Insights</router-link>
          <router-link to="/admin/add-insights"> <span></span> Add Insights</router-link>
        </transition>
      </div>
      <router-link to="/admin/notifications" class="main-route">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M11.769 9.847c-.517-.556-1.485-1.393-1.485-4.133 0-2.081-1.46-3.747-3.427-4.156V1a.858.858 0 0 0-1.714 0v.558c-1.967.409-3.427 2.075-3.427 4.156 0 2.74-.968 3.577-1.485 4.133a.839.839 0 0 0-.231.582.858.858 0 0 0 .86.857h10.28a.858.858 0 0 0 .86-.857.836.836 0 0 0-.231-.582zM1.809 10c.568-.75 1.19-1.991 1.193-4.27L3 5.714a3 3 0 1 1 6 0l-.002.016C9 8.009 9.623 9.25 10.19 10H1.809zm4.19 3.857c.947 0 1.714-.767 1.714-1.714H4.287c0 .947.767 1.714 1.713 1.714z"
            />
          </svg>
        </svg>
        <span>Notifications</span>
      </router-link>
      <router-link to="/admin/talk-to-us" class="main-route">
        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M10.715 7.07l-2.19-.937a.47.47 0 0 0-.547.135l-.97 1.184a7.243 7.243 0 0 1-3.462-3.463L4.73 3.02a.468.468 0 0 0 .135-.548L3.927.282a.472.472 0 0 0-.537-.27L1.357.48a.468.468 0 0 0-.363.457 9.067 9.067 0 0 0 9.068 9.068c.219 0 .408-.15.457-.363l.469-2.033a.474.474 0 0 0-.273-.54z"
            />
          </svg>
        </svg>
        <span>Talk to us</span>
      </router-link>
      <router-link to="/admin/newsletter" class="main-route">
        <svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10">
            <path
              paint-order="stroke fill markers"
              fill-rule="evenodd"
              d="M12.083 0H1.25C.56 0 0 .56 0 1.25v7.5C0 9.44.56 10 1.25 10h10.833c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25zm0 1.25v1.063c-.584.475-1.514 1.214-3.505 2.773C8.14 5.43 7.271 6.26 6.667 6.25c-.605.01-1.474-.819-1.912-1.164A263.785 263.785 0 0 1 1.25 2.313V1.25h10.833zM1.25 8.75V3.917c.597.475 1.443 1.142 2.733 2.152.569.448 1.566 1.437 2.684 1.43 1.112.007 2.096-.968 2.683-1.43 1.29-1.01 2.137-1.677 2.733-2.152V8.75H1.25z"
            />
          </svg>
        </svg>
        <span>Newsletter</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noInsight: true
    };
  },

  methods: {
    myPath(route) {
      if (this.currentPath.includes(route)) {
        return "active-main-route";
      } else "";
    }
  },

  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 260px;
  border: 200px;
}

aside img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

aside p {
  margin: var(--base-size) var(--base-size) 0;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  /* background-color: red; */
  background-image: url("/assets/admin/images/nav-background.svg");
}

.menu a.main-route,
.menu div.main-route {
  max-width: 75%;
  padding: 10px var(--base-size);
  border: 1px solid transparent;
  border-top-right-radius: var(--base-size);
  border-bottom-right-radius: var(--base-size);
  font-weight: 600;
}

.menu a.main-route:not(:last-child),
.menu div.main-route:not(:last-child) {
  margin-bottom: 10px;
}

.menu div.main-route:hover,
.active-main-route,
.menu a.main-route:hover,
.menu a.main-route.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
  cursor: pointer;
}

.menu div.main-route:hover svg,
.menu a.main-route:hover svg,
.menu .active-main-route svg,
.menu a.main-route.exact-active.active {
  fill: var(--myyinvest-white) !important;
}

.menu a.main-route span,
.menu div.main-route span {
  margin-left: var(--base-size);
}

.menu .sub-nav {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 60px;
}

.menu .sub-nav a {
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  border-radius: 5px;
}

.menu .sub-nav a:hover,
.menu .sub-nav a.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a:hover span,
.menu .sub-nav a.exact-active.active span {
  background-color: var(--myyinvest-white) !important;
}

.menu .sub-nav a:not(:last-child) {
  margin-bottom: 5px;
}

/* .expand-fly-in */
</style>
