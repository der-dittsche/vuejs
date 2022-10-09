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
  <SecHeader secheadline="Harald Lesch">
    <template #header="{ secheadline }">
      <h2>{{ secheadline }}</h2>
    </template>
  </SecHeader>
  <BaseList :listItems="fruitList.data"
    ><template #fruitheadline
      ><h3>{{ fruitList.thirdHeadline }}</h3></template
    >{{ fruitList.introText }}
    <template #item-list="scopedData"
      >{{ scopedData.greeting }} eat some {{ scopedData.item.text }}</template
    ></BaseList
  >
</template>

<script>
import ColoredHeadline from "@/components/firsttry.vue";
import AttendeeCounter from "@/components/Attendeecounter.vue";
import SecHeader from "@/components/slots.vue";
import BaseList from "@/components/BaseList.vue";

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

      fruitList: {
        thirdHeadline: "Fruits",
        introText: "a List of many fruits",
        data: [
          {
            id: 41,
            text: "Apple",
          },
          {
            id: 42,
            text: "Banana",
          },
        ],
      },
    };
  },
  components: {
    ColoredHeadline,
    AttendeeCounter,
    SecHeader,
    BaseList,
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
