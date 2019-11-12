import React, { Component } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import SimpleMap from './SimpleMap.jsx';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [],
      coordinates: []
    };
  }
  addToFavorites() {
    console.log('favorited'); // TODO: need to add this to your favorites
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/mongo')
      .then(data => {
        this.setState({
          coffees: data.data
        });
        data.data.map(each => {
          this.state.coordinates.push(each.coordinates);
        });
        console.log('state after everything renders', this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.coffees.length > 0) {
      console.log(this.state.coffees);
      return (
        <div>
          <Box
            display='flex'
            flexWrap='wrap'
            height='100%'
            bgcolor='background.paper'
            css={{ maxWidth: 1000 }}>
            {' '}
            <div style={{ width: '100%' }}>
              <div className='list' key='List'>
                <GridList cols={4} cellHeight={'400'} spacing={13}>
                  {this.state.coffees.map(card => {
                    return (
                      <div key={card.id}>
                        <Card
                          card={card}
                          addToFavorites={this.addToFavorites}
                        />
                      </div>
                    );
                  })}
                </GridList>
              </div>
            </div>
          </Box>
          <div key='22'>
            <SimpleMap each={this.state.coffees} />
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
