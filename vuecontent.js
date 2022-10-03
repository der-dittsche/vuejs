const app = Vue.createApp({
  data() {
    return {
      userName: "Peter Parker",
      age: 36,
      width: 500,
      height: 300,
      imgAttrs: {
        class: "border-primary",
        src: "https://picsum.photos/300/300",
        alt: "Something random from picsum",
      },
    };
  },
}).mount("#app");

const cssdata = Vue.createApp({
  data() {
    return {
      cssClasses: ["text-red", "bg-green", "ff-size-big"],
      activeColor: "red",
      fontSize: 10,
      colorblue: false,
    };
  },
}).mount("#cssdata");
