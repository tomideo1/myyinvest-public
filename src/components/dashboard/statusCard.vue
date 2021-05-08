<template>
  <div>
    <main-card>
      <div class="d-flex flex-row">
        <p class="ft-18 font-weight-normal font-poppins" style="color: #A09D9D;">{{ statusTitle }}</p>
        <ul class="ml-auto ">
          <li :style="styles">
            <a href="javascript:void()"><main-icon :name="iconName" size="md"/></a>
          </li>
        </ul>
      </div>
      <span class="d-flex flex-row">
        <main-icon v-if="hasNaira" name="green-naira" size="sm" />
        <span class="ft-32">
          {{ statusNumber }}
        </span>
      </span>
    </main-card>
  </div>
</template>

<script>
import MainCard from "../Shared/mainCard";
import MainIcon from "../Shared/mainIcon";
export default {
  name: "statusCard",
  components: { MainIcon, MainCard },
  props: {
    iconColor: {
      type: String,
      default: ""
    },
    statusTitle: {
      type: String,
      default: ""
    },
    statusNumber: {
      type: Number
    },
    iconName: {
      type: String
    },
    hasNaira: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styles() {
      return `background-color:${this.iconColor};`;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;

  li {
    display: inline-block;
    /*margin: 15px;*/
    border-radius: 50%;

    a {
      color: #000;
      display: table-cell;
      vertical-align: middle;
      text-align: center;

      height: 60px;
      width: 60px;

      &,
      &:hover,
      &:active {
        text-decoration: none;
      }
    }
  }
}
</style>
