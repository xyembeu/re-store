import React from 'react';
import {useSelector} from "react-redux";

import BookFilter from "../../components/book-filter/book-filter";

import {filterReSelector} from "../../selectors/books";
import pickBy from "lodash.pickby";
import identity from "lodash.identity";
import queryString from "query-string";
import {withRouter} from "react-router-dom";


function BookFilterContainer(props) {

    const filter = useSelector(state => filterReSelector(state, props));

    const filterGet = (filter) => {
        if (!Object.keys(filter).length) {
            props.history.push(`/orders`);
            return;
        }
        const cleanedFilters = pickBy(filter, identity);
        const queryParams = queryString.stringify(cleanedFilters);
        props.history.push('/orders?' + queryParams);
    };

    return (
        <>
            <BookFilter setFilter={filterGet} filter={filter}/>
        </>
    )

}

export default withRouter(BookFilterContainer);
