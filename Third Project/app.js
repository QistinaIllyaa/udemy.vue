const app = Vue.createApp({
  data() {
    return {
      counter: 15,
      name:'',
      confirmedName:''

    };
  },
  methods: {
    outputFullname(){
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'Azhar';
    },
    add(num) {
      this.counter = this.counter + num;;
    },
    remove(num){
      this.counter = this.counter - num;;
    },
    setName(event){
      //auto update the input
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted');
    },
    confirmed(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name='';
    }
    // submitForm(event){
    //   // prevent from reload
    //   event.preventDefault(); 
    //   alert('Submitted!');
    // }
  }
});

app.mount('#events');
