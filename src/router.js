import React from 'react';
import {
  Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import * as History from 'history';

import Layout from './layout';
import Menus from './menus';

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || '',
});

const NotFound = () => <p>Page Not Found</p>;

function MyRouter(props) {
  return (<Layout>
    <Switch>
      {Menus.map((m, i) => <Route exact key={i} path={m.link} component={m.Component}/>)}
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

const WrappedRouter = withRouter(MyRouter);

export default () => <Router history={history}><WrappedRouter/></Router>;