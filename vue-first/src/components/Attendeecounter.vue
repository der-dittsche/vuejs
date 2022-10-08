<template>
  <p>{{ text }}: {{ counter }}</p>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <hr />
</template>

<script>
export default {
  name: "AttendeeCounter",
  props: {
    text: String,
    counter: Number,
  },
  methods: {
    increase() {
      this.$emit("increase");
      // this.counter++;
    },
    decrease() {
      this.$emit("decrease");
      //this.counter--;
    },
  },
};
</script>
