import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import {InputField} from "../components/ui/input/input";
import {connect} from "react-redux";
import {logIn, logOut} from "../actions/auth";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="username"
                component={InputField}
                type="text"
                placeholder="First Name"
            />
            <Field
                name="password"
                component={InputField}
                type="password"
                placeholder="Password"
            />
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

class LoginPage extends Component {
    check = (data) => {
        this.props.logIn(data);
    };

    logOutF = () => {
        this.props.logOut();
    };

    render() {
        const {user, loading, error, isAuthorized} = this.props;

        if (isAuthorized) {
            return <Redirect to='/' />;
        }

        return (
            <div className="container">
                <div className="col-md-12">
                    <h4>Login</h4>
                    <LoginReduxForm onSubmit={this.check}/>
                    {loading &&  <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {user.username && <div>{user.username} <button onClick={this.logOutF}>logOut</button></div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user, loading, error} = state.auth;
    return {
        user,
        loading,
        error,
        isAuthorized: !!(state.auth.user.username)
    }
};

const mapDispatchToProps = {
    logIn,
    logOut
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
