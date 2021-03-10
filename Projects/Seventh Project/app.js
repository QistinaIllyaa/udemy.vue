const app = Vue.createApp({
    data(){
        return{
            message: 'Type something in the input box',
            currentUserInput: '' //at the input box
        };
    },
    methods:{
        setText(){
            this.message = this.currentUserInput;
        },
        saveInput(event){ //for input box to be function
            this.currentUserInput = event.target.value;
        }
    }
});

app.mount('#app');

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
        console.log(key); // the data
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