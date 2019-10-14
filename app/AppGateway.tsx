import React from "react";
import { connect } from "react-redux";

import App from "./AppLayout";
import Login from "./screens/Login";
import { login, authenticate, logout } from "./state/login/actions";

function AppGateway({ auth, authenticate, login }) {
  authenticate();

  if (!auth.currentUser) {
    return (
      <Login
        onSubmit={login}
        isAuthenticating={auth.isAuthenticating}
        errorMessage={auth.errorMessage}
      />
    );
  }

  return <App />;
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => {
      dispatch(login(credentials));
    },
    logout: () => {
      dispatch(logout());
    },
    authenticate: () => {
      dispatch(authenticate());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppGateway);
