import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
  return (
    <ThemeContext.Consumer>{context => <p style={{ backgroundColor: context.bg }}>Header</p>}</ThemeContext.Consumer>
  );
};

export default Header;
