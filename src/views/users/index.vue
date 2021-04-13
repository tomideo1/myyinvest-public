<template>
  <div>
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "../../components/layout/main-layout";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { mapActions, mapGetters } from "vuex";
import { store } from "@/store/store";
const beamsClient = new PusherPushNotifications.Client({
  instanceId: "152ee166-ce1b-4279-a308-a88e57d847cb"
});

export default {
  name: "index",
  components: { MainLayout },
  methods: {
    ...mapActions(["saveToken"])
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  async created() {
    const api_url = process.env.VUE_APP_API;
    const tokenProvider = new PusherPushNotifications.TokenProvider({
      url: `${api_url}/admin/pusher/beams-auth`,
      queryParams: { userIDInQueryParam: `${store.state.auth.user._id}` }, // URL query params your auth endpoint needs
      headers: { "x-auth-token": `${store.state.auth.token}` } // Headers your auth endpoint needs
    });

    beamsClient
      .start()
      .then(() => beamsClient.setUserId(store.state.auth.user._id, tokenProvider))
      .catch(store.state.auth.user._id);
  }
};
</script>

<style scoped></style>
