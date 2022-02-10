import { onValue, ref, remove, set, update } from "@firebase/database";
import { db } from "../../services/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHAT = "CHATS::SET_CHAT";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const setChat = (items) => ({
  type: SET_CHAT,
  payload: items,
});

export const initChats = () => (dispatch) => {
  const itemsDbRef = ref(db, "items");
  onValue(itemsDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setChat(Object.values(data || {})));
  });
};

export const addChatFb = (name) => () => {
  const newId = `chats-${Date.now()}`;

  const itemsDbRef = ref(db, `items/${newId}`);

  set(itemsDbRef, {
    id: newId,
    name,
  });
};

export const deleteChats = () => (dispatch) => {
  const itemsDbRef = ref(db, "items");
  onValue(itemsDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(deleteChat(Object.values(data || {})));
  });
};

export const deleteChatFb = (id) => () => {
  const itemsDbRef = ref(db, `items/${id}`);

  remove(itemsDbRef, {
    id,
  });
};
