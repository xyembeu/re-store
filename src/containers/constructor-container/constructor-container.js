import React, {Component} from 'react';
import {connect} from "react-redux";
import {constructorFetchGet, constructorFetchSet} from "../../actions/constructor";


class ConstructorContainer extends Component {

    componentDidMount() {
        this.props.constructorFetchGet();
    };

    render() {
        const {data, loading, error, constructorFetchSet} = this.props;
        if (loading) {
            return <div>Loading...</div>
        }
        if (error) {
            return <div>{error}</div>
        }
        return (
            <ul>
                {data.map(({id, title, active}) => {
                    return (
                        <li key={id} onClick={()=>constructorFetchSet(id)}>
                            <span style={{fontWeight: active ? 'bold' : ''}}>{title}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const {data, loading, error} = state.steps;

    return {
        data,
        loading,
        error
    }
};

const mapDispatchToProps = {
    constructorFetchGet,
    constructorFetchSet
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorContainer);