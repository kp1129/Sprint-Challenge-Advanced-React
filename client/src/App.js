import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <h1>Women's World Cup</h1>
        <p>Loading...</p>
      </div>
    )
  }
}

export default App;
