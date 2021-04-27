<template>
  <div class="empty-notification">
    <main-icon name="empty-noty" size="retain" class="empty-notification__icon" />
    <p class="empty-notification__text">No notifications yet</p>
  </div>
</template>

<script>
import MainIcon from "./Shared/mainIcon";
export default {
  name: "EmptyNotification",
  components: { MainIcon }
};
</script>

<style lang="scss" scoped>
.empty-notification {
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__icon {
    margin-right: 1em;

    @media screen and (min-width: 600px) {
      margin-right: 3.5em;
    }
  }

  &__text {
    color: #666565;
    font-weight: 600;
    padding-left: 1.25em;
  }
}
</style>
