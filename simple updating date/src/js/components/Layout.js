import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date
    }
  }

  render(){
    setInterval(
      () => this.setState({date: new Date}), 1000
    );

    return(
      <div>
       {this.state.date.toLocaleString()}
      </div>
    )
  }
}

module.exports = {
  Test
}
