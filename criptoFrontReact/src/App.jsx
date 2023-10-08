import React, { Component } from 'react';
import CustomAppbar from './components/Appbar.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className='App'>
        <CustomAppbar/>
      </div>
    
  );
  }
}

export default App;
