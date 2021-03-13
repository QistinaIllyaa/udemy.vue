const app = Vue.createApp({
  data() {
    return {
      //   detailsAreVisble: false, //can stay or remove bcs we already have in component
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
});

//component is basically like a custom HTML and always use the identifier that consist of dash(-)
//app.component is another vue app that will be connected to out main app - like mini app
// also it is encapsulated as it will not communicate with parent app
app.component('friend-contact', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'manuel',
          name: 'Manuel Lorenzo',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
app.mount('#app');
