<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive"> 
        <table class="table table-bordered table-hover">
            <thead class="table-header">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Date of registration</th>
                    <th scope="col" class="options">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in 10" :key="x">
                    <th scope="row">{{ zeroPrefix(x) }}{{ x }}</th>
                    <td>Valentine</td>
                    <td>Otto</td>
                    <td>voffiah@gmail.com</td>
                    <td>
                        09051843790
                    </td>
                    <td>17th Feb. 2021</td>
                    <td>17th Feb. 2021</td>
                    <td style="display: flex; justify-content: space-between">
                        <span @click="viewUser(x)" class="mr-2">
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
                        <span @click="deleteItem" class="ml-2">
                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
                                <path
                                paint-order="stroke fill markers"
                                fill-rule="evenodd"
                                d="M11.57 2.286H9.365L8.453.766A1.286 1.286 0 0 0 7.35.144h-2.7c-.452 0-.87.237-1.103.624l-.911 1.519H.429a.429.429 0 0 0-.43.428v.429c0 .237.193.428.43.428h.428v9c0 .71.576 1.286 1.286 1.286h7.714c.71 0 1.286-.575 1.286-1.286v-9h.428c.237 0 .429-.191.429-.428v-.43a.429.429 0 0 0-.43-.427zM9.858 12.57H2.143v-9h7.714v9zM4.603 1.507c.029-.05.08-.08.138-.078h2.518a.16.16 0 0 1 .138.078l.468.779h-3.73l.468-.78zm2.576 9.779h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322zm-3 0h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322z"
                                />
                            </svg>
                            </svg>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="pagination">
        <!-- <div class="mt-2 pagination-wrapper"> -->
            <button class="mt-2">Previous</button>
            <button class="mt-2" v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
            <button class="mt-2">Next</button>
        <!-- </div> -->
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
  name: "AllUsers",

  metaInfo: {
    title: "Myyinvest - All Users (Admin)",
    titleTemplate: null
  },

  data() {
    return {
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

    viewUser(id) {
      this.$router.push("/admin/users/" + id);
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
#style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #D62929;
}

.table-header {
    box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
    position: sticky !important;
    top: 0px;
    background-color: #c10000;
    color: white;
}
.pagination {
  border-top: 1px solid grey;
  display: flex;
  justify-content: right;
  align-items: center;
  /* bottom: 0;
  position: fixed; */
  /* margin-top: var(--base-size); */
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

</style>
