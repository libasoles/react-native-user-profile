import jwtDecode from "jwt-decode";

import texts from "../../config/texts";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./reducer";
import { api, setAPIToken } from "../../services/api";
import Storage from "../../services/storage";

const authStorageKey = "authToken";

function loginAction(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user: jwtDecode(token)
    }
  };
}

function loginErrorAction(message) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      errorMessage: message
    }
  };
}

/**
 * If user already has a valid token, log in
 */
export function authenticate() {
  return async (dispatch, getState) => {
    try {
      const alreadyAuthenticated = getState().auth.currentUser;
      if (!alreadyAuthenticated) {
        const currentToken = await Storage.getItem(authStorageKey);
        setAPIToken(currentToken);
        dispatch(loginAction(currentToken));
      }
    } catch (e) {}
  };
}

/**
 * Creates a token for the user
 * @param credentials
 */
export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });

    api
      .post("/auth/local", credentials)
      .then(res => {
        const { access_token } = res.data;
        setAPIToken(access_token);
        Storage.setItem(authStorageKey, access_token);

        dispatch(loginAction(access_token));
      })
      .catch(() => {
        dispatch(loginErrorAction(texts.login.error));
      });
  };
}

export function logout() {
  return (dispatch, getState) => {
    Storage.removeItem(authStorageKey);
    const isLogged = getState().auth.currentUser;
    if (isLogged) {
      dispatch({ type: LOGOUT });
    }
  };
}
