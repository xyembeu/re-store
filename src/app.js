import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from "./components/header/header";
import {routes} from './routes';
import RouteContainer from "./containers/RouteContainer/RouteContainer";


class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    {routes.map(({isPrivate, path, isExact, component}) => (
                        <RouteContainer key={path} exact={isExact} path={path} component={component}
                                      isPrivate={isPrivate}/>
                    ))}
                </Switch>
            </>
        );
    }
}

export default withRouter(App);
