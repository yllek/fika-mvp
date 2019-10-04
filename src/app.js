import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/Form.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        ~ C O F F E E H U B ~
        <Form />
        <List />
      </div>
    );
  }
}

export default hot(module)(App);
