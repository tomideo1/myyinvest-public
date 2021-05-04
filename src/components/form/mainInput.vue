<template>
  <div>
    <label v-if="labelType === 'full'">{{ label }}</label>
    <div class="form__div">
      <div v-if="inputType === 'input'">
        <input
          :class="['width-100 text-bold form__input', isInvalid ? 'is-invalid' : '']"
          @keyup="keyup($event)"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :disabled="disable"
          @input="trigger($event)"
          @focus="focus"
          :type="type"
          :required="required"
        />
        <label class="label" v-if="labelType !== 'full'">{{ label }}</label>
        <p class="font-poppins text-bold text-error ml-12" v-if="isInvalid">
          {{ errorMessage }}
        </p>
      </div>

      <div class="" v-if="inputType === 'select'">
        <!-- added custom styles with form__select class -->
        <select id="" class="form__input 'width-100 text-bold form__select " v-model="currentOption" @input="$emit('input', $event.target.value)">
          <option class="select-placeholder" value="" disabled selected>Select an Option</option>
          <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.key }}</option>
        </select>
        <label v-if="labelType !== 'full'" class="label">{{ label }}</label>
      </div>

      <template v-else-if="inputType === 'textarea'">
        <!-- eslint-disable-next-line -->
        <textarea :name="name" class="form__input" :placeholder="placeholder" @input="$trigger($event)" :value="value" :disabled="disable" :required="required"></textarea>
        <label v-if="labelType !== 'full'" class="label">{{ label }}</label>
      </template>
    </div>
    <p class="text-grey-500 ft-12 mt-n4 d-flex ml-auto">
      <slot name="inputdesc"> </slot>
    </p>
  </div>
</template>
<script>
export default {
  name: "MainInput",
  data() {
    return {
      showLabel: false,
      currentOption: ""
    };
  },
  props: {
    value: {},
    disable: {
      type: Boolean,
      default: false
    },
    onSelectedEvent: Function,
    placeholder: {
      type: String
      // default: ""
    },
    label: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text"
    },
    isInvalid: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    errorMessage: {
      type: String
    },
    labelType: {
      type: String,
      default: "normal"
    },
    inputType: {
      type: String,
      default: "input"
    },
    name: {
      type: String
    },
    options: {
      type: Array
    }
  },

  watch: {
    value: function(newValue) {
      this.currentOption = newValue;
    }
  },
  methods: {
    keyup(e) {
      this.$emit("keyup", e.target.value);
    },
    trigger(e) {
      this.$emit("input", e.target.value);
    },
    focus() {}
  }
};
</script>
<style lang="scss">
.form__div {
  position: relative;
  height: 48px;
  margin-bottom: 2.5rem;
}
.form__input {
  // background-color: color(bv-grey-100);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  border: 1px solid #efb9b9;
  // color: #999999;
  color: #7e7d7d;
  font-family: fonts(main-poppins), serif;
  line-height: 1.3;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: none;
  background: none;
  z-index: 1;
}

// my custom styles for select
.form__select {
  padding: 0 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path fill='%23c10000' d='m0,6l12,12l12,-12l-24,0z'/><path fill='none' d='m0,0l24,0l0,24l-24,0l0,-24z'/></svg>");
  background-repeat: no-repeat;
  background-size: 0.725rem;
  background-position: 98% 50%;
  // color: #e42c2c;

  &::-ms-expand {
    display: none;
  }
}

.label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  color: #80868b;
  font-size: 1rem;
  transition: 0.3s;
}
.is-invalid {
  border: 1px solid color(main-red);
}

.form__input:focus + .label {
  top: -0.5rem;
  left: 0.8rem;
  color: color(main-red);
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

/*Input focus sticky top label*/

.form__input:not(:placeholder-shown).form__input:not(:focus) + .label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}

/*Input focus*/

.form__input:focus {
  border: 1.5px solid color(main-red);
}

[disabled] {
  pointer-events: none;
  opacity: 0.7;
}
</style>
