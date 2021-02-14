const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''

    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;;
    },
    remove(num){
      this.counter = this.counter - num;;
    },
    setName(event, lastName){
      //auto update the input
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(){
      alert('Submitted');
    },
    confirmed(){
      this.confirmedName = this.name;
    }
    // submitForm(event){
    //   // prevent from reload
    //   event.preventDefault(); 
    //   alert('Submitted!');
    // }
  }
});

app.mount('#events');
