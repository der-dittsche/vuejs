<template>
  <article>
    <slot name="header" :secheadline="secheadline">
      {{ secheadline }}
    </slot>
    <div class="content">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: "SecHeader",
  props: {
    secheadline: String,
  },
};
</script>
