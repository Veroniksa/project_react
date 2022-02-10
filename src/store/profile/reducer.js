import { CHANGE_NAME, CHECK_BOX, ON_AUTH, TOOGLE_SHOW_NAME, ON_LOGOUT } from "./action";

const initialState = {
    showName: false,
    checkBox: false,
    name: "default",
    user: '',
};

export const profileReducer = (state = initialState, {type, payload}) => { //{type, payload} деструктаризация action
    switch(type) {
        case TOOGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            };
        }
        case CHECK_BOX: {
            return {
                ...state,
                checkBox: !state.checkBox
            };
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        case ON_AUTH: {
            return {
                ...state,
                user: payload,
            };
        }
        case ON_LOGOUT: {
            return {
                ...state,
                user: payload,
            };
        }
        default:
            return state;
    } 
};