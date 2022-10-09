<template>
  <BaseList :listItems="books"
    ><template #item-list="{ item }"
      ><b>{{ item.title }}</b> - ISBN {{ item.isbn }}
      <router-link :to="{ name: 'booklistDetail', params: { id: item.id } }"
        >Details</router-link
      ></template
    >
    <p>A List of all books in api</p></BaseList
  >
</template>

<script>
import BaseList from "@/components/BaseList.vue";

export default {
  name: "App",
  data() {
    return {
      headline: "This is a Headline",

      books: [],
    };
  },
  components: {
    BaseList,
  },

  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
  },
};
</script>
