import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {constructorFetchGet, constructorFetchSet} from "../../actions/constructor";

function ConstructorContainer() {
    const {data, loading, error} = useSelector(state => state.steps);
    const dispatch = useDispatch();
    const fetchGet = useCallback(
        () => dispatch(constructorFetchGet()),
        [dispatch]
    );
    const fetchSet = useCallback(
        (id) => dispatch(constructorFetchSet(id)),
        [dispatch]
    );

    useEffect(() => {
        fetchGet();
    }, []);

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
                    <li key={id} onClick={() => fetchSet(id)}>
                        <span style={{fontWeight: active ? 'bold' : ''}}>{title}</span>
                    </li>
                );
            })}
        </ul>
    );

}

export default ConstructorContainer;