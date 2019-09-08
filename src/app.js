import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from "./components/header/header";
import isAuth from './hoc/isAuth';
import { routes } from './routes';
class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    {routes.map(route => {
                        const component = route.isPrivate ? isAuth(route.component) : route.component;
                        return (
                            <Route
                                key={route.path}
                                exact={route.isExact}
                                path={route.path}
                                component={component}
                            />
                        );
                    })}
                </Switch>
            </>
        );
    }
}

export default withRouter(App);
