import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };

  changeAuthStatus = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
