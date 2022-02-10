import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home";
import Chats from "../Chats/";
import { ThemeProfile } from "../Profile";

import "./style.css";
import { News } from "../News";
import { Weather } from "../Weather";
import { PrivateRoute } from "../PrivateRoute";
import { useEffect, useState } from "react";
import { PublicRoute } from "../PublicRoute";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, login, signUp } from "../../services/firebase";
import { handleLoginFb } from "../../store/home/actions";
import { useDispatch } from "react-redux";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //Подптска на объект auth за которым необх. следить
    //передаем callback который будет выполнен
    //после изменения состояния авторизации
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
    //dispatch(onAuthFb);

    return unsubscribe;
  }, []);

  const handleLogin = async (email, pass) => {
/*     try {
      await login(email, pass);
      //setAuthed(true);
    } catch (e) {
      console.log(e);
      //setError()
    } */
    dispatch(handleLoginFb(email, pass));
    //dispatch(userLogin(email, pass))
  };

  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
      //setAuthed(true)
    } catch (e) {
      console.log(e);
      //setError()
    }
    //dispatch(userSignUp(email, pass));
  };

  return (
    <BrowserRouter className="router">
      <div className="nav">
        <ul className="links">
          <li className="link">
            <Link to="chats">Chats</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="weather">Weather</Link>
          </li>
          <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign up</Link>
          </li>
          </ul>
        </ul>
      </div>

      <Switch>
        <PrivateRoute path="/profile" exact authed={authed}>
          <ThemeProfile theme={null} />
        </PrivateRoute>
        <PrivateRoute static path="/chats/:itemId?" authed={authed}>
          <Chats />
        </PrivateRoute>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <PublicRoute path="/login" authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" authed={authed}>
          <Home onSignUp={handleSignUp} />
        </PublicRoute>
        <Route>
          <h3>Error: 404</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
