class Setting {
  constructor(player) {
    this.player = player,
    this._bot = ""
  }

  set bot(bot) {
    this._bot = bot;
  }

  get bot() {
    return this._bot;
  }

  setBot(bot){
    this._bot = bot;
  }

  getBot(){
    return this._bot;
  }

  #isRandom() {
    let bot = ['paper', 'rock', 'scissors'];
    return bot[Math.floor(Math.random() * bot.length)]; 
  }

  getIsRandom(){
    return this.#isRandom();
  }

  #isRule() {
    let player = this.player;
    this.getBot();
    let botPick = this._bot;

    if(
      (player === 'paper' && botPick === 'rock') || 
      (player === "rock" && botPick === "scissors") || 
      (player === "scissors" && botPick === "paper")) {
        return "win";
    } else if (player === botPick) {
      return "draw";
    } else {
      return "lose";
    }
  }

  getIsRule(){
    return this.#isRule();
  }
}

class Gameplay extends Setting {
  constructor(player,winner) {
    super(player);
    this.winner = winner
  }

  play() {
    return this.getIsRule();
  }

  matchResult(){
    if (this.getIsRule() === "win"){
      console.log(`player: ${this.player} bot: ${this._bot} | player menang`)
    } else if (this.getIsRule() === "lose"){
      console.log(`player: ${this.player} bot: ${this._bot} | bot menang`);
    } else {
      console.log(`player: ${this.player} bot: ${this._bot} | yah imbang`)
    }
    return this.winner;
  }
}

const xhttp = new XMLHttpRequest();
var base_url = window.location.origin;
let game = new Gameplay();
document.getElementById("myId").addEventListener("click",gameStart);
document.getElementById("reset").addEventListener("click",resetGame);

function gameStart(props) {
  if (
  props.target.id === "rock" || 
  props.target.id === "scissors" || 
  props.target.id === "paper") {
      document.getElementById(props.target.id).classList.toggle("activePick");
      game.player = props.target.id;
      game.setBot(game.getIsRandom());
      document.getElementById(`com${game.getBot()}`).classList.add("activePick");
      document.getElementById(game.getIsRule()).style.visibility = "visible";
      document.getElementById("vs").style.visibility = "hidden";

      // POST DATA GAMES
      xhttp.open("POST", `${base_url}/game`, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(`user=${props.target.id}&otherUser=${game.getBot()}&result=${game.getIsRule()}`);

      game.matchResult();
      if (game.player != null) {
        document.getElementById("myId").removeEventListener("click",gameStart);
        document.getElementById("myId").addEventListener("click",pleaseReset);
      }
  }
}

function pleaseReset() {
  alert("Please reset this game");
}

function resetGame(){
  document.getElementById("myId").removeEventListener("click",pleaseReset);
  document.getElementById("myId").addEventListener("click",gameStart);
  document.getElementById(game.player).classList.remove("activePick");
  document.getElementById(`com${game.getBot()}`).classList.remove("activePick");
  document.getElementById(game.getIsRule()).style.visibility = "hidden";
  document.getElementById("vs").style.visibility = "visible";
}