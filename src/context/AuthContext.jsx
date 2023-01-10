import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //   SIGNUP FUNCTION
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //   LOGIN FUNCTION
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //   LOGOUT FUNCTION
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
    })
    return () => {
        unsubscribe()
    }
  })

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
