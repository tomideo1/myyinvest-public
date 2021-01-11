<template>
  <div>
    <div :class="`avatar avatar-${size}`" @click="$emit('click', $event)" :style="{ background: '' }">
      <img src="@/assets/images/avatar.png" alt="avatar" />
    </div>
  </div>
</template>

<script>
// The `BvAvatar` component is used to display user profile pictures.
// This component allows the user to dynamically size it, add responsive images and a username as fallback for when no image is provided.
// A tile variation is available for displaying an avatar without an image provided using the username.
export default {
  name: "people",
  props: {
    // user name or image

    // the size of the avatar
    size: {
      // `'xs'` / `'sm'` / `'md'` / `'lg'` / `'xl'`
      type: String,
      default: "sm",
      validator: value => {
        return ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    avatarBackground: () => {
      const backgroundColors = ["#F27979", "#79DBF2", "#F2A879", "#F279DB", "#79B5F2"];
      const num = Math.floor(Math.random() * backgroundColors.length);
      return backgroundColors[num];
    }
  },
  filters: {
    userLetter(value) {
      if (!value) return "";
      return value[0];
    }
  }
};
</script>
<style>
.avatar {
  border: 2px dashed red;
  background-clip: padding-box;
  padding: 5px;
  position: relative;

  .circle {
    &-deg135 {
      transform: rotate(135deg) translate(12em) rotate(-135deg);
    }
  }
}
</style>
