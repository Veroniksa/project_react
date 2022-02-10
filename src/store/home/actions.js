import { onAuthStateChanged } from "@firebase/auth";
import { auth, login, signUp } from "../../services/firebase";
import { onAuth } from "../profile/action";

export const HANDEL_LOGIN = "HOME::HANDEL_LOGIN";
export const CHANGE_STATUS = "HOME::CHANGE_STATUS";
export const ERROR_LOGIN = "HOME::ERROR_LOGIN";

export const handelLodin = (email, pass) => ({
  type: HANDEL_LOGIN,
  payload: {
    email,
    pass,
  },
});

export const authUser = (authed, setAuthed) => ({
  type: CHANGE_STATUS,
  payload: {
    authed: true,
    setAuthed: true,
  },
});

export const erroroLogin = (error) => ({
  type: ERROR_LOGIN,
  payload: error,
});

export const handleLoginFb = (email, pass) => (dispatch) => {
  dispatch(handelLodin(email, pass));
  try {
    login(email, pass);
    //setAuthed(true);
  } catch (e) {
    console.log("fallimento");
    dispatch(erroroLogin(e.error));
    //setError()
  }
};

export const unsubscribe = onAuthStateChanged(auth, (user) => (dispatch) => {
  console.log(user);
  if (user) {
    dispatch(authUser);
  }
  return;
});

export const userLogin = (email, pass) => {
  try {
    login(email, pass);
  } catch (e) {
    console.log(e);
  }
};

export const userSignUp = (email, pass) => {
  try {
    signUp(email, pass);
  } catch (e) {
    console.log(e);
  }
};
