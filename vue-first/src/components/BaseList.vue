<template>
  <slot name="fruitheadline"
    ><h2>{{ thirdHeadline }}</h2></slot
  >

  <div class="intro-text"><slot /></div>
  <ul>
    <li v-for="item in listItems" :key="item.id">
      <slot name="item-list" :item="item" greeting="Sascha">{{
        item.text
      }}</slot>
    </li>
  </ul>
</template>

<script>
const timestamp = +new Date();

export default {
  name: "BaseList",
  props: {
    thirdHeadline: String,

    listItems: {
      type: Array,
      default: () => [{ text: "No Items exists", id: timestamp }],
    },
  },
};
</script>
