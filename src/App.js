import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Monster Rolodex'
    }

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name} Aps
          </p>
          <button>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
