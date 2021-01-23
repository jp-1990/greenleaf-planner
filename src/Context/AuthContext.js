import React, { useContext, useState, useEffect } from 'react';
import { auth, database } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    return auth.signOut();
  };

  // Write a new user to the database (must also have an account, and displayname set on the account)
  // const writeUser = (userId, displayName, email, role, accessLevel) => {
  //   database.ref('users/' + userId).set({
  //     accessLevel: accessLevel,
  //     displayName: displayName,
  //     email: email,
  //     role: role,
  //   });
  //   console.log('added', userId, displayName, email, role, accessLevel);
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        database
          .ref('/users/' + user.uid)
          .once('value')
          .then((snapshot) => {
            setCurrentUser({
              user: user,
              accessLevel: snapshot.val().accessLevel,
            });
            setLoading(false);
          });
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
