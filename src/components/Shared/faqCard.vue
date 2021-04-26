<template>
  <div>
    <div class="card " v-if="faq.category.toLowerCase() === category.toLowerCase()">
      <div class="card-header  " id="headingOne">
        <h3 class="clearfix mb-0">
          <a class="btn btn-link question" data-toggle="collapse" :data-target="`#collapse${faq._id.toString()}`" aria-expanded="true" :aria-controls="`collapse${faq._id}`"
            ><i class="fa fa-chevron-circle-down"></i>{{ faq.question }}</a
          >
        </h3>
      </div>
      <div :id="`collapse${faq._id}`" :class="['collapse', index === 0 ? 'show' : '']" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body p-4">{{ faq.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faqCard",
  props: {
    faq: {
      type: Object
    },
    category: {
      type: String
    },
    index: {
      type: Number
    }
  }
};
</script>

<style scoped lang="scss">
.question {
  border: none !important;
  &:hover {
    color: color(main-red) !important;
  }
}
</style>
