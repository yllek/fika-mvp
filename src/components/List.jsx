import React, { Component } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import SimpleMap from './SimpleMap.jsx';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [],
      coordinates: [
        { latitude: 40.71086, longitude: -74.000732, text: 'Marker1' },
        { latitude: 41.74086, longitude: -74.000732, text: 'Marker2' },
        { latitude: 40.72086, longitude: -74.000732, text: 'Marker2' },
        { latitude: 40.74086, longitude: -74.000732, text: 'Marker2' },
        { latitude: 40.76086, longitude: -74.000732, text: 'Marker2' }
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
        this.setState({
          coffees: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.coffees.length > 0) {
      return (
        <div>
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
        </div>
      );
    } else {
      return (
        <div>
          <Typography>
            You have no saved entries. Go drink some coffee somewhere!
          </Typography>
        </div>
      );
    }
  }
}
