function getRandowmValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //monster lost
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    specialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() { //for player usage
      this.currentRound++;
      const attackValue = getRandowmValue(5, 12); //using outsource function
      this.monsterHealth = this.monsterHealth - attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer(); //whenever player attack, the monster will auto attack.
    },
    attackPlayer() { //monster usage
      const attackValue = getRandowmValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandowmValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandowmValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    newGame() {
      //to start new game after game over
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      //who did something
      // unshift if basically like push but push add something at the END of the array,
      //but unshift add something at the BEGINING of the array
      this.logMessages.unshift({
        //adding object
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");

// attackMonster(){
//     const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
//     this.monsterHealth = this.monsterHealth - attackValue;
// },
// attackPlayer(){
//     const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
//     this.playerHealth -= attackValue;
// }
