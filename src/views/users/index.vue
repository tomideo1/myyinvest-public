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
const beamsClient = new PusherPushNotifications.Client({
  instanceId: "152ee166-ce1b-4279-a308-a88e57d847cb"
});

export default {
  name: "index",
  components: { MainLayout },
  methods: {
    ...mapActions(["saveToken"]),
    notificationsPermisionRequest() {
      Notification.requestPermission().then(function(permission) {
        if (permission !== "granted") {
          Notification.requestPermission();
        }
      });
    }
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  created() {
    this.notificationsPermisionRequest();
    const deviceInterest = "get Device Id Here";
    beamsClient
      .start()
      .then(() => beamsClient.addDeviceInterest(deviceInterest))
      .then(async () => {
        await this.saveToken({
          interest: deviceInterest
        });
      })
      .catch(console.error);
  }
};
</script>

<style scoped></style>
