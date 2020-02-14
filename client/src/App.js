import React from 'react';
import axios from 'axios';
import './App.css';
import {Mode} from './Mode';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      this.setState({players: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <h1>Women's World Cup</h1>
        <Mode />
        {this.state.players ? this.state.players.map(player => (
         <div>
           <h3>{player.name}</h3>
           <p>{player.country}</p>
           <p>Searches: {player.searches}</p>
         </div>
        )) : <p>Loading...</p>}
        
      </div>
    )
  }
}

export default App;
