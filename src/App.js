import React, {Component} from 'react';
import './App.css';
import Intro from './intro';

class App extends Component {
  render() {

    return(

      <div className="App">
        <header className="App-header">
          <Intro />
        </header>
    </div>

    );
  }
}


export default App;
