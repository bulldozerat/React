import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val : ""
    }
  }

SubmitF = (e) => {
  e.preventDefault();
  console.log(`After submit the value is: ${this.state.val}`);
}

GetVal = (e) => {
  this.setState({
    val: e.target.value
  })

}

  render() {
    return(
      <form onSubmit={this.SubmitF}>
       <input onChange={this.GetVal} type='text'/>
       <button>submit</button>
       <p>Input Value is {this.state.val}</p>
      </form>
    )
  }
}

module.exports = {
  Test
}
