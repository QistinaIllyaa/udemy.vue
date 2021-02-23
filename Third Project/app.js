const app = Vue.createApp({
  data() {
    return {
      counter: 15,
      name: "",
      lastname: '',
      confirmedName: "",
      // fullname: "",
    };
  },
// if you want to change the data/ manipulate the data use watcher
  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
      
    }
    // need to use the same as data to be used as a method/function to get the value of the data
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     // we do not need return when using watcher
    //     this.fullname = value + " " + this.lastname;
    //   }
    // },

    // lastname(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  
  // for perfomance or want to calculate some output dynamically use computed
  computed: {
    // not gonna use it ad a function but it is a function. Bsecause we going to use it as a data. Only use computed when we want to display something only, like in this case, name
    fullname(){
      console.log('Running again...');
      if (this.name === "" || this.lastname === '') {
        return "";
      }
      return this.name + " " + this.lastname;
    }
  },
  // use method when we want to recalculate again, if not, use computed
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Azhar";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      //auto update the input
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted");
    },
    confirmed() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
      this.lastname = '';
    },
    // submitForm(event){
    //   // prevent from reload
    //   event.preventDefault();
    //   alert('Submitted!');
    // }
  },
});

app.mount("#events");
