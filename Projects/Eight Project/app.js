const app = Vue.createApp({
  data() {
    return {
        detailsAreVisble: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorez",
          phone: "0112336479",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0122547896",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  computed:{
    showDetails(){
        return this.detailsAreVisible ? 'Hide': 'Show';
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisble = !this.detailsAreVisble;
    }
}
});



app.mount("#app");
