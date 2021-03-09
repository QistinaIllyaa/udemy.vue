function getRandowmValue(min, max){
    return Math.floor(Math.random()*(max -min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound : 0
            
        };
    },
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'};
        },
        specialAttack(){
            return this.currentRound % 5 !== 0;
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandowmValue(5,12); //using outsource function
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandowmValue(8,15)
            this.playerHealth -= attackValue;
            
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandowmValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandowmValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }

            this.attackPlayer();
        }

       
    }
});

app.mount('#game');

 // attackMonster(){
        //     const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
        //     this.monsterHealth = this.monsterHealth - attackValue;
        // },
        // attackPlayer(){
        //     const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
        //     this.playerHealth -= attackValue;
        // }