import React from 'react';

class Otherclock extends React.Component {
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
      <div className='card-watch'>
        <span>{this.props.city}</span>
        <div className='second-watch'>{data.toLocaleTimeString([], {timeStyle: 'short'})}</div>
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

export default Otherclock;