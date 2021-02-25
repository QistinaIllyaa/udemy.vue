Vue.createApp({
    data() {
        return{
            name: 'Qistina',
            age:24,
            imgLink: 'https://cdn-images-1.medium.com/max/1200/1*ieROYZuCX-w0p9V7UswJbQ.png',
            value:[],
            valueName:''
        };
    },
    methods:{
        calculateAge(){
            return this.age + 5;
        },
        FavoriteRandomNumber(){
            return Math.random();
        }
    }
}).mount('#assignment');
