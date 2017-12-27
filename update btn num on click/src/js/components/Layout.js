import React from 'react';
let btnStyle = {
  background: 'blue',
  color: '#fff',
  width: '300px',
  height: '60px',
  textTransform: 'uppercase',
  fontSize: '22px'
}

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
  }

  afterClick = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <button style={btnStyle} onClick={this.afterClick}>btn is clicked: {this.state.count}</button>
    )
  }
}

module.exports = {
  Test
}
