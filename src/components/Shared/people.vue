<template>
  <div>
    <div :class="`avatar avatar-${size}`" @click="$emit('click', $event)" :style="{ background: '' }">
      <span class="flag-left" v-if="flagPosition === 'left'">
        <img src="@/assets/flags/nigeria.png" />
      </span>
      <span class="flag-right" v-if="flagPosition === 'right'">
        <img src="@/assets/flags/nigeria.png" />
      </span>
      <div class="avatar-border "></div>
      <img class="p-2 people" src="@/assets/images/avatar.png" alt="avatar" />
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
        return ["xs", "sm", "md", "lg", "lg-1", "lg-2", "xl", "xl-1", "xxl", "xl-2"].indexOf(value) !== -1;
      }
    },
    flagPosition: {
      type: String,
      default: "left"
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
<style lang="scss">
.avatar {
  background: transparent;
  position: relative !important;
  &:hover {
    transition: all 300ms ease-in;
    transform: scale(1.2);
  }
}
.avatar:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
}
.avatar .flag-left img {
  position: absolute;
  top: 40%;
  left: 40%;
  animation: crescendo 4s alternate infinite ease-in;
  width: 40px;
  height: 40px;
  margin: calc(-100px / 1.6);
}

.avatar .flag-right img {
  position: absolute;
  top: 0%;
  left: 75%;
  width: 40px;
  height: 40px;
  animation: crescendo 4s alternate infinite ease-in;
  margin: calc(100px / 6);
}
.avatar-border {
  /* content: ''; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: transparent;
  border-radius: 50%;
  border: 2px dashed color(main-red) !important;
  -webkit-animation-name: Rotate;
  -webkit-animation-duration: 60s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: Rotate;
  -moz-animation-duration: 60s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: Rotate;
  -ms-animation-duration: 60s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .avatar .flag-left img {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 30px;
    height: 30px;
    animation: crescendo 4s alternate infinite ease-in;
    margin: calc(-100px / 3.2);
    border-radius: 50%;
  }
  .avatar .flag-right img {
    position: absolute;
    top: -10%;
    left: 65%;
    width: 30px;
    height: 30px;
    animation: crescendo 4s alternate infinite ease-in;
    margin: calc(100px / 6);
  }
}
@media only screen and (min-width: 320px) and (max-width: 540px) {
  .avatar .flag-left img {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 20px;
    height: 20px;
    animation: crescendo 4s alternate infinite ease-in;
    margin: calc(-100px / 3.2);
    border-radius: 50%;
  }
  .avatar .flag-right img {
    position: absolute;
    top: -15%;
    left: 65%;
    width: 25px;
    height: 25px;
    animation: crescendo 4s alternate infinite ease-in;
    margin: calc(100px / 6);
  }
}
</style>
