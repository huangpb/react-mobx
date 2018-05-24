import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect, withRouter } from 'react-router-dom';

let pages = {
    Home: () => require('@/pages/home').default,
}

export default class RootRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={pages.Home()}/>
                    <Route component={pages.Home()}/>
                </Switch>
            </Router>
        )
    }
}
