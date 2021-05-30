import { Component } from "react";
import Dice from "../Dice/Dice";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    this.state = {
      dice1: dice1,
      dice2: dice2,
      rolling: false,
    };

    this.generateDiceNumbers = this.generateDiceNumbers.bind(this);
  }

  generateDiceNumbers() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    this.setState({
      dice1: dice1,
      dice2: dice2,
      rolling: true,
    });

    //wait one second and then set rolling to false
    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Game">
        <Dice className="Game-Dice" num={this.state.dice1} />
        <Dice className="Game-Dice" num={this.state.dice2} />
        <br />
        <button
          className="Game-Button"
          onClick={this.generateDiceNumbers}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default Game;
