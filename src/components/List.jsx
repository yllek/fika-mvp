import React, { Component } from 'react';
import Card from './Card.jsx';
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [
        {
          name: 'Geisha',
          date: '09/24/2019',
          description: 'this was really tasty'
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.state, 'coffees');
  }

  render() {
    return (
      <div className='list'>
        {this.state.coffees.map(card => {
          return (
            <div key={card.id}>
              <Card card={card} />
            </div>
          );
        })}
      </div>
    );
  }
}

//coffeename:
//date:
//description:
//process:
//beans: static button
//flavors:
//where?:
//tags
