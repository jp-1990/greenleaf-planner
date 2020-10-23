import React, { useContext } from 'react';

const StaffContext = React.createContext();
export const useStaff = () => {
  return useContext(StaffContext);
};

export const StaffProvider = ({ children }) => {
  const colors = {
    Nick: '#f44336',
    Zack: '#ffc107',
    Neil: '#00bcd4',
    James: '#0d47a1',
    Alan: '#00c853',
  };

  const value = {
    colors,
  };

  return (
    <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
  );
};
