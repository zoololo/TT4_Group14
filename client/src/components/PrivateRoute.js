import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const someCondition = () => {
  return localStorage.getItem('someCondition');
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      someCondition() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
);

export default PrivateRoute;
