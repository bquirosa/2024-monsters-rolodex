import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Monsters Rolodex'
    }

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name} App
          </p>
          <button onClick={() => {
            this.setState({
              name: 'Monsters'
            })
          }}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
