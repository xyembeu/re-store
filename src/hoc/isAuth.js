import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const isAuth = (WrappedComponent) => {
    class WithAuthorization extends React.Component {

        render() {
            const { isAuthorized } = this.props;
            console.log('123');

            if (!isAuthorized) {
                return <Redirect to='/login' />;
            }

            return <WrappedComponent {...this.props}/>;
        }
    }

    const mapStateToProps = (state) => (
        {
            isAuthorized: !!(state.auth.user.username)
        }
    );

    return connect(mapStateToProps)(WithAuthorization);
};

export default isAuth;
