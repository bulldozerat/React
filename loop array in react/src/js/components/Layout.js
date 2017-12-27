import React from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nums: [1, 2, 3, 4]
    }
  }

  render(){
    return(
      <div>
       {this.state.nums.map(
         (num) => <p key={num}>{num}</p>
       )}
      </div>
    )
  }
}

module.exports = {
  Test
}
