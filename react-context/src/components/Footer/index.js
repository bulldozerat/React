import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

class Footer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>{context => <p style={{ backgroundColor: context.bg }}>footer</p>}</ThemeContext.Consumer>
    );
  }
}

export default Footer;
