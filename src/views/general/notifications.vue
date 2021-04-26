<template>
  <EmptyNotification v-if="false" />
  <div class="notification-container" v-else>
    <NotificationItem @deleteNoty="deleteNotification(notification._id)" v-for="(notification, index) in notifications" :key="index" :notification-data="notification" />
  </div>
</template>

<script>
import EmptyNotification from "../../components/EmptyNotification";
import NotificationItem from "../../components/NotificationItem";
import { mapGetters, mapActions } from "vuex";
import notify from "@/mixins/notify";
export default {
  mixins: [notify],
  name: "Notifications",
  data() {
    return {};
  },
  components: {
    EmptyNotification,
    NotificationItem
  },
  methods: {
    ...mapActions(["getAllUserNotifications", "deleteUserNotification"]),
    async deleteNotification(id) {
      const res = await this.deleteUserNotification({ id: id });
      if (res) {
        this.handleNotify({
          message: "removed successfully",
          status: "Success"
        });
      } else {
        this.handleNotify({
          message: "unable to delete notification",
          status: "Error"
        });
      }
    }
  },

  computed: {
    ...mapGetters(["getUserNotifications"]),
    notifications() {
      const notifications = this.getUserNotifications;
      return notifications.notificationsData.reverse();
    }
  },

  async mounted() {
    await this.getAllUserNotifications({
      page: 10
    });
  }
};
</script>

<style lang="scss" scoped>
.notification-container {
  // border: 1px solid red;
  display: grid;
  justify-items: center;
  row-gap: 2.5em;
  width: 100%;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 48.5% 48.5%;
    justify-content: space-between;
  }
}
</style>
