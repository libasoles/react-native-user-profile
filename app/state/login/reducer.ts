import ReduxAction from "../../types/reduxAction";

const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

type Payload = {
  user?: string;
  errorMessage?: string;
};

export default function auth(
  state = initialState,
  action: ReduxAction<Payload>
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.payload.errorMessage
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: action.payload.user,
        errorMessage: null
      };
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      };
    default:
      return state;
  }
}
