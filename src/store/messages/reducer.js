import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from "./actions";

const initialState = {
  messagesList: {},
};

export const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [payload.itemId]: [
            ...(state.messagesList[payload.itemId] || []),
            {
              id: `message-${Date.now()}`,
              text: payload.text,
              author: payload.author,
            },
          ],
        },
      };
    }
    case DELETE_MESSAGE: {
      const newChatMessages = state.messagesList[payload.itemId].filter(
        ({ id }) => id !== payload.id
      );
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [payload.itemId]: newChatMessages,
        },
      };
    }
    case DELETE_CHAT: {
      const newMessages = { ...state.messagesList };
      delete state.messagesList[payload];

      return {
        ...state,
        messagesList: newMessages,
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messagesList: payload,
      };
    }
    default:
      return state;
  }
};
