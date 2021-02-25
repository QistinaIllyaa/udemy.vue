const app = Vue.createApp({
    data(){
        return{
            output:'',
            outputs:'',
            confirmedValue: ''
        }
    },
    methods:{
        shwAlert(){
            alert('Did it!');
        },
        output1(event){
            this.output = event.target.value;
        },
        output2(event){
            this.outputs = event.target.value;
        },
        confirmed(){
            this.confirmedValue = this.outputs;
        }
    }

});

app.mount('#assignment');