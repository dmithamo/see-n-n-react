import React, { Component } from 'react';
import 'react-bootstrap';
// custom css
import '../../dist/assets/main.css';

// Import routes and append them here
import Routes from '../_routes';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;