const app = Vue.createApp({
    data(){
        return{
            message: 'Test',
            currentUserInput: ''
        };
    },
    methods:{
        setText(){
            this.message = this.currentUserInput;
        },
        saveInput(event){
            this.currentUserInput = event.target.value;
        }
    }
});

app.mount('#app');