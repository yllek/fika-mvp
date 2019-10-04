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
          description: 'this was really tasty',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
        },
        {
          name: 'Colombia',
          date: '10/2/2019',
          description: 'I really loved all of the flavors inside',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
        }
      ]
    };
  }
  addToFavorites() {
    console.log('favorited');
  }
  componentDidMount() {}

  render() {
    return (
      <div className='list' key='List'>
        {this.state.coffees.map(card => {
          return (
            <div key={card.id}>
              <Card card={card} addToFavorites={this.addToFavorites} />
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
