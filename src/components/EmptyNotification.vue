<!-- eslint-disable -->
<template>
  <div class="empty-notification">
    <div class="empty-notification__icons">
      <main-icon name="empty-noty" size="retain" />
    </div>
    <div class="empty-notification__text">
      <p>No notifications yet</p>
    </div>
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

  &__icons {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100%;
    max-width: 34.5em;
    margin-bottom: 1em;
    // border: 1px solid red;
    // padding-bottom: 5em;
  }

  &__bell {
    // border: 1px solid green;
    margin-bottom: 5.5em;

    @media screen and (max-width: 600px) {
      padding: 1.75em;
    }
  }

  &__alert {
    // border: 1px solid blue;
    position: absolute;
    left: 0;
    bottom: 0;

    @media screen and (max-width: 600px) {
      padding: 1.5em;
    }
  }

  &__text {
    color: #666565;
    font-weight: 600;
  }
}
</style>
