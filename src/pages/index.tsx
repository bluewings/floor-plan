import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home, { uriPattern as home_path } from './home';
import Workspace, { uriPattern as workspace_path } from './workspace';
import Layout from '../components/Layout';

const pages = [
  {
    path: home_path,
    exact: true,
    component: Home,
  },
  {
    path: workspace_path,
    component: Workspace,
  },
];

const REDIRECT_URI = { DEFAULT: home_path };

const routes = [
  ...pages.map(({ path, exact, component: Component }: any, i) => {
    const Page = (props: any) => <Component {...props} />;
    return (
      <Route key={`route-${i}`} path={path} exact={!!exact} render={Page} />
    );
  }),
  <Redirect key="redirect-to-default" to={REDIRECT_URI.DEFAULT} />,
];

export default () => (
  <Layout>
    <Switch>{routes}</Switch>
  </Layout>
);
