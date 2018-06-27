import React from 'react';

class Footer extends React.Component {
  render () {
    return (
     <div>
       <footer className="footer">
         <div className="container">
           <div className="footer-txt">{this.props.copyrights}</div>
         </div>
       </footer>
     </div>
    );
  }
}

module.exports = {
  Footer
}
