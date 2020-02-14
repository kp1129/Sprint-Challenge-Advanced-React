import React from "react";
import axios from "axios";
import "./App.css";
import { Mode } from "./Mode";
import { Player } from "./Player";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({ players: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Women's World Cup</h1>
        <Mode />
        <div className="players-container">
          {this.state.players ? (
            this.state.players.map(player => <Player player={player} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
