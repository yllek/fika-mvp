import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/Form.jsx';
import ExCard from './components/ExCard.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        ~ C O F F E E H U B ~
        <Form />
        <ExCard />
      </div>
    );
  }
}

export default hot(module)(App);
