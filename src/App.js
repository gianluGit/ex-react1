import React, {Component} from 'react';
import './App.css';
//import Clock from './Clock';
import Clockstate from './Clockstate';
import Otherclock from './Otherclock';



class App extends Component {
  render() {

    return(
      

      <React.Fragment>
        <div className="App">
          <div className='title-page'>
          <a href="#">World Clock</a>
          </div>
          <header className="App-header">
            <Clockstate city= 'Rome' timezone= '0' />

            <div className='watch-container'>
              <Otherclock city= 'London' timezone= '-1' />
              <Otherclock city= 'Moscow' timezone= '2' />
              <Otherclock city= 'Paris' timezone= '0' />
              <Otherclock city= 'New York' timezone= '-6' />
              <Otherclock city= 'Toronto' timezone= '-6' />
              <Otherclock city= 'Los Angeles' timezone= '-9' />
              <Otherclock city= 'Tokyo' timezone= '8' />


            </div>



          </header>
        </div>
      </React.Fragment>
      

    );
  }
}


export default App;
