<template>
  <div>
    <div :class="progressClasses">
      <div class="progress__bg"></div>
      <div v-for="(step, index) in steps" :key="index">
        <div :class="stepClasses(index)">
          <div class="progress__indicator">
            <i class="fa fa-check"></i>
          </div>
          <div class="progress__label">
            {{ step.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import MainIcon from "../../Shared/mainIcon";
export default {
  props: ["steps"],
  data() {
    return {
      currentStep: null
    };
  },
  computed: {
    progressClasses() {
      let result = "progress ";
      if (this.currentStep && this.currentStep.label === "complete") {
        return (result += "progress--complete");
      }
      return (result += `progress--${this.steps.indexOf(this.currentStep) + 1}`);
    }
  },
  methods: {
    stepClasses(index) {
      let result = `progress__step progress__step--${index + 1} `;
      if ((this.currentStep && this.currentStep.label === "complete") || index < this.steps.indexOf(this.currentStep)) {
        return (result += "progress__step--complete");
      }
      if (index === this.steps.indexOf(this.currentStep)) {
        return (result += "progress__step--active");
      }
      return result;
    }
  }
};
</script>

<style scoped lang="scss">
$gray: #e5e5e5;
$gray2: #808080;
$blue: #2183dd;
$green: #009900;
$white: #ffffff;

//-- Progress Bar ---------------------
.progress {
  position: absolute;
  top: 15vh;
  width: 0%;
  height: 10px;
  background-color: $blue;
  transition: width 0.2s;

  @for $i from 1 through 5 {
    &.progress--#{$i} {
      width: calc(#{$i * 20}) px;
    }
  }

  &.progress--complete {
    width: 100vw;
  }
}

//-- Background Track --
.progress__bg {
  position: absolute;
  width: 100vw;
  height: 10px;
  background-color: $gray;
  z-index: -1;
}

//-- Steps --
.progress__step {
  position: absolute;
  top: -8px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @for $i from 1 through 5 {
    &.progress__step--#{$i} {
      left: calc(#{$i * 20}vw - 9px);
    }
  }

  &.progress__step--active {
    color: $blue;
    font-weight: 600;
  }

  &.progress__step--complete {
    .progress__indicator {
      background-color: $green;
      border-color: $blue;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress__indicator .fa {
      display: block;
    }

    .progress__label {
      font-weight: 600;
      color: $green;
    }
  }
}

//-- Indicators --
.progress__indicator {
  width: 25px;
  height: 25px;
  border: 2px solid $gray2;
  border-radius: 50%;
  background-color: $white;
  margin-bottom: 10px;

  .fa {
    display: none;
    font-size: 16px;
    color: $white;
  }
}

//-- Labels --
.progress__label {
  position: absolute;
  top: 40px;
}

//-- Controls --
.progress__actions {
  position: absolute;
  top: 75px;
  left: 10px;
  display: flex;
  align-items: center;
  width: max-content;
}

//-- Buttons --
.btn {
  width: fit-content;
  padding: 5px 8px;
  background-color: $white;
  border: 1px solid $gray2;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:nth-child(2) {
    margin: 0 10px;
  }
}
</style>
