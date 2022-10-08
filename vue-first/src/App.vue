<template>
  <ColoredHeadline :headline="headline" type="red" />
  <h2>Total count: {{ totalCount }}</h2>
  <AttendeeCounter
    v-for="({ text, counter }, index) of attendeeCounters"
    :key="text"
    :text="text"
    :counter="counter"
    @increase="handleIncrease(index)"
    @decrease="handleDecrease(index)"
  />
</template>

<script>
import ColoredHeadline from "./components/firsttry.vue";
import AttendeeCounter from "./components/Attendeecounter.vue";

export default {
  name: "App",
  data() {
    return {
      headline: "This is a Headline",
      attendeeCounters: [
        {
          text: "5-12 years",
          counter: 0,
        },
        {
          text: "13-18 years",
          counter: 0,
        },
        {
          text: "18-25 years",
          counter: 0,
        },
        {
          text: ">50 years",
          counter: 0,
        },
      ],
    };
  },
  components: {
    ColoredHeadline,
    AttendeeCounter,
  },
  methods: {
    handleIncrease(index) {
      console.log("Increase");
      this.attendeeCounters[index].counter += 1;
    },
    handleDecrease(index) {
      console.log("Decrease");
      this.attendeeCounters[index].counter -= 1;
    },
  },
  computed: {
    totalCount() {
      let totalCount = 0;
      this.attendeeCounters.forEach(({ counter }) => (totalCount += counter));
      return totalCount;
    },
  },
};
</script>
