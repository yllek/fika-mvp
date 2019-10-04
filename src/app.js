import React from 'react';
import { hot } from 'react-hot-loader';
import InputForm from './components/Form.jsx';
import List from './components/List.jsx';
import { Typography } from '@material-ui/core';
import SimpleMap from './components/SimpleMap.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Typography variant='h2' component='h2'>
          <center>COFFEE HUB</center>
        </Typography>
        <center>
          <InputForm />
        </center>
        <List />
      </div>
    );
  }
}

export default hot(module)(App);
