import React, { createContext, useState } from 'react';

export const FunctionalContext = createContext();

const FunctionalContextProvider = ({ children }) => {
  const [userObj, setUserObjArr] = useState({ name: 'Pesho', age: 30 });

  return <FunctionalContext.Provider value={{ userObj }}>{children}</FunctionalContext.Provider>;
};

export default FunctionalContextProvider;
