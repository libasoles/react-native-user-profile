import jwtDecode from "jwt-decode";

import config from "../../config";
import texts from "../../config/texts";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./reducer";
import { createClient, setClientToken } from "../../services/api";
import Storage from "../../services/storage";

const api = createClient({ baseURL: config.api.baseURL });

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
 * User already has a valid token
 */
export function authenticate() {
  return (dispatch, getState) => {
    Storage.getItem(authStorageKey).then(token => {
      const alreadyLogged = getState().auth.currentUser;
      if (!alreadyLogged) {
        dispatch(loginAction(token));
      }
    });
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
        setClientToken(api, access_token); // configure api client
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
