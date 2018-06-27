import React from 'react';

class Nav extends React.Component {
  render () {
    let navObj = [];
    if(this.props.sendJsonData != 'empty') {
      for (let index in this.props.sendJsonData['nav']['menuItems']) {
        navObj.push(this.props.sendJsonData['nav']['menuItems'][index])
      }
    }

    console.log(navObj);
    return (
     <div>
       <nav className="main-nav">
         <div className="container">
           <ul id="main-nav-ul">
             {navObj.map(item => <li key={item}><a href="" title={item}>{item}</a></li>) }
           </ul>
         </div>
       </nav>
     </div>
    );
  }
}

module.exports = {
  Nav
}
