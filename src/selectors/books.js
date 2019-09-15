import {createSelector} from "reselect";
import queryString from 'query-string';
import {filterData} from "../utils/filterData";


const productsSelector = (state) => {
    return state.books.products;
};

const filterSelector = (state, props) => {
    return props.history.location.search
};

export const productsReSelector = createSelector(
    [productsSelector, filterSelector],
    (products, filter) => {
        return filterData(products, queryString.parse(filter))
    }
);

export const filterReSelector = createSelector(
    [filterSelector],
    (filter) => {
        return queryString.parse(filter)
    }
);

