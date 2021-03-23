<template>
  <div class="bc-container">
    <nav class="bc-nav">
      <ul class="bc-nav__list">
        <li v-for="item in options" :key="item">
          <a href="javascript:void(0)" :class="['bc-nav__link', { 'bc-nav__link--active': isSelected(item) }]" @click="selected = item">
            {{ item.toUpperCase() }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="bc-cards" v-if="isSelected('banks')">
      <AddCard text="Add Bank" />
    </div>
    <div class="bc-cards" v-else>
      <AddCard text="Add New Card" />
    </div>
  </div>
</template>

<script>
import AddCard from "../../components/AddCard";

export default {
  name: "BanksAndCards",
  components: {
    AddCard
  },
  data() {
    return {
      selected: "banks",
      options: ["banks", "cards"]
    };
  },
  methods: {
    isSelected(item) {
      return this.selected === item;
    }
  }
};
</script>

<style lang="scss" scoped>
.bc-container {
  // border: 1px solid black;
  width: 100%;
  max-width: 85.75em;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    padding: 0 1em;
  }
}

.bc-nav {
  width: 100%;
  border-radius: 1.9rem;
  box-shadow: 0 0.03rem 0.2rem 0 rgba(0, 0, 0, 0.6);
  overflow: hidden;

  &__list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    > li {
      flex: 1;
    }
  }

  &__link {
    display: block;
    padding: 0.35em 0;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    background: color(bv-white);
    color: color(main-red);

    @media screen and (max-width: 599px) {
      font-size: 1.05rem;
    }

    &:hover,
    &:focus {
      background: color(bv-grey-100);
    }

    &--active {
      background: color(main-red) !important;
      color: color(bv-white);
      pointer-events: none;
    }
  }
}

.bc-cards {
  // border: 1px solid black;
  padding: 2.75em 0;
  display: grid;
  row-gap: 2.75em;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, 28.75em);
    justify-content: space-between;
    padding-left: 2.375em;
    padding-right: 2.375em;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(40%, 28.25em);
    justify-content: center;
  }
}
</style>
