import React from 'react';
import './App.css';

//contexts
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import FunctionalContextProvider from './contexts/FunctionalContext';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import ChangeThemeButton from './components/ChangeThemeButton';
import ChangeAuthButton from './components/ChangeAuthButton';

function App() {
  return (
    <div className='app'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <FunctionalContextProvider>
            <Header />
            <Footer />
            <ChangeThemeButton />
            <ChangeAuthButton />
          </FunctionalContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
