//versione senza state
import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
  
    //date now ritorna il numero di millisecondi trascorsi dal 1 gennaio 1970 ad oggi. Quindi a riga 6 aggiungo un numero di ore variabile.
    const time = Date.now() + this.props.timezone * 3600 * 1000;
    const date = new Date(time);

    return (
      <React.Fragment>
        <h3>{this.props.city + ' ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</h3>
      </React.Fragment>
    );

  }

  
}

export default Clock;