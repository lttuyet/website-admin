import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/Login.container';
import DashboardContainer from '../containers/Dashboard.container';
import InsertAdminContainer from '../containers/InsertAdmin.container';
import UserListContainer from '../containers/UserList.container';
import TagListContainer from '../containers/TagList.container';
import InsertTagContainer from '../containers/InsertTag.container';
import DetailContainer from '../containers/Detail.container';
import ContractListContainer from '../containers/ContractList.container';
import AdminListContainer from '../containers/AdminList.container';

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
        <Route path="/detail">
          <DetailContainer />
        </Route>
        <Route path="/user-list">
          <UserListContainer />
        </Route>
        <Route path="/tag-list">
          <TagListContainer/>
        </Route>
        <Route path="/insert-tag">
          <InsertTagContainer/>
        </Route>
        <Route path="/contract-list">
          <ContractListContainer/>
        </Route>
        <Route path="/admin-list">
          <AdminListContainer/>
        </Route>
        <Route path="/">
          <DashboardContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Root;
