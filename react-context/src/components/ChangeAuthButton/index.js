import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';
import { FunctionalContext } from '../../contexts/FunctionalContext';

const ChangeAuthButton = () => {
  const context = useContext(ThemeContext);
  const context2 = useContext(AuthContext);
  const context3 = useContext(FunctionalContext);

  return (
    // context first way
    // <ThemeContext.Consumer>
    //   {context => (
    //     <AuthContext.Consumer>
    //       {context2 => (
    //         <>
    //           <button style={{ backgroundColor: context.bg }} onClick={context2.changeAuthStatus}>
    //             Change auth
    //           </button>
    //           <p>{context2.isAuthenticated ? 'User is Authenticard' : 'User is not Authenticated'}</p>
    //         </>
    //       )}
    //     </AuthContext.Consumer>
    //   )}
    // </ThemeContext.Consumer>

    // context second way
    <>
      <button style={{ backgroundColor: context.bg }} onClick={context2.changeAuthStatus}>
        Change auth
      </button>
      <button>{context3.userObj.name}</button>
      <p>{context2.isAuthenticated ? 'User is Authenticard' : 'User is not Authenticated'}</p>
    </>
  );
};

export default ChangeAuthButton;
