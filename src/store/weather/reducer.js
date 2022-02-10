import { REQUEST_STATUS } from "../../components/utils/constans";
import {GET_WEATHER_LOADING, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE} from "./actions";

const initialState = {
  list: [],
  request: {
    error: null,
    status: REQUEST_STATUS.IDLE,
  },
};

export const tempsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_LOADING: {
      return {
        ...state,
        request: {
          error: null,
          status: REQUEST_STATUS.PENDING,
        },
      };
    }
    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.SUCCESS,
        },
        list: payload,
      };
    }
    case GET_WEATHER_FAILURE: {
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    }
    default:
      return state;
  }
};
