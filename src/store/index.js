import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { newsReduser } from "./articles/reducer";
import { tempsReducer } from "./weather/reducer";
import { homeReducer } from "./home/reducer";

const persistConfig = {
  key: "VeroNiksa",
  storage,
  blacklist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  items: chatsReducer,
  messagesList: messageReducer,
  news: newsReduser,
  tempo: tempsReducer,
  home: homeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
