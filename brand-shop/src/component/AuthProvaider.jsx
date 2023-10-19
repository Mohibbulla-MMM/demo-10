import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

//  auth context
export const AuthContext = createContext(null);
// google provaider
const googleProvaider = new GoogleAuthProvider();
// github provaider
const githubProvaider = new GithubAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState();
  // loading
  const [loading, setLoading] = useState(true);

  //  create user with email and password
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user sign in
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user login with email
  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };
  // user login with gihub
  const loginGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvaider);
  };
  // user log  out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user observer
  useEffect(() => {
    const unSubsCriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubsCriber();
  }, []);
  const authInfo = {
    user,
    loading,
    userCreate,
    userLogin,
    loginGoogle,
    loginGithub,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
