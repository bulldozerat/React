import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  };

  changeTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    const selectedTheme = this.state.isLightTheme ? this.state.light : this.state.dark;

    return (
      <ThemeContext.Provider value={{ ...selectedTheme, changeTheme: this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
