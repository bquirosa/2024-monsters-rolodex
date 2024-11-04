import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: '0001',
        },
        {
          name: "Frank",
          id: '0002',
        },
        {
          name: "Jacky",
          id: '0003',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
