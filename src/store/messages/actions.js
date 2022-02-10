import { onValue, ref, remove, set } from "@firebase/database";
import { AUTHORS } from "../../components/utils/constans";
import { db } from "../../services/firebase";

export const ADD_MESSAGE = "MESSAGESS::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGESS::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGESS::SET_MESSAGES";

export const addMessage = (itemId, text, author) => ({
  type: ADD_MESSAGE,
  payload: {
    itemId,
    text,
    author,
  },
});

export const deleteMessage = (itemId, id) => ({
  type: DELETE_MESSAGE,
  payload: {
    itemId,
    id,
  },
});

export const setMessagesList = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

let timer;
export const addMessageWithReplay = (itemId, text, author) => (dispatch) => {
  dispatch(addMessage(itemId, text, author));

  if (author === AUTHORS.HUMAN) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(addMessage(itemId, "Hello", AUTHORS.bot));
    }, 2000);
  }
};

export const initMessages = () => (dispatch) => {
  const messagesListDbRef = ref(db, "messagesList");
  onValue(messagesListDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setMessagesList(data || {}));
  });
};

export const addMessageFb = (text, author, itemId) => (dispatch) => {
  const newId = `messagesList-${Date.now()}`;
  const messagesListDbRef = ref(db, `messagesList/${itemId}/${newId}`);
  set(messagesListDbRef, {
    author,
    text,
    id: newId,
  });
  //TODO risposta di bot
};

export const deleteMessageFb = (itemId) => () => {
  const itemsDbRef = ref(db, `messagesList/${itemId}`);

  remove(itemsDbRef, {
    itemId,
  });
};
