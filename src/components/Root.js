import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/Login.container';
import DashboardContainer from '../containers/Dashboard.container';
import InsertAdminContainer from '../containers/InsertAdmin.container';
import UserListContainer from '../containers/UserList.container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/insert-admin">
          <InsertAdminContainer />
        </Route>
        <Route path="/user-list">
          <UserListContainer />
        </Route>
        <Route path="/">
          <DashboardContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Root;
