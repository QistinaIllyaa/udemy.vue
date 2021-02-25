const app = Vue.createApp({
  data() {
    return {
      input: "",
      paragraphIsVisible: true,
      inputBcakgroundColor: ''
    };
  },
  computed: {
    classes() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      };
    },
  },
  methods: {
    toggleVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");

// basically we are calling css in vue and make it work