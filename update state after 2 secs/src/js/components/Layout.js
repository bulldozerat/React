import React from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Misho'
    }
  }

  render(){
    setTimeout(
      () => this.setState({name: 'Ani'}),2000
    );

    return(
      <div>
       My name is {this.state.name}
      </div>
    )
  }
}

module.exports = {
  Test
}
