import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/containers/Loading';
import { Route, Switch } from 'react-router-dom';

const HomePage = Loadable({
    loader: () => import('../pages/HomePage'),
    loading: Loading
});

const AccountPage = Loadable({
    loader: () => import('../pages/AccountPage'),
    loading: Loading
});

const AdminPage = Loadable({
    loader: () => import('../pages/AdminPage'),
    loading: Loading
});

const FeedPage = Loadable({
    loader: () => import('../pages/FeedPage'),
    loading: Loading
});

const PostPage = Loadable({
    loader: () => import('../pages/PostPage'),
    loading: Loading
});

export default (
    <Switch>
        <Route path="/feed/:postId" component={PostPage} />
        <Route exact path="/feed" component={FeedPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={HomePage} />
    </Switch>
);
