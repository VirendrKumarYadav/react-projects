import React, { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider( props) {
  const [currentUser, setCurrentUser] = useState();



  // const [loading, setLoading] = useState(true);
  // Signs up on firebase with email and password.
  
  const signup = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth,email, password);
  }


  const value = {
    currentUser,
    setCurrentUser,
    signup,
  };


  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
} 
export default AuthProvider;
