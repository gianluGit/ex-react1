//versione CON state
import React from 'react';

class Clockstate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {

    const time = this.state.date.getTime() + this.props.timezone * 3600 * 1000;
    const data = new Date(time);


    return (
      <React.Fragment>
        <div className='watch'>
          <div className='main-watch'>{data.toLocaleTimeString()}</div>
          <span className='watch-info'>{this.props.city + ' ' + data.toLocaleDateString()}</span>
        </div>
      </React.Fragment>

    );
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }
  


  

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
}

export default Clockstate;