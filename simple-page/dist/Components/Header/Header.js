import React from 'react';

class Header extends React.Component {
  render () {
    return (
     <div>
       <header className="top-header">
         <div className="container">
           <h1 id="header-heading">{this.props.mainHeading}</h1>
           <h3 id="header-subheading">{this.props.subHeading}</h3>
         </div>
       </header>
     </div>
    );
  }
}

module.exports = {
  Header
}
