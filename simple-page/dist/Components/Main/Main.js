import React from 'react';

class Main extends React.Component {
  render () {
    return (
     <div>
       <main className="main">
         <div className="container">
           <div className="main-content">{this.props.mainInfo}</div>
         </div>
       </main>
     </div>
    );
  }
}

module.exports = {
  Main
}
