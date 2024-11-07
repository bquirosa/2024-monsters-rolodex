import { Component } from "react";

class CardList extends Component {

  render() {
    // console.log(this.props);
    console.log('render')
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map(monsters => (
          <h2 key={monsters.id}>{monsters.name}</h2>
        ))}
      </div>)
  }
}

export default CardList;