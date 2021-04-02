<template>
  <the-admin-layout>
    <div class="main-content">
      <section class="content-titles">
        <div class="sn">S/N</div>
        <div class="title-p">Post Name</div>
        <div class="image">Post Image</div>
        <div class="content">Post Content</div>
        <div class="date">Post Date</div>
        <div class="options"></div>
      </section>

      <section class="contents" v-for="x in 10" :key="x">
        <div class="sn">{{ zeroPrefix(x) }}{{ x }}</div>
        <div class="title-p">How to invest seamlessly in Real Estate</div>
        <div class="image">
          <img src="@/assets/admin/images/dummy-img.jpg" alt="Content Image" />
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusamus. Reiciendis assumenda quae quod labore sit ut earum quos, voluptatem, cupiditate culpa magnam? Consectetur provident
          odio optio omnis, accusamus dolor.
        </div>
        <div class="date">17th Feb. 2021</div>
        <div class="options">
          <span>OINP</span>
          <span>
            <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                />
              </svg>
            </svg>
          </span>
          <span>
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" @click="deleteItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M11.57 2.286H9.365L8.453.766A1.286 1.286 0 0 0 7.35.144h-2.7c-.452 0-.87.237-1.103.624l-.911 1.519H.429a.429.429 0 0 0-.43.428v.429c0 .237.193.428.43.428h.428v9c0 .71.576 1.286 1.286 1.286h7.714c.71 0 1.286-.575 1.286-1.286v-9h.428c.237 0 .429-.191.429-.428v-.43a.429.429 0 0 0-.43-.427zM9.858 12.57H2.143v-9h7.714v9zM4.603 1.507c.029-.05.08-.08.138-.078h2.518a.16.16 0 0 1 .138.078l.468.779h-3.73l.468-.78zm2.576 9.779h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322zm-3 0h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322z"
                />
              </svg>
            </svg>
          </span>
        </div>
      </section>
    </div>

    <div class="pagination">
      <button>Previous</button>
      <button v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
      <button>Next</button>
    </div>

    <div class="delete-overlay" v-if="!noDeleteModal">
      <div class="delete-modal">
        <p>Delete post</p>
        <p>Are you sure you want to delete post?</p>
        <div>
          <button @click="cancelDelete">Cancel</button>
          <button @click="proceedDelete">Proceed</button>
        </div>
      </div>
    </div>
  </the-admin-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Myyinvest - View Notifications (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      status: "Published",
      currentPage: 1,
      noDeleteModal: true
    };
  },

  methods: {
    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },

    changeColor(val) {
      if (val.toLowerCase().normalize() === "published") {
        return "color: var(--myyinvest-green)";
      } else return "color: var(--myyinvest-danger)";
    },

    deleteItem() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    cancelDelete() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    proceedDelete() {
      alert("What next?");
    }
  }
};
</script>

<style scoped>
.main-content {
  /* height: 95%; */
  padding: 1px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 5px;
}

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div {
  display: flex;
  justify-content: center;
  width: 20%;
  padding: 2px;
}

section div.sn {
  width: 8%;
}

section div.content {
  width: 36%;
}

section div.image,
section div.options {
  width: 18%;
}

section:first-child {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--myyinvest-white);
}

section.contents {
  margin-bottom: var(--base-size);
}

section:first-child div {
  color: gray;
  font-weight: 600;
}

section div img {
  width: 100%;
  height: 60px;
}

div.options {
  justify-content: space-around !important;
}

.pagination {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: var(--base-size);
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid var(--myyinvest-red);
  border-radius: 5px;
  color: var(--myyinvest-red);
  background-color: var(--myinvest-white);
}

.pagination button:first-child {
  margin-left: auto;
}

.pagination button:not(:first-child) {
  margin-left: 10px;
}

.pagination button:hover,
.pagination button:focus,
.pagination .button-active {
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
}

.delete-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.delete-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 250px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.delete-modal p {
  font-size: var(--font-md);
  font-weight: 600;
  text-align: center;
}

.delete-modal p:first-child {
  margin-bottom: var(--base-size);
  color: var(--myyinvest-red);
}

.delete-modal p:nth-child(2) {
  margin: var(--base-size) 0;
}

.delete-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.delete-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.delete-modal div button:hover,
.delete-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
</style>
