const app = Vue.createApp({
    data(){
        return{
            message: 'Type something in the input box',
            currentUserInput: '' //at the input box
        };
    },
    methods:{
        setText(){
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value; //the other way round in displaying user input by using refs
        },
        saveInput(event){ //for input box to be function
            this.currentUserInput = event.target.value;
        }
    }
});

app.mount('#app');

const app2 = Vue.createApp({
    template: `<p>{{ bestMeal }}</p>`, //rarely use
    data(){
        return{
            bestMeal: 'Masakan Ibu!'
        }
    }
});
app2.mount('#app2');
//... vanila js

let message ='Hello';
let longMessage = message + ' World';
console.log(longMessage);

message = 'Hello!!!';
console.log(longMessage);

// this will give the same output. The new longMessage is not executed

//actual way
const data ={
    message: 'Hello',
    longMessage: 'Hello World!' // lets do longMessage changes when the message changes
};

const handler = {
    set(target, key, value){
        console.log(target); //message value 
        console.log(key); // the element
        console.log(value); // value of new message

        if(key == 'message'){
            target.longMessage = value + 'What';
        }
        
            target.message = value;
        
    }
};
const proxy = new Proxy (data, handler );

proxy.message = 'Helo!!';

console.log(proxy.longMessage);