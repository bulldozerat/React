import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ChangeThemeButton = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <button style={{ backgroundColor: context.bg }} onClick={context.changeTheme}>
          Change theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ChangeThemeButton;
