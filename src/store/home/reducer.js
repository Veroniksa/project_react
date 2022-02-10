import { REQUEST_STATUS } from "../../components/utils/constans";
import { CHANGE_STATUS, ERROR_LOGIN, HANDEL_LOGIN } from "./actions";

const initialState = {
  email: null,
  pass: null,
  authed: false,
  setAuthed: false,
  request: {
    error: null,
    status: REQUEST_STATUS.IDLE,
  },
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDEL_LOGIN: {
      return {
          ...state,
          email: state.email,
          pass: state.pass,
      };
  }
    case CHANGE_STATUS: {
      return {
        ...state,
        authed: payload.authed,
        setAuthed: payload.setAuthed
      };
    }
    case ERROR_LOGIN: {
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        }
      }
    }
    default: 
    return state
  }
};
