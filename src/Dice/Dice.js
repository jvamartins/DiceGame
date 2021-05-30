import { Component } from "react";
import "./Dice.css";
class Dice extends Component {
  render() {
    let num = this.props.num;
    let icon = "";
    switch (num) {
      case 1:
        icon = <i className="fas fa-dice-one"></i>;
        break;
      case 2:
        icon = <i className="fas fa-dice-two"></i>;
        break;
      case 3:
        icon = <i className="fas fa-dice-three"></i>;
        break;
      case 4:
        icon = <i className="fas fa-dice-four"></i>;
        break;
      case 5:
        icon = <i className="fas fa-dice-five"></i>;
        break;
      default:
        icon = <i className="fas fa-dice-six"></i>;
        break;
    }

    return <span className="Dice-Die">{icon}</span>;
  }
}

export default Dice;
