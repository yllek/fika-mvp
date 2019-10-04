import React from 'react';
import { hot } from 'react-hot-loader';
import InputForm from './components/Form.jsx';
import List from './components/List.jsx';
import { Typography } from '@material-ui/core';
class App extends React.Component {
  render() {
    return (
      <div>
        <Typography variant='h5' component='h2'>
          COFFEE HUB
        </Typography>
        <InputForm />
        <List />
      </div>
    );
  }
}

export default hot(module)(App);
