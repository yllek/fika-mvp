import React, { Component } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import SimpleMap from './SimpleMap.jsx';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [],
      coordinates: [
        { lat: 40.71086, lng: -74.000732, text: 'Marker1' },
        { lat: 41.71086, lng: -74.000732, text: 'Marker2' }
      ]
    };
  }
  addToFavorites() {
    console.log('favorited');
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/mongo')
      .then(data => {
        console.log(data.data);
        this.setState({ coffees: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className='list' key='List'>
          {this.state.coffees.map(card => {
            return (
              <div key={card.id}>
                <Card card={card} addToFavorites={this.addToFavorites} />
              </div>
            );
          })}
        </div>
        <div key='22'>
          <SimpleMap each={this.state.coordinates} />
        </div>
      </div>
    );
  }
}
