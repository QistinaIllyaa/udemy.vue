const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
  computed: {
    result() {
      if (this.counter > 37) {
        return "Too much!";
      } else if (this.counter < 37) {
        return "Not there yet";
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
