import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './dist/Components/Header/Header';
import {Nav} from './dist/Components/Nav/Nav';
import {Main} from './dist/Components/Main/Main';
import {Footer} from './dist/Components/Footer/Footer';


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    JSON: 'empty'
  }
}

 componentWillMount() {
  //to work with the locale json use this url
  //const url = 'test.json';

  //to work from the database jason
  const url = 'https://simple-page123.firebaseio.com/.json';
  
  fetch(url)
  .then(response => response.json())
  .then((response) => this.setState({JSON: response}) )
 }

 render() {
   let mainHeading = '';
   let subHeadline = '';
   let footerText = '';
   let mainText = '';

  if(this.state.JSON != 'empty'){
    mainHeading += this.state.JSON['header']['headline'];
    subHeadline += this.state.JSON['header']['subHeadline']['text'];
    mainText += this.state.JSON['main']['text'];
    footerText += this.state.JSON['footer']['footerText'];
  }

    return(
       <div className="main-wrapper">
        <Header mainHeading={mainHeading} subHeading={subHeadline}/>
        <Nav sendJsonData={this.state.JSON}/>
        <Main mainInfo={mainText}/>
        <Footer copyrights={footerText}/>
      </div>
    )

 }

}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
