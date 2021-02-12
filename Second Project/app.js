const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the course and learn Vue!',
            // courseGoalB: '<h2>Master to build an amaizing apps!</h2>', (html part)
            courseGoalB: 'Master to build an amaizing apps!',
            vueLink: 'https://vuejs.org/'

        };
    },

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                //to call from the data use "this"
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

// randomNumber will give a random number everytime we reload the page