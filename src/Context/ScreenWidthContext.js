import React, { useContext, useState, useEffect } from 'react';

const ScreenWidthContext = React.createContext();
export const useScreenWidth = () => {
  return useContext(ScreenWidthContext);
};

export const ScreenWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  // reset width and height on resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const value = {
    width,
  };

  return (
    <ScreenWidthContext.Provider value={value}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
