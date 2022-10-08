<template>
  <h1 :class="cssTypeClass">{{ headline }}</h1>
</template>

<script>
export default {
  name: "ColoredHeadline",
  props: {
    headline: String,
    type: {
      type: String,
      default: "green",
    },
  },
  computed: {
    cssTypeClass() {
      return `text-${this.type}`;
    },
  },
};
</script>
