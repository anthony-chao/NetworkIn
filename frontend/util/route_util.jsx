import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact}
        render={(props) => ( loggedIn ? <Redirect to='/feed' /> : <Component {...props} /> )
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact}
        render={(props) => ( loggedIn ? <Component {...props} /> : <Redirect to='/' /> )
    } 
  />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.user)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));